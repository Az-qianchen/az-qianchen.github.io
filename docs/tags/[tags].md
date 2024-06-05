---
title: { { $params.tags } }
sidebar: false
prev: false
next: false
comments: false
---

<script setup>
import { getTag } from '../utils/posts.mts'
import { useData } from 'vitepress'
const { params } = useData()
const tag = getTag(params.value.tags)
console.log(tag)
</script>

<h1>{{ $params.tags }}</h1>
<div flex flex-col v-for="post in tag.posts" :key="post.frontmatter.title">
    <div>
        <a :href="post.url">{{ post.frontmatter.title }}</a>
    </div>
</div>
