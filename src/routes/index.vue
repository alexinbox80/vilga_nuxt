<script lang="ts" setup>
import Header from '@ui/components/Header';
import Advantages from '@ui/components/Advantages';
import Gallery from '@ui/components/Gallery';
import Schema from '@ui/components/Schema';
import Map from '@ui/components/Map';
import Footer from '@ui/components/Footer';

const {data: page} = await useFetch('/api/page', {
  transform: (_page) => _page.data,
});

useHead({
  htmlAttrs: {
    lang: page.value.lang,
  },
  title: page.value.title,
  meta: [
    {name: 'description', content: page.value.meta_description},
    {
      'name': 'viewport',
      'content': 'width=device-width, initial-scale=1, shrink-to-fit=no'
    },
    {
      'charset': page.value.charset
    }
  ],
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
    <Advantages/>
    <Gallery/>
    <Schema/>
    <Map/>
    <Footer/>
  </div>
</template>
