---
title: "博客推荐"

prev: false
next: false
pageinfo: false
comments: false
lastUpdated: false

pageClass: custom-page-class

# layout: page
---

<style >

.custom-page-class {
    /* 容器设置 */
    .VPFeature-item {
        display: flex;  /* 水平排列 */
        justify-content: flex-start;  /* 居左 */
        flex-wrap: wrap; /* 换行 */
        gap: 10px; /* 空隙 */
    }
    .VPLink {
        height: auto; /* 确保高度自动适应内容 */
    }
    /* 标题换行 */
    .title {
            line-height: 1.2 !important;
    }

    /* 两边空隙 */
    @media (min-width: 1440px) {
        .VPContent.has-sidebar {
            padding-right: 0px;
            padding-left: 300px;
    }}
    /* 左栏 */
    @media (min-width: 1440px) {
        .VPSidebar {
            padding-left: 60px;
            width: 300px;
        }}
    /* 顶部左上标志 */
    @media (min-width: 1440px) {
        .wrapper .container .title {
            padding-left: 30px !important;
            width: 100px !important;
        }
    }
    /* 顶栏左右空隙 */
    @media (min-width: 1440px) {
        .VPNavBar.has-sidebar .content[data-v-cf6e7c5e] {
            padding-right: 60px;
            padding-left: 300px;
        }
    }
    /* 内容铺满填充 */
    .content-container,
    .content {
        max-width: 100% !important;
    }
  
    /* 密度宽度自适应 */
    .VPFeature-item > * {
        flex-basis: calc(100% - 10px);
        max-width: calc(100% - 10px);
    }
    @media (min-width: 400px) {
        .VPFeature-item > * {
            flex-basis: calc(50% - 10px);
            max-width: calc(50% - 10px);
        }
    }
    @media (min-width: 800px) {
        .VPFeature-item > * {
            flex-basis: calc(33.333% - 10px);
            max-width: calc(33.333% - 10px);
        }
    }
    @media (min-width: 1400px) {
        .VPFeature-item > * {
            flex-basis: calc(25% - 10px);
            max-width: calc(25% - 10px);
        }
    }

    /* 样式修复 */
    .VPFeature-item a {
        font-weight: 500;
        color: var(--vp-c-text-1);
        text-decoration: none;
        text-underline-offset: 0px;
    }
    .icon-title h2 {
        margin: 0;
        border-top: 0px solid var(--vp-c-divider);
        padding-top: 0px;
        letter-spacing: 0em;
        line-height: 0px;
        font-size: 16px;
    }
    ._zh_nav_ p {
        margin: 0;
    }
    .box .link-text {
        padding-top: 0px;
    }
}
</style>

<script setup>
  import VPFeature from ".vitepress/theme/components/VPFeature.vue";
  import BackgroundShader from "../../../.vitepress/theme/vue/BackgroundShader.vue";
</script>

## 播客推荐
<div class="VPFeature-item">
<VPFeature icon = '<img src="https://bts-image.xyzcdn.net/aHR0cHM6Ly9tZWRpYS53YXZwdWIuY29tL2I4LzQxL2MwLzIwMjMwNjI0MDA1MzI1LXhTYkJRYmdQcWpRWVJZdHAucG5n.png@small">'  title = "故事FM" details = "故事作为认知世界的一种方式，将带我们看到那些不曾见过的暗面" link = "https://www.xiaoyuzhoufm.com/podcast/5e280fad418a84a0461fb38b" linkText="Link" />
<VPFeature icon = '<img src="https://bts-image.xyzcdn.net/aHR0cHM6Ly9pbWFnZS54eXpjZG4ubmV0L0ZuTm5pUnlOcm9JNFNBbXN5TElIb1ZvenhxRnU=@small">'  title = "加州101" details = "历史、世界、生活又或是什么都聊，可以说是最爱的播客没有之一了" link = "https://www.xiaoyuzhoufm.com/podcast/5e280faf418a84a0461fbd0d" linkText="Link" />
<VPFeature icon = '<img src="https://bts-image.xyzcdn.net/aHR0cHM6Ly9pbWFnZS54eXpjZG4ubmV0L0ZqbjRFRWQzX1FKWHUzUWY4TWROSFhkUnpiRjQuanBn.jpg@small">'  title = "日谈公园" details = "不用过多介绍，博客界的扛把子，鼎力推荐其中的李淼罪案系列，刘所聊历史" link = "https://www.xiaoyuzhoufm.com/podcast/5e280faa418a84a0461f9ad8" linkText="Link" />
<VPFeature icon = '<img src="https://bts-image.xyzcdn.net/aHR0cHM6Ly9pbWFnZS54eXpjZG4ubmV0L0ZqZkt3UnpfZTBYX0pidmVKU3RtZUEtSjBZc3kucG5n.png@small">'  title = "跳进兔子洞" details = "声音特稿，一种新闻故事，又是带故事的新闻，非常的精品，期待下一季12313123123123123123" link = "https://www.xiaoyuzhoufm.com/podcast/6289d46e5cf4a5ad60ca08f8" linkText="Link" />
</div>
