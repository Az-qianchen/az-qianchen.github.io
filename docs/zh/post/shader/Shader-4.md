---
tags: ["Shader"] # 标签
author: "仟尘" # 作者
title: "Shader 面片草地效果" # 标题
date: "2024-05-11" # 日期

description: "Godot Shader 分享" # 页面描述、面向搜索引擎用户
Keywords: "Godot,Shader,草地" # 网站关键词（SEO）

---

## 使用演示

<billbill id="BV1K1421z7gP"/>

## 实现解析

<billbill id="BV1wD421A7Aa"/>

## Godot Shader 代码

``` glsl
shader_type spatial;
render_mode cull_disabled; //禁用面剔除

uniform float sway = 0.5; //摆动强度
uniform float bent = 0.2; //弯曲幅度
uniform float scale = 0.01; //噪音缩放比例
uniform float time_scale =0.1; //速度
uniform vec3 sway_dir = vec3(1.0,0.0,1.0); //风力方向
uniform float color_scale = 0.04; //颜色强度
uniform vec4 top_color : source_color; //顶部颜色
uniform vec4 bot_color : source_color; //底部颜色
uniform sampler2D sway_noise; //噪音贴图

varying vec3 vert; //储存初始位置

void vertex() //摆动计算
{
	vert = VERTEX; //储存初始位置
	NORMAL = vec3(0.0, 1.0, 0.0); // 统一法向

	vec4 sway_dir_world = vec4(sway_dir, 0.0) * MODEL_MATRIX; // 将风力方向由模型空间转换为世界空间（统一朝向）
	vec3 world_vertex = (MODEL_MATRIX * vec4(VERTEX,1.0)).xyz; // 顶点在世界空间的位置(充当 UV)

	float curent_wind = texture(sway_noise, world_vertex.xz * scale - TIME * time_scale * sway_dir.xz).x; //根据世界位置采样风力噪声贴图,得到风力值
	VERTEX.xz += normalize(sway_dir_world.xz) * sway * curent_wind * VERTEX.y; //根据风力值和高度,在风力方向上偏移顶点位置
	VERTEX.y -= VERTEX.y * bent * length(vec2(VERTEX.x, VERTEX.z)); // 根据x轴位置,使顶点上下摆动
}

void fragment() // 颜色和粗糙度计算
{
	ALBEDO = mix(bot_color, top_color, clamp(vert.y * color_scale, 0.0, 1.0)).xyz;
	NORMAL *= FRONT_FACING ? 1.0 : -1.0; // 是否面朝相机设置法相
}
```
## 草的面片模型

[模型](https://github.com/Az-qianchen/announcement/blob/main/grass.obj)
在该页面按下 **Ctrl + Shift + S** 键，即可下载该模型