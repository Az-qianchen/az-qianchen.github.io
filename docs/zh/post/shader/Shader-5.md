---
tags: ["Shader"] # 标签
author: "仟尘" # 作者
title: "Godot Shader 范围指示器" # 标题
date: "2024-05-12" # 日期

description: "Shader 分享" # 页面描述、面向搜索引擎用户
head:
  - - meta
    - name: Keywords
      content: "Godot,Shader,范围指示,技能指示" # 网站关键词（SEO）
---

## 使用演示

<billbill id="BV1Sf42127Jc"/>

## 实现解析

### 着色器脚本（矩形）

``` glsl
shader_type spatial;
render_mode unshaded, depth_draw_never, skip_vertex_transform;

uniform sampler2D depth_texture : hint_depth_texture, repeat_disable, filter_nearest; // 深度贴图
uniform sampler2D gradient_texture  : repeat_disable;

instance uniform vec3 range = vec3(1.0); // 范围
uniform float camera_near = 0.05; //（设为相机近平面距离）

void vertex() {
	// 顶点变换到视图空间
	vec4 VIEW_VERTEX = MODELVIEW_MATRIX * vec4(VERTEX, 1.0);
	// 确保在放大时网格不被近平面剪裁
	VIEW_VERTEX.z = min(VIEW_VERTEX.z, -camera_near);
	VERTEX = VIEW_VERTEX.xyz;
}

void fragment() {
	// https://docs.godotengine.org/zh-cn/4.x/tutorials/shaders/advanced_postprocessing.html#depth-texture
	float depth = texture(depth_texture, SCREEN_UV).x; // 获取深度纹理
	vec3 ndc = vec3(SCREEN_UV * 2.0 - 1.0, depth); // xy 原点轴屏幕居中
	vec4 world = INV_VIEW_MATRIX * INV_PROJECTION_MATRIX * vec4(ndc, 1.0);
	vec3 world_position = world.xyz / world.w; // 获取世界坐标

	// 将世界坐标转换为物体的局部坐标
	vec3 local_position = (inverse(MODEL_MATRIX) * vec4(world_position, 1.0)).xyz;
//
	//// 计算物体局部坐标系中的距离
	vec3 center_distance = abs(local_position); // 使用局部坐标
	if (center_distance.x >= range.x || center_distance.y >= range.y || center_distance.z >= range.z) discard; // 剪切范围外像素
	center_distance = 1.0 - center_distance / range; // 计算映射
	vec4 gradient = texture(gradient_texture, vec2(center_distance.x * center_distance.y * center_distance.z)); // 映射过度
//
	ALBEDO = gradient.rgb;
	ALPHA = gradient.a;
	
	//ALBEDO = vec3(center_distance.x * center_distance.y * center_distance.z);
	//ALBEDO = vec3(center_distance.x);
}
```

---
### 着色器脚本（圆形）

``` glsl
shader_type spatial;
render_mode unshaded, depth_draw_never, skip_vertex_transform;

uniform sampler2D depth_texture : hint_depth_texture, repeat_disable, filter_nearest; // 深度贴图
uniform sampler2D gradient_texture  : repeat_disable;

instance uniform float range = 1.0; // 范围
uniform float camera_near = 0.05; //（设为相机近平面距离）

void vertex() {
	// 顶点变换到视图空间
	vec4 VIEW_VERTEX = MODELVIEW_MATRIX * vec4(VERTEX, 1.0);
	// 确保在放大时网格不被近平面剪裁
	VIEW_VERTEX.z = min(VIEW_VERTEX.z, -camera_near);
	VERTEX = VIEW_VERTEX.xyz;
}

void fragment() {
	// https://docs.godotengine.org/zh-cn/4.x/tutorials/shaders/advanced_postprocessing.html#depth-texture
	float depth = texture(depth_texture, SCREEN_UV).x; // 获取深度纹理
	vec3 ndc = vec3(SCREEN_UV * 2.0 - 1.0, depth); // xy 原点轴屏幕居中
	vec4 world = INV_VIEW_MATRIX * INV_PROJECTION_MATRIX * vec4(ndc, 1.0);
	vec3 world_position = world.xyz / world.w; // 获取世界坐标

	float center_distance = distance(NODE_POSITION_WORLD, world_position); // 相对于物体的距离
	if (center_distance >= range) discard; // 剪切范围外像素
	vec4 gradient = texture(gradient_texture, vec2(center_distance / range)); // 映射过度

	ALBEDO = gradient.rgb;
	ALPHA = gradient.a;
	//ALBEDO = vec3(world_position.z);
}
```

---
### 着色器脚本（锥形）

``` glsl
shader_type spatial;
render_mode unshaded, depth_draw_never, skip_vertex_transform;

uniform sampler2D depth_texture : hint_depth_texture, repeat_disable, filter_nearest; // 深度贴图
uniform sampler2D gradient_texture  : repeat_disable;

instance uniform float range = 1.0; // 范围
instance uniform float cone_angle = 30; // 锥形的角度
uniform float camera_near = 0.05; //（设为相机近平面距离）

void vertex() {
	// 顶点变换到视图空间
	vec4 VIEW_VERTEX = MODELVIEW_MATRIX * vec4(VERTEX, 1.0);
	// 确保在放大时网格不被近平面剪裁
	VIEW_VERTEX.z = min(VIEW_VERTEX.z, -camera_near);
	VERTEX = VIEW_VERTEX.xyz;
}

void fragment() {
	float radian = radians(cone_angle);
	
	// https://docs.godotengine.org/zh-cn/4.x/tutorials/shaders/advanced_postprocessing.html#depth-texture
	float depth = texture(depth_texture, SCREEN_UV).x; // 获取深度纹理
	vec3 ndc = vec3(SCREEN_UV * 2.0 - 1.0, depth); // xy 原点轴屏幕居中
	vec4 world = INV_VIEW_MATRIX * INV_PROJECTION_MATRIX * vec4(ndc, 1.0);
	vec3 world_position = world.xyz / world.w; // 获取世界坐标

	// 将世界坐标转换为物体的局部坐标
	vec3 local_position = (inverse(MODEL_MATRIX) * vec4(world_position, 1.0)).xyz;
	vec3 direction_to_fragment = normalize(world_position - NODE_POSITION_WORLD);

	// 计算圆
	float center_distance = distance(NODE_POSITION_WORLD, world_position); // 相对于物体的距离
	if (center_distance >= range) discard; // 剪切范围外像素

	// 计算从物体中心到片段的方向
	vec3 object_up_direction = normalize(mat3(MODEL_MATRIX) * vec3(0.0, 1.0, 0.0));

	// 计算方向向量之间的点积，并通过反余弦函数获取角度
	float angle = acos(dot(direction_to_fragment, object_up_direction));

	// 如果角度大于锥角，则丢弃片段
	if (angle > radian)discard;

	vec4 gradient = texture(gradient_texture, vec2((1.0 - (angle / PI) / (radian / PI)) * (1.0 - center_distance / range))); // 映射过度

	if ((1.0 - (angle / PI) / (radian / PI)) * (1.0 - center_distance / range) <= 0.0)discard;

	ALBEDO = gradient.rgb;
	ALPHA = gradient.a;
	
	//ALBEDO = vec3( (1.0 - (angle / PI) / (radian / PI)) * (1.0 - center_distance / range) );
	//ALBEDO = vec3(world_position.z);
}
```

---
### 着色器脚本（距离场）

``` glsl
shader_type spatial;
render_mode unshaded, depth_draw_never, skip_vertex_transform;

uniform sampler2D depth_texture : hint_depth_texture, repeat_disable, filter_nearest; // 深度贴图
uniform sampler2D gradient_texture  : repeat_disable;

instance uniform float angle = 30.0; // 锥形的顶角度
instance uniform vec3 range = vec3(1.0); // 范围
instance uniform float rounded = 1.0; // 圆角
uniform float camera_near = 0.05; //（设为相机近平面距离）

// https://iquilezles.org/articles/distfunctions/
// p：点的位置 b：盒子尺寸 r：圆角半径
float sdRoundBox( vec3 p, vec3 b, float r )
{
	// 距离场 max 取正值 min 取负值
	vec3 q = abs(p) - b;
	return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}

float sdCone( vec3 p,vec2 c)
{
	vec2 q = vec2( length(p.xz), -p.y );
	float d = length(q-c*max(dot(q,c), 0.0));
	return d * ((q.x*c.y-q.y*c.x<0.0)?-1.0:1.0);
}

void vertex() {
	// 顶点变换到视图空间
	vec4 VIEW_VERTEX = MODELVIEW_MATRIX * vec4(VERTEX, 1.0);
	// 确保在放大时网格不被近平面剪裁
	VIEW_VERTEX.z = min(VIEW_VERTEX.z, -camera_near);
	VERTEX = VIEW_VERTEX.xyz;
}

void fragment() {
	// https://docs.godotengine.org/zh-cn/4.x/tutorials/shaders/advanced_postprocessing.html#depth-texture
	float depth = texture(depth_texture, SCREEN_UV).x; // 获取深度纹理
	vec3 ndc = vec3(SCREEN_UV * 2.0 - 1.0, depth); // xy 原点轴屏幕居中
	vec4 world = INV_VIEW_MATRIX * INV_PROJECTION_MATRIX * vec4(ndc, 1.0);
	vec3 world_position = world.xyz / world.w; // 获取世界坐标

	// 将世界坐标转换为物体的局部坐标
	vec3 local_position = (inverse(MODEL_MATRIX) * vec4(world_position, 1.0)).xyz;

	// 距离场
	float radian = radians(angle/2.0);
	float center_distance = max(sdRoundBox(local_position, range-rounded, rounded),sdCone(local_position, vec2(sin(radian),cos(radian))));
	if (angle <= 360.0){
		center_distance = max(sdRoundBox(local_position, range-rounded, rounded),sdCone(local_position, vec2(sin(radian),cos(radian))));
	}else{
		center_distance = sdRoundBox(local_position, range-rounded, rounded);
	}
	if (center_distance >= 0.0) discard; // 剪切范围外像素
	vec4 gradient = texture(gradient_texture, vec2(-center_distance)); // 映射过度

	ALBEDO = gradient.rgb;
	ALPHA = gradient.a;

	//ALBEDO = vec3(center_distance.x * center_distance.y * center_distance.z);
	//ALBEDO = vec3(world_position.z);
}
```

---
### 着色器脚本（后处理）

``` glsl
shader_type spatial;
render_mode unshaded, depth_draw_never;

uniform sampler2D depth_texture : hint_depth_texture, repeat_disable, filter_nearest; // 深度贴图
uniform sampler2D gradient_texture  : repeat_disable;

instance uniform vec3 position; // 位置
instance uniform float range = 1.0; // 范围
uniform float camera_near = 0.05; //（设为相机近平面距离）


void fragment() {
	// https://docs.godotengine.org/zh-cn/4.x/tutorials/shaders/advanced_postprocessing.html#depth-texture
	float depth = texture(depth_texture, SCREEN_UV).x; // 获取深度纹理
	vec3 ndc = vec3(SCREEN_UV * 2.0 - 1.0, depth); // xy 原点轴屏幕居中
	vec4 world = INV_VIEW_MATRIX * INV_PROJECTION_MATRIX * vec4(ndc, 1.0);
	vec3 world_position = world.xyz / world.w - position; // 获取世界坐标

	float center_distance = distance(NODE_POSITION_WORLD, world_position); // 相对于物体的距离
	if (center_distance >= range) discard; // 剪切范围外像素
	vec4 gradient = texture(gradient_texture, vec2(center_distance / range)); // 映射过度

	ALBEDO = gradient.rgb;
	ALPHA = gradient.a;
	//ALBEDO = vec3(world_position.z);
}
```

---
### 网格脚本（后处理）

``` python
@tool
extends MeshInstance3D

@export var target: Node3D

func _process(delta: float) -> void:
	set_instance_shader_parameter("position", target.global_position - global_position)

```