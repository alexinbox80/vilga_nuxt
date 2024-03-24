<script setup lang="ts">
defineProps({
  title: String,
  text: String,
  image: Object
})
</script>

<template>
  <section id="map" class="map">
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
        <div class="section__subtext">
          {{ text }}
        </div>
      </div>
    </div>
    <div class="section__bottom">
      <img class="section__map" :src="image.src" :alt="image.alt">
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>