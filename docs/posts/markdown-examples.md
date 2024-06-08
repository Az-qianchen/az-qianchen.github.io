---
title: Markdown Extension Examples
tags:
  - tag1
  - tag3


author: AA，BB
readingTime: 5
wordCount: 800
writtenDate: 2023-04-01

---
![](https://s2.loli.net/2024/05/29/3u6HrJnqkTmE2ZM.png)
![](https://s2.loli.net/2024/05/11/AxytJQVb3EDwfiZ.jpg)

<script setup>
  import { ref } from "vue";
  import PhotoSwipe from "../../.vitepress/theme/vue/PhotoSwipe.vue";

  const images = ref([
  {
    largeURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
    thumbnailURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
    width: 1875,
    height: 2500,
  },
  {
    largeURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
    thumbnailURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
    width: 1669,
    height: 2500,
  },
  {
    largeURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
    thumbnailURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
    width: 2500,
    height: 1666,
  },
]);
</script>

<PhotoSwipe :images="images" />
# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
