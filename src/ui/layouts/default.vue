<script lang="ts" setup>
</script>

<template>
  <div class="wrapper">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
