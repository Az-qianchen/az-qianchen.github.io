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

<VPFeature icon = '<img src="https://camo.githubusercontent.com/bd80f9d8fb3f037a3dbc962506ccf60713b063c07b9548e6914f8a02c1c3976c/68747470733a2f2f72616e646f6d7265706f696d672e666c792e6465762f61676d6d6e6e2f617765736f6d652d626c656e6465722f696d6773" style = "max-width: 500%;transform: translate(0%, 0%);">'
title = "Awesome Blender"
details = "一张精选的 Blender 插件、工具、资源列表"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/agmmnn/awesome-blender?tab=readme-ov-file' },
]">
<template #badgeImage>
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
details = "各类徽章生成"
:extraLinks="[
  { text: 'GitHub', link: 'https://github.com/badges/shields' },
  { text: 'Link', link: 'https://shields.io/' },
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
</div>

## 🔤 字体

<div class="VPFeature-item">
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
</div>

## 🎵 音频

<div class="VPFeature-item">
<VPFeature icon = '<img src="https://eadn-wc01-3423425.nxedge.io/cdn/wp-content/uploads/2019/10/sonniss-logo-small.png" style = "max-width: 60%;transform: translate(0%, 0%);">'
title = "GDC"
details = "来自 Sonniss 27GB+ 高品质音效，可商用"
:extraLinks="[
  { text: 'Link', link: 'https://gdc.sonniss.com/' },
]" />
</div>