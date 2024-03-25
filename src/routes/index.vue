<script lang="ts" setup>
import {PageService} from '@app/Services/PageService';
const page = await new PageService().find();

import Header from '@ui/components/Header';
import Advantages from '@ui/components/Advantages';
import Gallery from '@ui/components/Gallery';
import Schema from '@ui/components/Schema';
import Map from '@ui/components/Map';
import Footer from '@ui/components/Footer';

// const {data: page} = await useFetch('/api/page', {
//   transform: (_page) => _page.data,
// });
//console.log(toRaw(page.value));

useHead({
  htmlAttrs: {
    lang: page.data.lang,
  },
  title: page.data.title,
  meta: [
    {name: 'description', content: page.data.meta_description},
    {
      'name': 'viewport',
      'content': 'width=device-width, initial-scale=1, shrink-to-fit=no'
    },
    {
      'charset': page.data.charset
    }
  ],
});

console.log(page.data);
</script>
<template>
  <div>
    <Header
        :title="page.data.banner.header"
        :sub_title="page.data.banner.sub_header"
        :form_title="page.data.banner.form_title"
        :form_name="page.data.banner.form_name"
        :form_phone="page.data.banner.form_phone"
        :form_button="page.data.banner.form_button"
        :menu="page.data.menu"
        :contact="page.data.contact_phone"
    />
    <Advantages
        :title="page.data.advantages.header"
        :items="page.data.advantages.items"
    />
    <Gallery
        :title="page.data.gallery.header"
        :images="page.data.gallery.images"
    />
    <Schema
        :title="page.data.schema.header"
        :image="page.data.schema.image"
    />
    <Map
        :title="page.data.map.header"
        :text="page.data.map.text"
        :image="page.data.map.image"
    />
    <Footer
        :title="page.data.footer.header"
        :menu="page.data.menu"
        :contact="page.data.contact_phone"
    />
  </div>
</template>
