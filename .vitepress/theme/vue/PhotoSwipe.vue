<template>
  <div id="gallery">
    <a
      v-for="(image, key) in imagesData"
      :key="key"
      :href="image.largeURL"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
    >
      <img
        :data-src="image.largeURL"
        alt=""
        style="width: 100%; height: auto"
        no-zoom="防止 medium-zoom 一起触发"
        @load="updateImageSize(image, $event)"
        class="lazy"
      />
    </a>
  </div>
</template>

<script scoped>
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default {
  name: "SimpleGallery",
  props: {
    images: Array,
  },
  setup(props) {
    return {
      imagesData: props.images,
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: "#gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
        wheelToZoom: true,
      });
      this.lightbox.init();
    }

    // Intersection Observer for lazy loading images
    const observer = new IntersectionObserver(
      (entries, self) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            self.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 50px 0px" }
    );

    this.$nextTick(() => {
      document.querySelectorAll("img.lazy").forEach((img) => {
        observer.observe(img);
      });
    });
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {
    updateImageSize(image, event) {
      const img = event.target;
      if (!image.width || !image.height) {
        image.width = img.naturalWidth;
        image.height = img.naturalHeight;
        const anchor = img.parentElement;
        anchor.setAttribute("data-pswp-width", image.width);
        anchor.setAttribute("data-pswp-height", image.height);
      }
    },
    loadImage(img) {
      const src = img.getAttribute("data-src");
      if (!src) return;
      img.src = src;
      img.classList.remove("lazy");
    },
  },
};
</script>

<style>
#gallery {
  column-count: 2;
  column-gap: 4px;
}
@media (min-width: 640px) {
  #gallery {
    column-count: 3;
  }
}
#gallery a {
  display: block;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 0 4px 0;
}
#gallery img {
  transition: transform 0.5s;
}
#gallery a:hover img {
  transform: scale(1.1);
}
/* 毛玻璃效果 */
.pswp--open {
  backdrop-filter: blur(0px);
  transition: backdrop-filter 0.25s ease;
}
.pswp--ui-visible {
  backdrop-filter: blur(10px);
}
</style>
