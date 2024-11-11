<template>
  <div>
    <BackStory />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
useHead({
  title: 'About HelmetPro: Helmet Vending and Cleaning Machine',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: route.name === 'about' 
        ? 'Learn more about HelmetPro and our innovative helmet cleaning solution.' 
        : 'HelmetPro provides the best automated helmet cleaning vending machines.',
    },
  ],
})
definePageMeta({
  layout: 'custom-layout',
  name: 'ABOUT',
  head: {
    middleware: 'canonical',
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About HelmetPro",
          "description": "Discover HelmetPro and our  commitment to revolutionizing helmet hygiene with our advanced vending machines that offer convenience and cleanliness.",
          "url": "https://www.helmetprosolutions.com/about"
        }),
      }
    ]
  }
});

</script>

<style scoped>

</style>