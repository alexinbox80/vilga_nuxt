<script lang="ts" setup>
import Header from '@ui/components/Header';

const {data: page} = await useFetch('/api/page', {
  transform: (_page) => _page.data,
});
console.log(toRaw(page.value));
</script>
<template>
  <div>
    <Header
        :title="page.banner.header"
        :sub_title="page.banner.sub_header"
        :form_title="page.banner.form_title"
        :form_name="page.banner.form_name"
        :form_phone="page.banner.form_phone"
        :form_button="page.banner.form_button"
        :menu="page.menu"
    />

    <pre>{{ page.banner.header }}</pre>
  </div>
</template>
