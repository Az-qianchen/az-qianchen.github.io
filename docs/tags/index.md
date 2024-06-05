---
sidebar: false
aside: false
prev: false
next: false
comments: false
---

<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { getTags } from '../utils/posts.mts'
import { useRouter } from 'vitepress'
const tags: Tag[] = getTags()
const router = useRouter()
const clickHandler = (name) => {
    router.go(`tags/${name}`)
}
</script>

<div class="grid-auto-cols-1 gap-4">
    <button 
        v-for="tag in tags" 
        :key="tag.name" 
        class="sc-tagBtn"
        @click="clickHandler(tag.name)" >
        {{ tag.name }}
        <sup class="font-bold">{{ tag.posts.length }}</sup>
    </button>
</div>
