<template>
  <div>
    <ProductHero  />
    <ProductAbout />
    <ProductFeatures  />
    <BookNow />
    <InquiryForm />
  </div>
</template>

<script setup>
definePageMeta({
  head: {
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.helmetprosolutions.com/'
      }
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Learn more about HelmetPro, our mission, and how we provide innovative helmet cleaning vending machines that prioritize hygiene and convenience for riders.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'HelmetPro, helmet cleaning, vending machines,hygiene, convenience, innovative solutions, rider safety'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "HelmetPro",
          "url": "https://www.helmetprosolutions.com",
          "description": "Discover the Future of Helmet Cleaning! HelmetPro offers an innovative helmet cleaning vending machine that automatically maintains hygiene and convenience for riders, revolutionizing helmet care.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.helmetprosolutions.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }),
      },
    ]
  }
});

import ProductHero from '@/components/ProductHero.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import BookNow from '~/components/BookNow.vue';
import InquiryForm from '~/components/InquiryForm.vue';
</script>


<style>

</style>
