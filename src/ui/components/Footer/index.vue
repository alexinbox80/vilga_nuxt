<script setup lang="ts">
defineProps({
  title: String,
  menu: Array,
  contact: String
})

</script>

<template>
  <footer id="footer" class="footer">
    <div class="content">
      <ul class="footer__content">
        <li class="footer__item">
          <NuxtLink href="/" class="logo__link">
            <div class="logo"></div>
          </NuxtLink>
        </li>
        <li class="footer__item footer__iposition">
          <ul class="footer__textmenu">
            <li class="footer__textitem" v-for="item of menu" :key="item.key">
              <NuxtLink :to="item.href" class="footer__textlink">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="footer__item footer__addressmob">
          <p class="footer__address">{{ title }}</p>
          <p class="footer__phone phone">
            <NuxtLink :to="'tel:' + contact">{{ contact }}</NuxtLink>
          </p>
        </li>
      </ul>
      <div class="footer__item footer__addressdesc">
        <p class="footer__address">{{ title }}</p>
        <p class="footer__phone phone">
          <NuxtLink :to="'tel:' + contact">{{ contact }}</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>