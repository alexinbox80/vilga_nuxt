<script setup lang="ts">
defineProps({
  title: String,
  images: Array
})
</script>

<template>
  <section id="gallery" class="gallery">
    <div class="content">
      <div class="section__header">
        <div class="section__text">
          <h2 class="section__title">{{ title }}</h2>
          <span class="section__hline">
            <svg width="122" height="4" viewBox="0 0 122 4" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2H122" stroke="#589F17" stroke-width="4"/>
            </svg>
          </span>
        </div>
      </div>
      <div class="section__bottom">
        <ul class="gallery__picitem">
          <li class="gallery__items" v-for="image of images" :key="image.key">
            <NuxtLink href="#" class="gallery__link">
              <img class="gallery__pics" :src="image.src" :alt="image.alt">
            </NuxtLink>
          </li>
        </ul>
      </div>
      <nav class="gallery__lists">
        <ul>
          <li class="gallery__pageli" :class="page === 1 ? 'active' : ''" v-for="page of [1, 2, 3]" :key="page.key">
            <NuxtLink href="#">
              <span class="gallery__page">{{ page }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>