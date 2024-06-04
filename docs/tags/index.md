---
sidebar: false
prev: false
next: false
---

<script setup lang="ts">
import { getTags } from '../utils/posts.mts'
import { useRouter } from 'vitepress'
const tags: Tag[] = getTags()
const router = useRouter()
const clickHandler = (name) => {
    router.go(`tags/${name}`)
}
</script>

<a v-for="tag in tags" :key="tag.name" :href="tag.name" px-2 font-bold>{{ tag.name }}</a>
