---
title: "资源整理"

tags: ["导航"] # 标签
author: "仟尘" # 作者
date: "2024-06-25" # 日期
weight: 3 # 权重用于排序
description: "各类资源的整理" # 页面描述、面向搜索引擎用户
head:
  - - meta
    - name: Keywords
      content: "推荐,安利" # 网站关键词（SEO）

pageClass: custom-page-class
pageinfo: false
zoom: false
---

<style src="./index.css"></style>
<script setup>
  import VPFeature from ".vitepress/theme/components/VPFeature.vue";
</script>

# 🛠️资源整理
## 📼 前言

- 互联网上存在着很多免费好用的资源，但往往如同大海捞针，想要找到它们需要花费不少的精力，于此我删选整理了我认为比较优质的资源，希望这些优质内容可以帮助到更多的人

## 📦 Blender

<div class="VPFeature-item">
<VPFeature icon = '<div class="i-logos:blender w-28px h-28px"></div>'
title = "Blender"
details = "官网和官方文档的跳转链接"
:extraLinks="[
  { text: '官网', link: 'https://www.blender.org/' },
  { text: '文档', link: 'https://docs.blender.org/manual/zh-hans/latest/' },
]"/>

<VPFeature icon = '<img src="https://www.blender.org/wp-content/uploads/2023/05/blender_36_lts_splash.jpg" style = "max-width: 300%;transform: translate(0%, 0%);">'
title = "Asset Bundles"
details = "Blender 官方制作或是精选的示例项目和资源"
:extraLinks="[
  { text: 'Link', link: 'https://www.blender.org/download/demo-files/' },
]"/>

<VPFeature icon = '<img src="https://ddz4ak4pa3d19.cloudfront.net/cache/cf/8f/cf8f6ace7f3a92f28538f86943767a67.jpg" style = "max-width: 250%;transform: translate(15%, 0%);">'
title = "Blender Studio"
details = "来自 Blender Studio 制作开源电影时的角色绑定资源"
:extraLinks="[
  { text: 'Link', link: 'https://studio.blender.org/characters/' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/06/27/QpXETWnzxgCtDRc.png" style = "max-width: 80%;transform: translate(0%, 0%);">'
title = "BlenderMarket"
details = "Blender 最大最全的资产商城，包含插件和各类资产"
:extraLinks="[
  { text: 'Link', link: 'https://blendermarket.com/' },
]"/>

<VPFeature icon = '<img src="https://ocdn.aigodlike.com/resource/homepage/card/1739579695382396928" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "铁锅炖启动器"
details = "可以进行 Blender 版本管理，配合 ComfyUI 进行 AI 绘图，还可以下载管理同为辣椒酱团队制作或是接管的优秀其他插件"
:extraLinks="[
  { text: '官网', link: 'https://www.aigodlike.com/' },
  { text: '下载', link: 'https://shimo.im/docs/B1AwdxZewWhjwe3m' },
  { text: 'GitHub', link: 'https://github.com/AIGODLIKE' },
  { text: 'ComfyUI GitHub', link: 'https://github.com/comfyanonymous/ComfyUI' },
]">
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/comfyanonymous/ComfyUI?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://randomrepoimg.fly.dev/agmmnn/awesome-blender/imgs" style = "max-width: 500%;transform: translate(0%, 0%);">'
title = "Awesome Blender"
details = "一张精选的 Blender 插件、工具、资源列表"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/agmmnn/awesome-blender' },
  { text: 'Link', link: 'https://awesome-blender.netlify.app/' },
]">
<template #badgeImage>
<img alt="Awesome Blender"src="https://img.shields.io/badge/awesome-gray?logo=blender&style=flat-square" />
  <img alt="Static Badge" src="https://img.shields.io/github/stars/agmmnn/awesome-blender?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://d1231c29xbpffx.cloudfront.net/store/product/171811/image/8b379b1f33b8e90f17234cba79647e6f.png?Expires=1719487080&Signature=HZ6E61ns-YtAh7N8usn~Y0KcHtvXr5TAOK4lcI50TgZ3-R7Liq9ArusupGJEIXconuCjr90BaoR7h2MyaekEiFWoQUMv42j0grS8hLzytCzWMgwC6CTCvRVSEi3W-ICJJkb4PlLqKRqR9HjkercinaFRK-SElbpJQHDmLtQB6aOKFs6DWnbkhQwL1yIMW~haD7vME9MQ5z0Y4uiq4Nz3BNj7mPTQOVMwCSDldT5RCVYEqZtR6GB4MLn0wC5YfRATES87PKK~Ss3vfI7u9QTyKUSfqnwFUmE1ILNh182sW-rQ8lgdLaFlB66QV7lSMceX9deVSL7Io3rL3gObd6B6aA__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ" style = "max-width: 200%;transform: translate(0%, 0%);">'
title = "Baga Pie"
details = "600+ 的资源，包含物体散布，各种程序化模型，五星推荐"
:extraLinks="[
  { text: 'BlenderMarket', link: 'https://blendermarket.com/products/bagapie-assets' },
  { text: 'Gumroad', link: 'https://abaga.gumroad.com/l/BbGVh' },
]"/>

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAqklEQVR4Ab3SERTDMBDG8YNSIXYveO/i7jjnUmX+SvVXh8msDuNiZXGZj4qFOWTttZJ3SbB/OfjBJweuEDjOdgliBVCnsYb+Nc8jJpCqR9j7gEZCH6QpgTCFow4V2ua01ZFC8Cf2hjWe9gRWSFbIt0AamUAyhBJFaNbv1jL0i1ymaPN3TA5BogjrsYDk1jwyNgVkc1vyyBbaqbu/5y3vYhSu0IJE1z2YxkJ/7aHR045485QAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Gscatter"
details = "地面植物随机散布插件，和一个优质素材包"
:extraLinks="[
  { text: 'Link', link: 'https://gscatter.com/' },
]"/>

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEVHcEweq+ccquQiquIlreYlquEcquP+dwf6lBespJXuljHuki0fquP9lAf3lSD3lR78lA/6kBdnpb68nHf6lBn8lBD0lCRVp8kAq+sgquP4lR0XrO1Br94arOkbreklquEdq+f5lBj6lRceq+YiquKsn5BmL4/3AAAAJnRSTlMANnbtSf/ABj+2bh7///7kkBHV37xXLYj/ktMI9icP2Bp6q1ypX/7oStQAAAFOSURBVHgBvc5VtuQwDATQMpTDStKMIWf2v8U5djP9vhuOLZXwl5QGYBR+saRL0ixPC3yny9JUIlVdSdPii3xhlqv1ZrtbNCINPqykahIAezogl7rFq0MlG0T2CCA5SPtavziF2fQZQEcTKmo8Sau+DGtOATiTAwAZnwNkPOLOqmQ9HURW4y0mFQmVCog2K5FpXRSbddMkCCaZAE/u4/JBZA3vyrI0TuexiUgKzKQB2klkxJ40XhE4qu6eYE/UaEQOiSfpAcRZg1FWAHDs1iKSw5EOAc8IWqzrMY5ai9StJanxsqGJ97yWkD6TtIg6dgiGf1V9CKuyiuXmluyJCLMdQ/OmODuG+Bs344rOD91Z97zHBwMVrjrDKzfgru/xsGcwq5dfA54osgde1j1eeNIo3Ax9GOaVMmTvQ9vOOtLi05538xFf+bk3pp/9EX/rPwt6FSvnRgd4AAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "FLIP Fluids"
details = "一款优质的流体插件，想要免费使用需要自行编译"
:extraLinks="[
  { text: '官网', link: 'https://flipfluids.com/' },
  { text: 'GitHub', link: 'https://github.com/rlguy/Blender-FLIP-Fluids' },
]"/>

<VPFeature icon = '<img src="https://extensions.blender.org/media/images/8e/8ea2163202fec4d4a18c0a0cb0f0f8c50a70056ef3e9d0be2f5dccf98ccf6993.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Non Destructive"
details = "参数化建模，用于创建硬表面模型"
:extraLinks="[
  { text: '介绍', link: 'https://extensions.blender.org/add-ons/nd/' },
  { text: 'GitHub', link: 'https://github.com/hugemenace/nd' },
]"/>

<VPFeature icon = '<img src="https://d1231c29xbpffx.cloudfront.net/store/productimage/114079/image/largef-3d29fd5c0575b08dad3257f305b5714e.jpg?Expires=1719497886&Signature=Aq5YJT-z9udKkSyKs5vd8AIMzCdlugJecbaxvp6U4Hp7L-8NcORileHjEObg0NKBRVCSryVgV0MD0h5B5Uba2Y50aoKFJ4m6NYoIpnmt99qa6z~FtTtDfmsnuhlpPOkwpqnl4zeWuNLMinUqcvcSaYM6yHPA8h0KqzBNIDvyD3FEox7wIQioSY7BqFEXp5BESgulA8WoOo6Ll2oZhjGB45vuIx5CHAxF1U95asnxayiRrUkOiqzjYtEoXvjdHH0aBlxy-f4jorGITBnKkKjtXmcB0setQkLRjizLyqa0kF4Osws9ztMiyQ91qDBjzAA8D6ZZVOGTw7lAY8uU9hoFLQ__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ" style = "max-width: 200%;transform: translate(0%, 0%);">'
title = "KIT OPS 2"
details = "硬表面建模插件，快速的向物体表面布尔嵌入螺丝按钮等资产，带有资产包"
:extraLinks="[
  { text: 'BlenderMarket', link: 'https://blendermarket.com/products/kit-ops-free?search_id=31000457' },
  { text: 'Gumroad', link: 'https://chippwalters.gumroad.com/l/kitops?layout=profile' },
]"/>

<VPFeature icon = '<img src="https://d1231c29xbpffx.cloudfront.net/store/productimage/93716/image/largef-29e121dedd801af694198e557a838751.gif?Expires=1719480954&Signature=aFbkJvrCGZbwEnQpqcgx2-e8oVuenFsi4AjgSOhe8L5lbz73iRgImQ5Gpm7cjjWnU8D4gDxhJknJGmG9E5r2m2FuIhYH3PzCaFCFrXtjthJhZctL~NrxcjuACUlVr7RN~R1HPVyDUh1SEQM6183ELUw5DLuMAfOJkFluNh0BsdRaN-ExgExF23CUDf7dve5zdxxW0WQO1hNn3dq5BhN2IwVgJjEFMzeDdjjBRfFOfjlml14kCuKCH9b6z2DnwrFFoAsVdPN4N8vXcZP7VI34-bNTutTq0jeyeXV1dZlAsT8W7ucuM6XTXTGP0eZNOxvO0YNOrYg1WaafwUHMEmmfhw__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ" style = "max-width: 200%;transform: translate(0%, 0%);">'
title = "Bricker"
details = "将网格转为乐高样式，以及乐高样式的特效模拟"
:extraLinks="[
  { text: 'Link', link: 'https://blendermarket.com/products/bricker' },
]"/>

<VPFeature icon = '<img src="https://extensions.blender.org/media/images/a2/a23966c3d06da8a05e7279d46522426e1b84c97a94723a4deb7f2bb009b9b5d6_20HnatH.png" style = "max-width: 100%;transform: translate(0%, 0%);">'
title = "Bioxel Nodes"
details = "体积数据可视化，提供了一些人体数据"
:extraLinks="[
  { text: '介绍', link: 'https://extensions.blender.org/add-ons/bioxelnodes/' },
  { text: 'GitHub', link: 'https://github.com/OmooLab/BioxelNodes' },
]"/>

<VPFeature icon = '<img src="https://gitlab.com/marcopavanello/wolf-website/-/raw/main/static/logos/wolf_theme.svg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "wolfstudio"
details = "来自 wolfstudio 的材质，模型，几何节点"
:extraLinks="[
  { text: 'Link', link: 'https://wolfstudio.io/assets/' },
]"/>

<VPFeature icon = '<img src="https://public-files.gumroad.com/d9h0i18yq6qzw9k0fukvafqyojfk" style = "max-width: 200%;transform: translate(0%, 0%);">'
title = "Material Pack"
details = "一个免费材质包"
:extraLinks="[
  { text: 'Link', link: 'https://curtisjamesholt.gumroad.com/l/community_material_pack?layout=profile' },
]"/>

<VPFeature icon = '<img src="https://public-files.gumroad.com/lx20qb09vmvt74x4jc8dd0bhzi89" style = "max-width: 100%;transform: translate(0%, 0%);">'
title = "Buildify"
details = "程序化建筑生成，带有一个免费的沙漠套件"
:extraLinks="[
  { text: 'Link', link: 'https://paveloliva.gumroad.com/' },
]">
<template #badgeImage>
  <Badge type="warning" text="国内被墙" />
</template>
</VPFeature>

<VPFeature icon = '<img src="https://public-files.gumroad.com/j8z8kz8n4hkzi7tv37w5vaxp4buv" style = "max-width: 250%;transform: translate(0%, 0%);">'
title = "Tiny Eye"
details = "程序化眼球资源"
:extraLinks="[
  { text: 'Link', link: 'https://tinynocky.gumroad.com/l/tinyeye' },
]">
<template #badgeImage>
  <Badge type="warning" text="国内被墙" />
</template>
</VPFeature>

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAolBMVEUuLi4qLC8hKC4fJy4aJS4UIy5VQy2TZyylcixrTyxFOi2GXy23fSvilyvqnCvnmivDhCsrLS45NC6AXC2veC3ZkSqBWihANitYQSWpcBrKhyXvp0P/vl+7kFVMPCmNXRSLXBXmnTX1s1f/wWv/x2+jf02QXxOFWRiTdEmBZkOWZiBsWD1XSTd/Vhp3Uh0PHSlvTSD0uWfpsWQGGijOnVr/zXK9YRyMAAAA1UlEQVR4Ab3SRQKDMBBAUaJ1d0cide/9r1Z88CV/+yBu1BDCBJUAZbzRbGGGUUYoa3e6vf5g0B8MG5xRPIptPJnOXOj5uR/0uvNFpGi5WnsEbbY7GuJofzDN1Sxyy3YcIUmEbWWaplbD3sATL3HE8Zweer7yxcNTjKMQzbOI8IIiRGYOrzFincPxKMbbIYsEDuieRecB+MziqwrfgCOuDikU7unBr+ObAhSv0wfM/RcvD4cAhZAPnL1s4648FN8xDAnhvXn+vS6fUfFLQRP5QRUvzKihP85RJqfx0pztAAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Pixel And Poly"
details = "金属 IOR 表格"
:extraLinks="[
  { text: 'Link', link: 'https://pixelandpoly.com/ior.html' },
]" />
</div>

## 🕹️ Godot

<div class="VPFeature-item">
<VPFeature icon = '<div class="i-devicon:godot w-28px h-28px"></div>'
title = "Godot"
details = "godot 官方的相关链接"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/godotengine/godot' },
  { text: '官网', link: 'https://godotengine.org/' },
  { text: '文档', link: 'https://docs.godotengine.org/zh-cn/4.x/' },
  { text: '插件', link: 'https://godotengine.org/asset-library/asset' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/godotengine/godot?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://raw.githubusercontent.com/TokisanGames/Terrain3D/5f5837542a6fff32d8e60c1cca4760afd2f836f6/doc/docs/images/terrain3d.png" style = "max-width: 300%;transform: translate(0%, 0%);">'
title = "Terrain3D"
details = "Godot 4 地形编辑系统"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/TokisanGames/Terrain3D' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/14/eKEW7BMtboc4RsQ.jpg" style = "max-width: 120%;transform: translate(0%, 0%);">'
title = "Godot Cloud Worlds"
details = "Godot 4 光线步进体积云"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/Platinguin/Godot-Cloud-Worlds' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/14/dnFmkvAj6Sy9YVR.jpg" style = "max-width: 140%;transform: translate(0%, 0%);">'
title = "JFA driven motion blur"
details = "Godot 4 运动模糊"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/sphynx-owner/JFA_driven_motion_blur_addon' },
]" />

<VPFeature icon = '<img src="https://public-files.gumroad.com/3b0bzchwkg66imov4uling7ve0cc" style = "max-width: 200%;transform: translate(22%, 2%);">'
title = "Godot Plush"
details = "戈多玩偶的 3D 模型"
:extraLinks="[
  { text: 'Link', link: 'https://fr3nkd.gumroad.com/l/vhfvy' },
]" />

<VPFeature icon = '<img src="https://kenney.nl/data/img/logo.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Kenney"
details = "游戏相关的全套资源，从模型，图标，UI，到音效"
:extraLinks="[
  { text: 'Link', link: 'https://kenney.nl/assets' },
]" />
</div>

## 🙂 图标

<div class="VPFeature-item">
<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEVHcEwxdZUwdZQvdZQudJQpcpIwdZQjcJAVa41Kg55kk6oydpaNrb7Z4+n///8udJQEZYn6+/zO2+Lr8fTa4+mowM3C0ttvma93nrNpvXQxAAAADHRSTlMANIO/5fld/////xRUDA7PAAAA8klEQVR4AX1T0RKDIAxDRRsUoYiq//+lY2C34e3MkzYkV9KiPmjaTve97tpG3TFoAsw4GoD0UFFTouzsMmab6OnH0bMN7oNg2TdfDoursEDYySO6GiHCF2fNRVdrWec+ybo/sDS8hQjFScqx/CNJm0tIYr4wXdJGtVjzcaatkBtxNpnRqg7uP+nQKW1KzbAkxFLRqh/lbu72MfZCVhBSbCuIrTRUQxpq8W7kFm4sV7lC2P38Qx2mhCDxHTzuWR72gyle8UnwJwNkDAFsggQvI0vOoAT4TUZWDXux52lL/DLs5zV5XDBZzbVQa72aD0v98Bxe8eQfgWCXD4sAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "iconify"
details = "开源图标集，拥有 20万+ 矢量图标"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/iconify/iconify' },
  { text: 'Link', link: 'https://icon-sets.iconify.design/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/iconify/iconify?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://blog.emojipedia.org/content/images/2017/08/emojipedia300.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "emojipedia"
details = "表情符号展示网站"
:extraLinks="[
  { text: 'Link', link: 'https://emojipedia.org/' },
  { text: '微软动态表情', link: 'https://emojipedia.org/microsoft-teams' },
  { text: '谷歌动态表情', link: 'https://emojipedia.org/animated-noto-color-emoji' },
  { text: '电报动态表情', link: 'https://emojipedia.org/telegram' },
]" />

<VPFeature icon = '<img src="https://github.com/microsoft/fluentui-emoji/raw/main/art/readme_banner.webp" style = "max-width: 300%;transform: translate(0%, 0%);">'
title = "Fluent Emoji"
details = "软件开源的一套 Emoji 表情"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/microsoft/fluentui-emoji' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/microsoft/fluentui-emoji?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://avatars.githubusercontent.com/u/6254238?s=48&v=4" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Shields.io"
details = "各类徽章生成，另有 visitor-badge 为页面访问者数量计数"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/badges/shields' },
  { text: 'Link', link: 'https://shields.io/' },
  { text: 'Visitor Badge', link: 'https://visitor-badge.laobi.icu/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/badges/shields?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://avatars.githubusercontent.com/u/35471246?s=48&v=4" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Tabler Icons"
details = "5300+ SVG 图标"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/tabler/tabler-icons' },
  { text: 'Link', link: 'https://tabler.io/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/tabler/tabler-icons?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEX///+91cwVgWDZ5+Lk+fJb5sCA6sqn8NoA3qmlxroAckyV7tMAe1gGfFrI9ugH360AfVsehGQQ4K8FfVsphmhOmH81yb3nAAAAeklEQVR4AdXJRQIDMQwDQG1Qy/z/rzaOy21uRQUMg7emMlYb5wM0kVpr0zRWiVRsSWbqmq4XHBKNgi6kZhScEvWCUTYZpVGcxRTHE47/hmQoIdkCBVwiUEKhIuIT2DWNUyTbW+yatQYEyeBwHdNsFSD4QMCeSbDFZ3IAOQoQuhAXp7oAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "IconPark"
details = "2000+ 图标"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/bytedance/IconPark' },
  { text: 'Link', link: 'https://iconpark.oceanengine.com/official' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/bytedance/IconPark?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/UD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3ODc3Mjc3Nzc3NzcvNzU3Nzc3NzcyNy43Nzc1LTUrNzUtOP/AABEIACAAIAMBEQACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAFBgcEAf/EADQQAAECBQEDCAoDAAAAAAAAAAECAwAEBQYRExIhQQcWMVFhcaSyUlVldJKhscHS4iIjVP/EABoBAQEBAAMBAAAAAAAAAAAAAAUGBAECBwD/xAAwEQABAgQDBQUJAAAAAAAAAAABAAQCAwUREiExFVGhwdFBUnFy4RQjJEJTYWKRsf/aAAwDAQACEQMRAD8AptxXWmiVFuTMprFbQcCtXZ6SRjoPVCTSnFzKMzFbO2iKfVMtJggwXyvrbkh3P72Z4j9Y0bH/AD4eqw7fP0uPot/Ohx62Z6qsyqW3GFbCUFe3vOzvO4el8oOet/ZosIN8lQUOaKlMAiGEXtr9r7kGs666nUK0iSnnEvNupVg7ASUEAnh3RggiivmqmqUxvJbmZKFiLduqFcqitm4ZfH+RPnXFjQxdtF5uQXmlZF548OZS7JzYcwhw/wA+B64QmSsOYRGBMNCrJpmsy8wmYk3xh1lXHtEGPGcLmHcQkKe9mMo8UOiZrVmqCqp6dJpi2HloJU4s5wOobz9oFn0+ORBjiIVOK7MfxCVETw5JU5WlYuOW9zT51w/QR8NF5j/Ag6sPfjw5lJQXjeDDlkXZFqfPB7DTp/s4H0oxzpOHMaLtCLql2NRXZRLk/NIKFuJ2W0KGCE9JJ790TNTdQx2lwHTVPU1qZd5kWpQblHtms1muMTNMk9ZlMqltStVCcKClHGFEcCI20d+2byDBNisb30O4bgur9rNnTRFALi3VKvMK6PVniGvyhbbDHv8AA9Fi2e47vELqbEupCgpNNKVA5BEy0CD8UcGrsCLGPgei+2e4Hy8R1VStJ6uqktC4pItPtABL+ohQdHaEk4P1iVfwNRHibRXB7LHL9jRNtjOw2mjPev/Z" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Remix Icon"
details = "17万+ 矢量图标"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/Remix-Design/RemixIcon' },
  { text: 'Link', link: 'https://remixicon.com/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/Remix-Design/RemixIcon?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://github.com/microsoft/fluentui-system-icons/raw/main/art/readme-banner.png" style = "max-width: 600%;transform: translate(0%, 0%);">'
title = "Fluent UI System Icons"
details = "微软开源图标"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/microsoft/fluentui-system-icons' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/microsoft/fluentui-system-icons?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://avatars.githubusercontent.com/u/1505683?s=48&v=4" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Font Awesome"
details = "2000+ 免费矢量图标"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/FortAwesome/Font-Awesome' },
  { text: 'Link', link: 'https://fontawesome.com/search?o=r&m=free' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAJFBMVEVHcEw+24Q+24Q+24Q+24Q+24Q+24Q+24Q+3IQ+24Q+24U+24RFDnEjAAAAC3RSTlMAkIFYN+q92xWrF7CKAhIAAACcSURBVCiRjZNZEsQgCEQRxGW4/30nUcFkokz6i/JZ2CwCqCImFuGEEX5FB1Ax3VDJclP+TBbloegwo2XFRHrmvIa5+exhUCWlp+deA86irCJzE57w8IQGIzYR0ciMkAyiHkHoURpPLiGD7KH40E3rGhpHlQhrExnEy0jmiIM2AXgH+dquar3P87I3st2wy/818RdssZrl7VJvvsMXByMU2lh0ykwAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "SVGMIX"
details = "13万+ 免费图标"
:extraLinks="[
  { text: 'Link', link: 'https://svgmix.com/collections' },
]" />
</div>

## 🤖 模型

<div class="VPFeature-item">
<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAARVBMVEX////d7/i33vGp1u7v+PyMy+oeqNwApNsYptyg0+0rqt1lvOTH5fSY0OxrvuXP6fY/sN8Antn5/f6Cx+hMtOHF5PTo9fs7wbtAAAAAy0lEQVR4Aa2SBQLEMAgEexGWuvf/T70QOHehukx0Q/GX2Dnv3e4eCZHAKUAxXLMSXFkwyktWGzJc32PMt7TUHFdNU9nvceQA0YRWRAsShWAwsrDOZOiEcjQoguqzFeSE7T2PiqpX2Veq1Q0no3I/jN1UFFM3Dn1OuAy9/CN9AeeAlIRAfwYnWQowS+8z6AymWGZ5K3S2oHvQFlTQPUjnJshOFK6VmXBmH7ogcKtVhUvjid0ym7Vc3hwZE7H+1M8P+3mZPC+w56X5Q+wBeOsNsHxhsskAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Sketchfab"
details = "最大的 3D 模型发布平台"
:extraLinks="[
  { text: 'Link', link: 'https://sketchfab.com/' },
  { text: '介绍文章', link: '/zh/post/tool/model-asset' },
]" />

<VPFeature icon = '<img src="https://avatars.githubusercontent.com/u/848102?s=48&v=4" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "NASA 3D Resources"
details = "NASA 内部的 3D 模型"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/nasa/NASA-3D-Resources' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/nasa/NASA-3D-Resources?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACFklEQVR4Ae3XAUQDURzH8cwtySRJksxJkiRJkpAkJBCSJJAkJISQRAJJSCAhJCSBhAkZEpIEkiSQzCQzyeTU97H442r3v9sWdHy827p7/9+9u9e9lfjdLMtqCofDR7THaCkp1kbRKqxSNEX7abCfxjpqClaYzksxgXtTVBJBHjHFflk+C4fQQ6dxWlHQXfaYC9pe2lCQoTbF67HLfgafSh+cu0drQ128nJMX5X32QzwfK+xHvBQ2wz2CO0URLyGMB4zz2XIrbLF1IWaGTjPMhiKIQ3uWfaYs+aBF8ay8qnuMYhi3ynOfEZUjYCPp8eRXLKFCXEAEC/z9xWOIJGx1APNUw/5lytZjh2OdvAag03N0sx/yOH07EM9LADMV0eDjH1gj56cDB0AKtqK27DP1H+CH25rE3wSg8CX6ESpqAAo+YRriVV2cAGlsUrjW5a1Y0GnYgEO0i699BXBoY7SttF7XEc04wX62b98BZJAPbLFf88tVV2MDGW/rAUUAIUGHcygXhcswgydf6wEzJ5FQvFIdjr/GIAZwab7zsx6QC5I+XMBRvNczcrj16wH3pfckB8mh1FOuB9yCVGKNg96LHkBOJzSZuaxZ9wlOkAByNMw2gCvFPb7BEMb4fBcogPytgNkcz0cC8xSOiAuowjLfvwYKIDqswxbexBW/YxvRHLfzAJkgAWSQNpwijk469DqS5lUc+w7wBVydGzzJ4wByAAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Quixel "
details = "最大的 3D 扫描模型资产库，对于虚幻引擎用户免费"
:extraLinks="[
  { text: 'Link', link: 'https://quixel.com/pricing' },
]" />
</div>

## 🔤 字体

<div class="VPFeature-item">
<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAArlBMVEVHcEzqQzXvXSsyetoacukZZ9RHlYzqQzXqQzXqQzXrQjWsuSqGkpoCcO4ac+kadOwYaMwXT6kXTKIac+j9vgLqQzX7vAT/vwAac+jqQzX7vAQaceLqQzX8vQIac+gefdsXcO8Ta5APZ04MZS41qk81qU8MZBoHXyg2rFU0qFM0qFM0qFP8vAMZctv7vAR1jKn7vAQAb+4ac+gRaW80qFMac+j8vAMWbagOZWc3rlGHd9V2AAAAOnRSTlMANRE1T2IJ0f/+aiD/////////8sKmdv/otv//92Ov3oX////qdP/////DgVT/7OKuk5j/rp8/UGpHywe09QAAAO9JREFUeAHEzIWJBEEABdE/7m3r7u6af2jXCs0lsIXzoPCrgiCELop1SZQ6CrM8L0rIqrohhDIuaCuxKE0WAGgrZEIISkhsnrmuA3R7EikXXGHfxwGqocKR4BpJqjAcayzR1kgcQlcqyzAZDv3tFKagMyjl1OKIC4n9FF5tizImZnOf5NQhXSxX6/XGs1SSxeV2tdsfDkdv6pAutiuNh5Oz89DhZSXTuE6NhVeLt4ZtHR4qg/ehqf2gPrqpqXoQt5WZ7dVaF09CX1uLb/jTKySS0Wqrcf1vCnwIoZeXwreZfs+m79/gycTcwpJ7wJIsAJILJYrmiQ57AAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Google Fonts"
details = "谷歌的开源字体库"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/google/fonts' },
  { text: 'Link', link: 'https://fonts.google.com/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/google/fonts?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAALVBMVEVHcEw8RvY7RfU7RfU7RfU8RvU8RvY8RvU7RfU7RvU8RfY+R/U7RfU8RfY+RvXu/K4IAAAAD3RSTlMANunC/6MXVM+XLA/ecCa8+HCfAAAAwElEQVR4AWOAACFFBmRg4ozCDXFF4SapwZkVAgwMnBMYGBjbwdwWILPEHSjkAeZKJqzmPuKzYRfbRIhqVp9tKk7ZRwKgmpe4XJjiyeviBeXucVnA9YDH5TSUy32LgeF5y9kNUO42BoY7Lh4M2SC2cBj7oQm8Li7unDoFqYYMKk5TXLx4XFz8nrh4qjjBuQeWgLhwxRfAimFGnWVgyEZYBARrNyA5YwGXy2lMR2J6AeFBNO+jBw4i6DADFjPY0SIFAHPJQzrG9k/OAAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Alibaba Fonts"
details = "阿里开源的 6 款字体"
:extraLinks="[
  { text: 'Link', link: 'https://www.alibabafonts.com/#/more' },
  { text: 'iconfont', link: 'https://www.iconfont.cn/fonts/index' },
]" />

<VPFeature icon = '<img src="https://github.com/atelier-anchor/smiley-sans/raw/main/docs/images/smiley-sans.dark.svg" style = "max-width: 100%;transform: translate(0%, 0%);">'
title = "得意黑"
details = "中文斜体字体"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/atelier-anchor/smiley-sans' },
  { text: 'Link', link: 'https://atelier-anchor.com/typefaces/smiley-sans' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/atelier-anchor/smiley-sans?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-1.png" style = "max-width: 300%;transform: translate(0%, 0%);">'
title = "霞鹜文楷"
details = "开源字体"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/lxgw/LxgwWenKai' },
  { text: 'Link', link: 'https://lxgw.github.io/2021/01/28/Klee-Simpchin/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/lxgw/LxgwWenKai?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://github.com/tonsky/FiraCode/raw/master/extras/logo.svg" style = "max-width: 720%;transform: translate(12%, 13%);">'
title = "Fira Code"
details = "带有连字的编程等宽字体"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/tonsky/FiraCode' },
  { text: 'Link', link: '' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/tonsky/FiraCode?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://github.com/JetBrains/JetBrainsMono/raw/master/images/ligatures-1@2x.gif" style = "max-width: 250%;transform: translate(0%, 0%);">'
title = "JetBrains Mono"
details = "带有连字的编程等宽字体"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/JetBrains/JetBrainsMono' },
  { text: 'Link', link: 'https://www.jetbrains.com/lp/mono/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/JetBrains/JetBrainsMono?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://avatars.githubusercontent.com/u/4028872?s=48&v=4" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "思源字体"
details = "因该是最通用常见和标准的中文开源字体了"
:extraLinks="[
  { text: '思源黑体', link: 'https://github.com/adobe-fonts/source-han-sans' },
  { text: '思源宋体', link: 'https://github.com/adobe-fonts/source-han-serif' },
  { text: '思源等宽', link: 'https://github.com/adobe-fonts/source-han-mono' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/adobe-fonts/source-han-sans?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
  <img alt="Static Badge" src="https://img.shields.io/github/stars/adobe-fonts/source-han-serif?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://github.com/TakWolf/ark-pixel-font/raw/master/docs/readme-banner.png" style = "max-width: 300%;transform: translate(0%, 0%);">'
title = "方舟像素字体"
details = "开源的泛中日韩像素字体"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/TakWolf/ark-pixel-font' },
  { text: 'Link', link: 'https://ark-pixel-font.takwolf.com/' },
]" >
<template #badgeImage>
  <img alt="Static Badge" src="https://img.shields.io/github/stars/TakWolf/ark-pixel-font?style=flat&labelColor=rgba(128, 128, 128, 0.2)&color=rgba(128, 128, 128, 0.2)&logo=github" style=" margin-left: 2px;">
</template>
</VPFeature>

<VPFeature icon = '<img src="https://avatars.githubusercontent.com/u/106473?s=200&v=4" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "The League of Moveable Type"
details = "专注制作开源英文字体的团队，目前制作了十几款字体"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/theleagueof' },
  { text: 'Link', link: 'https://www.theleagueofmoveabletype.com/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEXsOzvsNzfsNTXsOTnsPT3wZWXxdHTtR0frLS361tb/+/v++fnyfX3rMDDtS0v98PD////2paXtUFDuXFzygoLzi4v4xcXxb2/2q6vrKirzkZH1mZn96+v3srL73NzrJSXrHh760ND3uLj85OT7Oe20AAAAzklEQVR4AcWQRYIDMQwEx8zDzPD/P24UVuC6KXO3SYp+CaFXGHvzuJAXhNL0xWbKWHfF+IBdEifpg0xjMwfRJtctHB0lBWimrOoUaOizSRvQWtKJ81mBzRK0PmgPY4L/G4bzSdmPMJYBfUhPIFpnT/0sCQ6lg49cmX2EzWU+qW4cxxSo8LUrfLJuimYDc1zwSdBaTkOZAivKgQJp6Ba1w+RY3nMwT/XhYDLptzDvzDn5Eol1dUxxmNtxZRvyjkQYHQhXSnHdBRK9wS5E/8EfRPsS8el0xt4AAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Beautiful Web Type"
details = "搜罗免费英文字体的网站"
:extraLinks="[
  { text: 'Link', link: 'https://beautifulwebtype.com/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX////Mxs+ai59yW3pgRGprUnSLepHBuMStorFWN2FVNWBbPmZdQGdZO2TSzNTZ1NthRmtOKlrGvslTM1/5+Pq0qriBbYhlS2+Fc4x2YX9mTHDq5+u9tcFPLVvi3uP08vRIIVWmmqsKioN8AAAAwklEQVR4AbXRVRaDMBBA0UAGnykR3Nn/JnvSU4n99uFcHPb/kpRDlhcxKqu6AQCs6OFTiyTegUxcUxLEL90550lhR72NCA7iYF+0Ek4wWpijh8JCDu+db8TJwhmECbP3FWplYdqY0/TAppfCwqxWSaSFYmwjg/vBHO371iwflbGCRUsqAfvG4vUEtfmwXQwHbMw1+zlipxaCds6RJvu32V8KQNCVBli/PxD2KwviaGxPIfZA60IEeLRr/G3SUgw3+3NPVMgP3jnWMP8AAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Font Squirrel"
details = "搜罗免费英文字体的网站，数量非常多"
:extraLinks="[
  { text: 'Link', link: 'https://www.fontsquirrel.com/' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/14/Dl3Bngza4YkNihu.jpg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Open Foundry"
details = "搜罗免费英文字体的网站，可以在线调节字体颜色，间距进行查看"
:extraLinks="[
  { text: 'Link', link: 'https://open-foundry.com/' },
]" />

<VPFeature icon = '<img src="https://user-images.githubusercontent.com/87366329/135378253-47f58fa0-c3d4-4fd5-8ada-d53f5b3a2ee4.jpg" style = "max-width: 300%;transform: translate(27.5%, 0%);">'
title = "寒蝉手拙体"
details = "手写体"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/Warren2060/ChillShouZhuo' },
]" />
</div>

## 🎵 音频

<div class="VPFeature-item">
<VPFeature icon = '<img src="https://eadn-wc01-3423425.nxedge.io/cdn/wp-content/uploads/2019/10/sonniss-logo-small.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Sonniss"
details = "来自 Sonniss 27GB+ 高品质音效，可商用"
:extraLinks="[
  { text: 'Link', link: 'https://gdc.sonniss.com/' },
  { text: 'Link', link: 'https://sonniss.com/gameaudiogdc' },
]" />

<VPFeature icon = '<img src="https://www.adobe.com/federal/assets/svgs/adobe-logo.svg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Adobe"
details = "来自 Adobe 的免费音效库"
:extraLinks="[
  { text: 'Link', link: 'https://www.adobe.com/products/audition/offers/adobeauditiondlcsfx.html' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/12/viChnFelJ7sDkRQ.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "wikimedia Audio"
details = "来自 WIKI 的共享音频库"
:extraLinks="[
  { text: 'Link', link: 'https://commons.wikimedia.org/wiki/Category:Audio_files' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAB6ElEQVR4AU3QIQisMBzH8V83Ga9cs1y0WixGk/GywXrhyjom22urq+vBzmGH5QmDlbGwMBAG/6dDHu/L2mf782dQWmtjrXU+hJjsOk/T8vPBGa3Vibux7rKkWQuUuBq3YHeN851xzp8mgJ4Dd8wbjWumCyEoCaBc8K/BGOznTBsPM3ugwP89NxivFB1JJQ5Ii7PH49YezqxBkVEfAHoDUH+4nAbkfnI9yG35doOzN1/9kbY+60rpZzju6n6ROhxExwyAE4VE020D+yM3T7kGIDoOv9bI9Yv4fBXlyFYXKuWabBVTuh0Yu3UCpT2SChlfS6TxLfo2ZfyAIiVFDHWFsjpxwcqwEOWVLEVLGiiL6vGaHdEX7ZNFoih+kKtKee2iebWzvl78NlKa1GOHcIlWVQLl0I8ioyMFSI6AGGkdcdVPiwpEatM0zRMe44FIur6oRP8R9rTn6oiheYId4B2ylehGcX3OCBFNB5TiuKAA8ASa6Q8fpNcYQ/oCrUunZHych3O2dJDKqhnQL3iUGXNSTZAjFG+BWlQyoS5Q3DrSURefmaETIySRw/QsyxshKAxd94vU1TuRNpibqi5vLNjcFODxy4jIO4vlXQ9Vgbt3OxTfd52IonMGCxvGoc7S9R0rgKboiJLzdv8Lir54ZqwXoNgAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Sound Bible"
details = "一个免费的音效库"
:extraLinks="[
  { text: 'Link', link: 'https://soundbible.com/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX9W2X9WGL9fob9d379UVz+1df+xcj9Tlr/5OX+0tT9VF/9S1f/9/f+4OL+rbL+lpv/////8PH+oKT9R1P/5+j+x8n9ho39YWr/+vr9OUf+3uD9Slb+wMP+ur79cnr+tLf9Z3D+pKn9i5G48yuvAAAAuElEQVR4AWIY1ADQHFEcOAzDrJhZDjPtP+TldSWn7xrELIAvuoLeaxkX7FYplZaEGJNVWuetMSFmtAAWE5RV3bBPXUs710c39KN8CzhJW8/F6Ja+wjTJyT50HaKvUMdG1bgqrDxi95SO6QZV2DRi2SSh2cs4YMfGiXLuUxM47vCWVR3Ot1s9plMoS95OZ2vc2+1y6/bMfDQyqDTK7GRnnC6QbE5pwiVny5j1JPsJBNYCbvaZ3/cPnT8xzgoy0KQJQAAAAABJRU5ErkJggg==" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Free Sound"
details = "一个非常大的免费音频资源库，有音效也有音乐"
:extraLinks="[
  { text: 'Link', link: 'https://freesound.org/' },
]" />

<VPFeature icon = '<img src="https://sound-effects.bbcrewind.co.uk/bbc-blocks-logo.svg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "BBC SOUND EFFECTS"
details = "来自 BBC 的免费音效库，十分优质，但值得注意的是，其只使用于非商业用途"
:extraLinks="[
  { text: 'GitHub', link: '' },
  { text: 'Link', link: 'https://sound-effects.bbcrewind.co.uk/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAABKElEQVR4AWLQwQMGVlJbG50FIIIOYRyGYSiAhgZUCppCAgKCHK7p8HE4ODpQDgpHjxSOlQ4WFx2XiisVF5VYJpZcNndaVmJZfvG3lILgbQg27G2wPloPB0LsV5G1PeXsHosI9R4KgpuYEGmrk+tl76QLBeOfIClz7y7bu6PJFawmon+jo8H0RIuZiebqgwCCXAPrplmIOy3HZrrpPDVa2qClzqwZpw/Gu46akVCuv5rxGEifxbLZCCITEvnz9u5QLqncjCszI9Lo3CisSFh9PwHg3l5xzwLftLeJ9OSB1phO7wJkZ0zNejwVhPM6rWpPn908L6z5NheMLRMRzx7Sdds7/IEv+p5F1mcA/UcSweGcckHVKnmrpiE2Bnt6DRGfmDENB4MuaQIAPgoOvvK2znQAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "99Sounds"
details = "一个音效资源网站"
:extraLinks="[
  { text: 'Link', link: 'https://99sounds.org/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAL0lEQVR4AWMAgv9g0N7ezgACCBE4FygFFxmEGkY1OMAARATOxdSAALi4w0gDGQAA+mGKzOd3mC0AAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Free Pats"
details = "免费乐器音乐包"
:extraLinks="[
  { text: 'Link', link: 'https://freepats.zenvoid.org/index.html' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAApklEQVR4AWJwL/AhiK/JaQB6rYMTgEEYjMLjuIbLOJGrZQZH8Jr+QguhlCqlvsN37QNJNVmqmHTxUxeTKnnlW7NQkSa+qElZDoZQEhP/yCTNgvH4/Cf5NRhju6L3Y/RN0lPQNgYtBq9p9M1KDDYg2EYrDAoij2AFgzUMC8JGsIPBPoJO4oP8kcJDg/8W+I+PXm345U0/T/wDzK8Y/BLFr4n8Ioyv+gcpVr+ctYJoNwAAAABJRU5ErkJggg==" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = ""
details = "由爱乐乐团音乐家录制的数千个乐器声音样本"
:extraLinks="[
  { text: 'Link', link: 'https://philharmonia.co.uk/resources/sound-samples/' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/14/4ohdspEjvYCPFOf.jpg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Karoryfer"
details = "免费乐器音乐包"
:extraLinks="[
  { text: 'Link', link: 'https://shop.karoryfer.com/pages/free-samples' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEUomNEhltBfrNpAoNUAkc7////r9PoAj81irdrN4/I3ndOv0+oTk8/4/P6Iv+Gr0erj7/ibyOXE3u+mzuhRp9cAisxM41EEAAAAhklEQVR4Ac3RVRbEIBQD0EFSx2H/W50wLo//ppZzbg24nDWK+W0v01obdWuG9VstgGnubZ5Y7R9i4QNqgYwrH53XAWJTasMI9+PYhwjLq4wO8J4XEQMQIy8ipgwmJxFLBVOLjC0CsQ1w9oCfB3jMwHzIGDgFnIbQUVgyZfrBqqTF5vFo58wVKRwGM1g6vFYAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "musopen"
details = "免费古典乐曲库"
:extraLinks="[
  { text: 'Link', link: 'https://musopen.org/music/' },
]" />

<VPFeature icon = '<img src="https://static.tumblr.com/c6e14f8728c15ffe201d3ba8c106ecc9/83as1i3/M5bpqqtvy/tumblr_static_5cmjx6ektcsgww4gowksoc8so.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Unminus"
details = "免费音乐"
:extraLinks="[
  { text: 'Link', link: 'https://www.unminus.com/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADPUlEQVRIibWWXVPjNhSG9RXLH4kYHCfGO9CSkr3osr9+pz9ie9P2KgTCMuywJbshiYkTO5ZkW71QMSFQB0I5V7KlOY/Oq68XKqXAWwZ60+wAAPL412pNz68PQvhk+wFAKVXcxXbSIYQghAgh3XgAKLNLKaWUmvGiCiCEeZ7XajVKaa1W0wxYpiiKQndvMfEyer0eIWR3d5cxphlkdfpSylcCzs/PTdMEAFBKMcYQwnuJ8jyXUr4mOwBgMBg4jsMYc13XsixQroGWuyiKVwImk4kQIkmSPM+1+A/OwX8B9FCllJCybD85Mk1Tznme52WqJ87B4+xpml5efo3jhRACQdRg7PDw0Lat1f1eTnFti28AKKUmk+lgMMiktGwbYZzLfPh9OJvddrvdVqv1mLEWVQClVBzHZ2dnGKOW3266LqWmEHw8nsxms37/lFKTsUY1o+oughBefLmQUliWdXn51bbtOI7TNN0L9jzPgxBeXHzZWEEVIEmS8DaEEBkGxQh9+vTbH3/+VRTq6uoqCPZs2+ZcxHG8PWAynTpO/eDgABOSZRnbYe+Cvc+ff1/MF73eSbPZrNfrYXi7PaBGSCZlksTvgqDb7QIFoihijDUa9f39/SiaLRZzhDZc+FWL7Hnet29/c86Xy6TVbgkhAISjH9+n01ApqBTAGLda3vYVEELqdcdxnOFwiBHa2dn5+aeDoih8v8350jSpbTsb764qgALq6OgojuNwGp6ennHOZ1HU6fwShreCi/l8/v59tzo7qJYIAkgIOT4+HgzOoyi6vr6m1CiKQsrMsqyPH4+fc/VuOMkQQsMwPnz4dToNR6MfQohazWj77abr6hfmtQBw91R5XtPzmhsHP443dxX/P2BNN1TRt0UYhkEI0Y+l/nO/BtoAjEaj8Xg8Ho+TJMmy7EWuQm+qRqNhGEbJIGW3/h4Oh/1+/+Tk5ObmZrlcPtMgaS/kOI7v+0EQMMYIIeu+CGNMKXVdt9PpmKY5n8+FEC+qgFLKGPN933VdSqm+pu59kVIqyzLOeZIkcRwLIV7qATDGhmHYtm3btmmaWiW4Okf9ouZ5nmXZFg5DC4XvQksE10Qo7eJ23vTfpCuH/B8xiNBNzCw2qgAAAABJRU5ErkJggg==" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Sheet Music International"
details = "最大的免费乐谱库，多为古典乐"
:extraLinks="[
  { text: 'Link', link: 'https://sheetmusicinternational.com/' },
]" />
</div>

## 🖼️ 图像

<div class="VPFeature-item">
<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEVMqExJp0k9oz03oTc8ozw6ojpBpEFer17G4Mb2+vb///9ksmRZrlnz+fNFpUWUyJSgzaArnivA3cDP5c9/vX+x1rGOxI7Y6thzuHOIwoiq0qo2oTa52rnR5tHs9ezE38Qbmhvj8ONwt3AGhavnAAAA60lEQVR4AdSNhZHEMBAEBda+1WZmP+Qf5JvrLoQb0Wh7QX2itLHWGq1U4NzxD5y5mXyFHh9GJobEbCwFLmYyTuXF5kqnbAV1erC0BqpmC9AWHfRmgNCpQy6ByImLPRgFSQBe1FM47F56aINsI09TJSOcPSbPLNPCMfeCDd4ezq6UMn0DzSs8vcBoW3b16XulnmaIFPj9pPqBhTEuLmH5+YU/M2xuuuEt70YYA2VLyOQddrqH373ErRDpq22zKY+c5E0T7zEdNU2W3jNl0xZNj3unIv/jQ3gFKyAsyYVTkk9ERooNhxzYFdROdgA8cQ7XdPt/aQAAAABJRU5ErkJggg==" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Pixabay"
details = "非常著名的免费资源网站，拥有 450 万张高质量库存图片、视频和音乐"
:extraLinks="[
  { text: 'Link', link: 'https://pixabay.com/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEVHcEwAAACfKoRRAAAAAXRSTlMAQObYZgAAABpJREFUeAFjYLD/w0AsQQD8P8D8n3gCCIggAH65Q70oXRndAAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Unsplash"
details = "非常著名的一个免费图片网站，几乎每次推荐都有他"
:extraLinks="[
  { text: 'Link', link: 'https://unsplash.com/' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/12/viChnFelJ7sDkRQ.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "wikimedia Images"
details = "来自 WIKI 的共享艺术品图像库"
:extraLinks="[
  { text: 'Link', link: 'https://commons.wikimedia.org/wiki/Category:Artworks_with_digital_representation_of_different_depicts?uselang=zh-cn' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAA20lEQVR4Ae3TLwyCQBTH8W9PVrvFHuyFYKL3ZDaZzBQMV6wk+ka5zc1EIZLp2+0SgXp6f8a/DchuvsD7hQ+D97bHdsXisVgiBoRZKQGkayD9g18EXWV8V9qHunjrMchQrufcbJMARCOw4+56QfJ9PiGryuthACXggLSgYde57w0gQvK04WXBhXL2kw2JgR7AfIoL2giKRdByamrJcRHYBlAFcOY9BaCV0pI4TFFC62buHg7kYRd7mrCHGyRFHmE8oN9ibDKuPgLkJl0+PVXbt8T0eEPyWQh/vFv1AZV/6yXHIyC5AAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Art Institute of Chicago"
details = "芝加哥艺术学院的艺术资源，例如古典名画下载，注意许可证，cc0 为开源可商业"
:extraLinks="[
  { text: 'Link', link: 'https://www.artic.edu/collection' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAdUlEQVR4AaXRoRWAIABF0T+IeziX2Ug1OoKNxAw2IoVAYQPOoRK+iQS/yKs3PpC6RayTOtY3D6XYMXOo/cNCjUeVWLZAhQmOCgNuKvQwVOhxUmGEocKCixI3S4X2SVTosVPiAScx27y6bMDUhmpHxkmto2gBPyam7XPzxe91AAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "USEUM"
details = "世界艺术博物馆，提供的无版权的世界名画"
:extraLinks="[
  { text: 'Link', link: 'https://useum.org/' },
]" />

<VPFeature icon = '<img src="https://cdn.shopify.com/shopifycloud/stock_photos/assets/global/favicon-ab7018e1fe708a49edcfecce3166032fbeeb1fd7ba4a078c366de344d32ee193.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "shopify"
details = "数千张免费图像"
:extraLinks="[
  { text: 'Link', link: 'https://www.shopify.com/stock-photos/arts' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABzUlEQVR4AdSWAURDQRjHX54nTJJkhgTCDNhAwgxAAgGSZJIkDAFggJkQgCQEyCQMTJ4wIYTMTDJJSAjDM5nrH1f+zrN7W1+b8PO4993//nf33XfnKKUmxsn/MJDJZFwQHxBPzEA6nd6HoBqQoogBDB6H2PsQBgKw+GsDEDkl0SfgW2hRfDWyAQRPg5TBGuhpsS5IRjA8Z6xYPkQ3/mNAJ1gJBJYlLetOEjnT0ys7+WWgCJSFF4hORTWAeA80IugeOhB+o4YaOA9hJWSWCbRnQQ7Mh5jIhmmh3yVta8ehwVsRZ7cBkbuQ2TTRvoOvG0Hj5rsfG2hYOsXABVAWamDWouUPY6BiDPQMznQytfkfVuJKr4SMAfxbNzK4ADyjVG+DLsXtihnAjG4p7qCPcJ5W4VHEANoTfByBZ9mqJsUnJQwsUUwlQoYfU/yqhIFlAQMj3YJ7mS0gjMJT6DP4lmgScvWjuK6+bNyQExCwUdFCpGu4ItrgRNMyCtE1vp50JYyBKlAWfPFSbFS8TT7rxAPYo5nLGzBEFkBOY3372Q3wdSyK/Tp+JRN14P8xdRqvw0+ycVBy9PvtCEfnY4QDB6AMXH6Wz4DUKOAH7udGe8cAkYiq4GyhrtEAAAAASUVORK5CYII=" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "StockSnap"
details = "数千张免费图片"
:extraLinks="[
  { text: 'Link', link: 'https://stocksnap.io/' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/14/Fp1UoiPDsLgzACH.jpg" style = "max-width: 200%;transform: translate(-20%, -5%);">'
title = "Biodiversity Heritage Library"
details = "精美的动物插画"
:extraLinks="[
  { text: 'Link', link: 'https://www.flickr.com/photos/biodivlibrary/' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/14/SZVuvD2C6KMqXPr.jpg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Pexels"
details = "拥有数以百万的免费图片和视频"
:extraLinks="[
  { text: 'Link', link: 'https://www.shopify.com/stock-photos' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAAAAABARBCBAAABFElEQVR4AW3KIYizABiA4a/366zZLq5du7Rwi8MO62BcNl1aWjIbTObBomC+YrZYhCVBEJ4/yZB/b3x4w9te3DfLGy4c/+PlXqhyG26v1X2ZstyGj6Xpujv1Nlzf3KO51/WW02VMlHX3vG74oGyXny4exYbzbj59+8gc8MiL8lYghh3KxFfPpYEpnYQ28p+kfKaNfU83mhwE/nq7Zp4PDbqzZKzaAJ4RN9amS4Aqaly/uBX2nALOOWgbDGbSQF5ae4CmCPp0xaVaQExB1huiUAwwP+rfaAUJvmMfJ4xRN+1i5T7iCNkEBB+MEREdcitLB/J2jD+m+sXt2Vq9vFi6Pn3txZyyCeNvacOaY/L5eRlt+E3/AMWfDzhMnXJJAAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Game UI Database"
details = "游戏 UI 数据库"
:extraLinks="[
  { text: 'Link', link: 'https://gameuidatabase.com/' },
]" />

<VPFeature icon = '<img src="https://s2.loli.net/2024/07/11/VGm4A7RpdDEWlBx.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Palettemaker"
details = "AI 配色网站"
:extraLinks="[
  { text: 'Link', link: 'https://palettemaker.com/' },
]" />

<VPFeature icon = '<img src="https://interfaceingame.com/wp-content/themes/interface-in-game/dist/assets/static/images/logo.svg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Interface In Game"
details = "游戏 UI 设计参考"
:extraLinks="[
  { text: 'Link', link: 'https://interfaceingame.com/' },
]" />
</div>

## 🪢 矢量

<div class="VPFeature-item">
<VPFeature icon = '<img src="https://s2.loli.net/2024/07/15/3iNEqzLbnIM5lHP.jpg" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Openclipart"
details = "矢量剪贴画"
:extraLinks="[
  { text: 'Link', link: 'https://openclipart.org/' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVR4AcXWA4xdQRQG4Kmi2ohq2w1r27aD2rbdsHaj2rbWjpPaWkb7/n1/NrM4eX7v7Cb5r++dLzNnJtf0mt/fbV6VwJqXJfCLe55rxOXFX93R/0VRQMZC1AGOcdjkGAN86ARoQ1wDxmA9ARgH+ADRAzCeIK+LZ+8Pm5j+agCMY1xDLhb5gr0mDHtM2Ca1IXjX4SsjIbyGLea1PsA2tMO8RVKXX2G8Zq/zGgFqQyAb2m3erLL3eX23ebfexfv6ABF9gB3rK1U+XC8MAKudU44p2IWIkfOfCIIOFonapg6QC5Gsh+r1vrQo3zw1tnKL1Fgeqy5EjARMGe5As04ZKNX4H5jKLdIiCVFbiCzATr/544HFkwDfIAqzgACLkJAKFcOgvg7YxtnYlMGpsBBjHjIagHfrXQFsgw8OobLzPMJ5LItSG/AK7PbyLdLfyobVAYwPY68LcDX2tR6vaN0wdkdcs/jdsTxWAYgiZOMRdggW48nWySlX0T5xPwMnJIIQFYCrql+AR+sX4xmYvJAKl+cu8QrIHINNEiD/fHwF1Lg5HzOTr/3jsTk6EubMxMW+APpLgPzz8RXARkvfmX9+FcLa+DwEjC9/Pr4AbPezJ3wsQt/jaw0QwJ4IOYAVv3AiYuXKJ4eg5eM1132YhiGMAJiT49YUBmCxqHx9gIyofJfJAh/FXQxa+UZTAAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Fffuel"
details = "方便的生成各种矢量的背景"
:extraLinks="[
  { text: 'Link', link: 'https://www.fffuel.co/' },
]" />
</div>

## 🎨 贴图

<div class="VPFeature-item">
<VPFeature icon = '<img src="https://public-files.gumroad.com/x1um653wa2r8hw9pn64drm8aljvv" style = "max-width: 200%;transform: translate(0%, 0%);">'
title = "Earth"
details = "免费 42k 地球贴图"
:extraLinks="[
  { text: 'Link', link: 'https://assetsvfx.gumroad.com/l/uHyhPT' },
]" />

<VPFeature icon = '<img src="https://public-files.gumroad.com/4disiuvegwbcni03xsmissq85ahw" style = "max-width: 200%;transform: translate(0%, 0%);">'
title = "Moon"
details = "免费 46k 月球贴图"
:extraLinks="[
  { text: 'Link', link: 'https://assetsvfx.gumroad.com/l/MOON_46K' },
]" />

<VPFeature icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC9ElEQVR4AVWTA7QcSxBAb40Wz/i2bdu2bdu2j3K+bdu27dhO1pxZ73TFaneZoqosPjabyJYGzi0ru7sNlrdCPOlkSnMMXwdFHk0dy98sNhYKWGkMEVwe0hxnLB8ilTRMmmBAC3RFBvDTI6FRULr7HpWuwcsqFy3dBJAXpirXTcMLQz5rDWO3ffeEr/4Cf/JU6O4EXEQaaAu0HqAzEkjb/5Lllj2wevPGTWvQA7W4t/YLu22xHVj94E/3obcTHBdxHNSJQ8RB5vxnCzUls5cZPf4eAOvkL1m/Pp5zrBissjys6EGkrwsNbKiDmhBEwAhqW4CLdEQx07KXRo94ez3b2//Wa+uJ5g5Wl83UEpy7Nqy4HrQ3itIciCBxD09dTCuKKZXQOTtfhsAXrZcaErtywrC+1VbfsKYg/RBbGo7YEtZzYAUbBJgawuQQ/g7g37egNuxnwn9/R9vF/2xpbXn3fudvElWgkIG2gf9nwg9peD8Jn/ow3YNOG/aMwylbwd/dK1P4p4xmfoqIvfrhRWvl23teeHcDag78lIMJBRifgnoNsObvFoQ+LDcAD+wKR90P/pNHpsRe87ihNMONsNZhleNuZ9/TYePlYHkbABIhDK/CG59DLYCWD1uvBN1R+OyGB/+eLeCYIbMFXC5eF2pioD1IZFkkvg72puux/Dorc9hRsMtycPoQqLTLaKrK+qsvy/DP371P3A1P2NBksv8R7bWJxBB3jpAucBzEuGjTYPIpzn7ucRpxeOWFcUgrhsqgIffuRlZz2EvDVWpP0g4gKKF1H8IENBNoYwZIAmQS+ZEgFaDoQ6UPzQ97tP7JcSMdAKuv5xKTyK6HG91FwgAjNoQRxFNm53o2/kj2ORTOv2S20HoRU/3hK3vjnsuXaCZnrf0j1PVR6d/+NHGiaDOLOCsjq5/PSUcKL72UwRR+V+lwnrDW7r+49vDWzSUEALw5E0666d9tyTpn0OrYQ2KdK5pyGm1Mn4bjfm4t7T1df22nJdp5FtmOWP3cCgObAAAAAElFTkSuQmCC" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "Solar Textures"
details = "太阳系星球达 8K 的高清纹理"
:extraLinks="[
  { text: 'Link', link: 'https://www.solarsystemscope.com/textures/' },
]" />
</div>