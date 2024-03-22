<script lang="ts" setup>
</script>

<template>
  <div class="top">
    <header id="header" class="header">
      <div class="header__shadow">
        <div class="content">
          <div class="header__top">
            <div class="top__menu">
              <input type="checkbox" id="menu__toggle">
              <label for="menu__toggle">
                <span class="header__menu">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="15" width="20" height="2" fill="#32322C"/>
                    <rect x="14" y="23" width="16" height="2" fill="#32322C"/>
                    <rect x="14" y="31" width="12" height="2" fill="#32322C"/>
                  </svg>
                </span>
              </label>
              <nav class="menu__list">
                <ul class="menu__ul">
                  <li class="menu__close">
                    <label for="menu__toggle">
                      <span class="menu__tclose">close</span>
                    </label>
                  </li>
                  <li class="menu__item"><a href="#advantages" class="menu__link">преимущества</a>
                  </li>
                  <li class="menu__item"><a href="#gallery" class="menu__link">галерея</a></li>
                  <li class="menu__item"><a href="#schema"
                                            class="menu__link">план&nbsp;поселка</a></li>
                  <li class="menu__item"><a href="#map" class="menu__link">как&nbsp;проехать</a>
                  </li>
                </ul>
              </nav>
              <div class="mask__content"></div>
            </div>
            <ul class="header__topitem">
              <li class="header__titem">
                <a href="#" class="logo__link">
                  <div class="logo"></div>
                </a>
              </li>
              <li class="header__titem">
                <ul class="header__textmenu">
                  <li class="menu__textitem">
                    <a href="#advantages" class="menu__textlink">преимущества</a>
                  </li>
                  <li class="menu__textitem">
                    <a href="#gallery" class="menu__textlink">галерея</a>
                  </li>
                  <li class="menu__textitem">
                    <a href="#schema" class="menu__textlink">план&nbsp;поселка</a>
                  </li>
                  <li class="menu__textitem">
                    <a href="#map" class="menu__textlink">как&nbsp;проехать</a>
                  </li>
                </ul>
              </li>
              <li class="header__titem">
                <span class="header__phone phone">
                  <a href="tel:78126071795">7 812 607 17 95</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header__background content">
        <div class="header__text">
          <h1 class="header__title">участки от<br>300 тысяч рублей</h1>
          <span class="htitle__line">
            <svg width="248" height="6" viewBox="0 0 248 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3H248" stroke="#589F17" stroke-width="5"/>
            </svg>
          </span>
          <p class="header__stitle">экологичная жизнь около чистого леса</p>
        </div>
        <div class="header__form">
          <div class="header__formicon">
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <path d="M88 46C88 63.6731 73.6731 78 56 78C38.3269 78 24 63.6731 24 46C24 28.3269 38.3269 14 56 14C73.6731 14 88 28.3269 88 46Z"
                      fill="#589F17"/>
                <path d="M63.6347 50.7378C62.6763 49.7916 61.48 49.7916 60.5277 50.7378C59.8014 51.458 59.075 52.1783 58.3608 52.9108C58.1655 53.1122 58.0007 53.1549 57.7626 53.0206C57.2926 52.7643 56.7921 52.5567 56.3404 52.276C54.2345 50.9514 52.4705 49.2484 50.9079 47.3317C50.1327 46.3795 49.4429 45.3601 48.9607 44.2126C48.863 43.9806 48.8813 43.828 49.0706 43.6388C49.7969 42.9369 50.505 42.2166 51.2192 41.4963C52.2141 40.4953 52.2141 39.3233 51.2131 38.3161C50.6454 37.7424 50.0777 37.1808 49.51 36.607C48.9241 36.0211 48.3442 35.429 47.7521 34.8491C46.7938 33.9152 45.5974 33.9152 44.6452 34.8552C43.9127 35.5755 43.2107 36.314 42.466 37.0221C41.7763 37.6752 41.4284 38.4749 41.3551 39.4088C41.2391 40.9287 41.6115 42.3631 42.1364 43.7609C43.2107 46.6542 44.8466 49.224 46.8304 51.5801C49.51 54.7664 52.7085 57.2873 56.4503 59.1063C58.135 59.9243 59.8807 60.553 61.7791 60.6567C63.0853 60.73 64.2207 60.4004 65.1301 59.381C65.7528 58.6851 66.4547 58.0503 67.1139 57.385C68.0906 56.3962 68.0967 55.1998 67.1261 54.2231C65.9664 53.0573 64.8005 51.8975 63.6347 50.7378Z"
                      fill="#F3F6F3"/>
                <path d="M62.4678 45.873L64.7202 45.4884C64.3661 43.4192 63.3895 41.5453 61.9062 40.0559C60.3375 38.4872 58.3537 37.4983 56.1685 37.1931L55.8511 39.4577C57.5419 39.6957 59.0801 40.4587 60.2948 41.6734C61.4423 42.821 62.1931 44.2737 62.4678 45.873Z"
                      fill="#F3F6F3"/>
                <path d="M65.9898 36.0822C63.3895 33.4819 60.0994 31.8399 56.4676 31.3333L56.1501 33.5978C59.2876 34.0373 62.1321 35.4595 64.3783 37.6997C66.5086 39.83 67.9064 42.5219 68.4131 45.4823L70.6654 45.0977C70.0733 41.6673 68.4558 38.5543 65.9898 36.0822Z"
                      fill="#F3F6F3"/>
              </g>
              <defs>
                <filter id="filter0_d" x="0" y="0" width="112" height="112"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                  <feOffset dy="10"/>
                  <feGaussianBlur stdDeviation="12"/>
                  <feColorMatrix type="matrix"
                                 values="0 0 0 0 0.192157 0 0 0 0 0.74902 0 0 0 0 0.427451 0 0 0 0.35 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                           result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          <div class="header__formtitle">
            У вас есть вопросы? Оставьте заявку на<br>обратный звонок и мы поможем<br>подобрать вам
            подходящий участок.
          </div>
          <div id="header__formfields">
            <input type="text" name="name" placeholder="Имя" class="header__form-name" required="">
            <input type="text" name="phone" placeholder="Телефон" class="header__form-phone"
                   required="">
          </div>
          <button type="submit" class="header__form-submit" id="formSend">
            Оставить заявку
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
