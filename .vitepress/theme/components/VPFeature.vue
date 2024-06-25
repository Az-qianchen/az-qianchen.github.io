<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";

defineProps<{
  icon?: DefaultTheme.FeatureIcon;
  title: string;
  details?: string;
  link?: string;
  linkText?: string;
  rel?: string;
  target?: string;
  badges?: Array<{
    type: string;
    text: string;
  }>;
  extraLinks?: Array<{
    link: string;
    text: string;
  }>;
}>();
</script>

<template>
  <VPLink
    class="VPFeature"
    :href="link"
    :rel="rel"
    :target="target"
    :no-icon="true"
    :tag="link ? 'a' : 'div'"
  >
    <article class="box">
      <div class="icon-title">
        <div v-if="typeof icon === 'object' && icon.wrap" class="icon">
          <VPImage
            :image="icon"
            :alt="icon.alt"
            :height="icon.height || 48"
            :width="icon.width || 48"
          />
        </div>
        <VPImage
          v-else-if="typeof icon === 'object'"
          :image="icon"
          :alt="icon.alt"
          :height="icon.height || 48"
          :width="icon.width || 48"
        />
        <div v-else-if="icon" class="icon" v-html="icon"></div>
        <h2 class="title" v-html="title"></h2>
      </div>

      <div v-if="badges" class="badges">
        <Badge
          v-for="(badge, index) in badges"
          :key="index"
          :type="badge.type"
          :text="badge.text"
        />
      </div>

      <p v-if="details" class="details" v-html="details"></p>

      <div v-if="linkText" class="link-text">
        <p class="link-text-value">
          {{ linkText }} <span class="vpi-arrow-right link-text-icon" />
        </p>
      </div>

      <div v-if="extraLinks && extraLinks.length" class="extra-links">
        <a
          v-for="(extraLink, index) in extraLinks"
          :key="index"
          :href="extraLink.link"
          class="extra-link-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ extraLink.text }} <span class="vpi-arrow-right link-text-icon" />
        </a>
      </div>
    </article>
  </VPLink>
</template>

<style scoped>
.extra-links {
  display: flex;
  flex-direction: row; /* 水平排列 */
  column-gap: 8px; /* 间距 */
  flex-wrap: wrap; /* 自动换行 */
}

.extra-link-button {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.extra-link-button:hover {
  text-decoration: underline;
}

.icon-title {
  display: flex;
  align-items: center;
}

.VPFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.VPFeature.link:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.box > :deep(.VPImage) {
  margin-bottom: 20px;
}

.icon {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 48px;
  min-width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin-left: 12px !important;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  padding-bottom: 6px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
  margin-right: 8px;
}

.badges {
  margin: 10px 0px 0px 0px;
}
</style>
