<template>
  <section>
    <div class="hidden lg:block">
      <DesktopView />
    </div>
    <div class="block lg:hidden">
      <MobileView />
    </div>
  </section>
</template>

<script setup>
import DesktopView from "/components/product-hero/ProductDesktop.vue";
import MobileView from "/components/product-hero/ProductMobile.vue";



</script>

<style  scoped>

</style>