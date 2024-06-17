---
tags: ["Shader"] # 标签
author: "仟尘" # 作者
title: "Godot Shader 多层草地效果" # 标题
date: "2024-05-07" # 日期

description: "Godot Shader 分享" # 页面描述、面向搜索引擎用户
Keywords: "Godot,Shader,草地" # 网站关键词（SEO）

---

## 使用演示

<billbill id="BV1Tf421U7VA"/>

## 实现解析

<billbill id="BV1Dw4m1X7YV"/>

## 用于网格节点的脚本

``` python
@tool
extends MeshInstance3D

@onready var max_layer = 16 # 总共层数
@onready var next_layer = []

# 生成材质层数
func _ready():
	# 存在材质
	if material_override:
		# 获取旧材质
		var color = material_override.get_shader_parameter("base_color")
		var stress_tex = material_override.get_shader_parameter("stress_tex")
		var voronoi_tex = material_override.get_shader_parameter("voronoi_tex")
		var mask_tex = material_override.get_shader_parameter("mask_tex")
		# 生成多层材质
		for i in range(max_layer):
			var l = ShaderMaterial.new()
			l.shader = material_override.shader
			l.set_shader_parameter("base_color",color)
			l.set_shader_parameter("mask_tex",mask_tex)
			l.set_shader_parameter("stress_tex",stress_tex)
			l.set_shader_parameter("voronoi_tex",voronoi_tex)
			# 设置层顺序
			l.set_shader_parameter("num",max_layer - i)
			l.set_render_priority(max_layer - i)
			if i > 0:
				l.next_pass = next_layer[i-1]
			next_layer.append(l)
		# 添加最后一层
		material_override.next_pass = next_layer[max_layer-1]
```

## Godot Shader 代码

``` glsl
shader_type spatial;
render_mode  cull_back;

uniform sampler2D stress_tex : source_color,repeat_enable; // 偏移贴图
uniform sampler2D voronoi_tex : source_color,repeat_enable; // 沃罗诺伊噪声
uniform sampler2D mask_tex : source_color,repeat_enable; // 蒙版贴图
uniform vec3 base_color:source_color; // 基础颜色
uniform float num; //层

uniform float layer_offset = 0.005; // 层偏移
uniform float thick = 600.0; // 影响噪声偏移/噪声尺寸
uniform float step_base = 0.002; // 高度偏移（整体下移）
uniform float step_layer = 0.05; // 每层偏移强度（越大越扁）

uniform float speed = 0.01; // 动画偏移强度

// 生成伪随机向量
vec2 rand2( vec2 coord ) {
	// 防止坐标过大的导致的随机性降低
	coord = mod(coord, 10000.0);
	// 返回 x 和 y 在 0-1 之间的伪随机二维向量
    return fract(sin( vec2( dot(coord,vec2(127.1,311.7)), dot(coord,vec2(269.5,183.3)) ) ) * 43758.5453);
}
// 沃罗诺伊噪声
float cellular_noise(vec2 coord) {
	vec2 i = floor(coord); // 整数部分
	vec2 f = fract(coord); // 小数部分
	float min_dist = 99999.0;
	// 为 3x3 的网格各生成一个随机点
	for(float x = -1.0; x <= 1.0; x++) {
		for(float y = -1.0; y <= 1.0; y++) {
			// 生成随机点
			vec2 node = rand2(i + vec2(x, y)) + vec2(x, y);
			// 勾股定理求斜边
			float dist = sqrt(pow((f - node).x, 2.0) + pow((f - node).y, 2.0));
			// 限制最大值
			min_dist = min(min_dist, dist);
		}
	}
	return min_dist;
}

void vertex(){
	VERTEX += NORMAL * num * layer_offset; //层偏移
}

void fragment() {
	vec2 stress = num * (texture(stress_tex,UV + TIME * speed).rg - 0.5); // 读取噪音图
	float voronoi = texture(voronoi_tex,UV + (stress/thick)).r; // 沃罗诺伊偏移
	//float voronoi = cellular_noise(UV * thick + stress); // 沃罗诺伊偏移
	vec3 mask = texture(mask_tex,UV).rgb; // 读取蒙版图
	ALBEDO = base_color * mask; // 设置颜色
	ALPHA = max(step(step_base + step_layer * num,(1.0 - voronoi) * mask.r) , step(num,0.5)); // 设置透明度
	ROUGHNESS = 0.9; //设置粗糙度
	
	//ALBEDO = vec3(voronoi);
}

void light() {
	DIFFUSE_LIGHT += base_color * num * 0.02 * LIGHT_COLOR * ATTENUATION;
}
```
以上为 Godot Shader 代码，有任何问题欢迎进行留言