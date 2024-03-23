<script setup lang="ts">

</script>

<template>
  <section id="gallery" class="gallery">
    <div class="content">
      <div class="section__header">
        <div class="section__text">
          <h2 class="section__title">Фотогалерея</h2>
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
          <li class="gallery__items">
            <a href="#" class="gallery__link">
              <img class="gallery__pics" src="../../assets/images/pics01.jpg" alt="Vilga pics">
            </a>
          </li>
          <li class="gallery__items">
            <a href="#" class="gallery__link">
              <img class="gallery__pics" src="../../assets/images/pics02.jpg" alt="Vilga pics">
            </a>
          </li>
          <li class="gallery__items">
            <a href="#" class="gallery__link">
              <img class="gallery__pics" src="../../assets/images/pics03.jpg" alt="Vilga pics">
            </a>
          </li>
          <li class="gallery__items">
            <a href="#" class="gallery__link">
              <img class="gallery__pics" src="../../assets/images/pics04.jpg" alt="Vilga pics">
            </a>
          </li>
          <li class="gallery__items">
            <a href="#" class="gallery__link">
              <img class="gallery__pics" src="../../assets/images/pics05.jpg" alt="Vilga pics">
            </a>
          </li>
          <li class="gallery__items">
            <a href="#" class="gallery__link">
              <img class="gallery__pics" src="../../assets/images/pics06.jpg" alt="Vilga pics">
            </a>
          </li>
        </ul>
      </div>
      <nav class="gallery__lists">
        <ul>
          <li class="gallery__pageli active">
            <a href="#">
              <span class="gallery__page">1</span>
            </a>
          </li>
          <li class="gallery__pageli">
            <a href="#">
              <span class="gallery__page">2</span>
            </a>
          </li>
          <li class="gallery__pageli">
            <a href="#">
              <span class="gallery__page">3</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>