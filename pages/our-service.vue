<template>
  <section class="bg-gradient-to-r from-blue-700 to-teal-400 text-white">
    <!-- Hero Banner Section -->
    <div class="hero-banner relative overflow-hidden">
      <div class="relative z-10 flex flex-col items-center justify-center py-24 px-4 sm:px-8 lg:px-20">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-white animate__animated animate__fadeInUp">
          We Customize Your Helmet Cleaning Machine
        </h1>
        <p class="text-center max-w-2xl text-base sm:text-lg lg:text-xl mb-6">
          Choose your unique design style for the helmet cleaning machine, tailored to your preferences.
        </p>
        <nuxt-link 
          to="/contactus" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started
        </nuxt-link>
      </div>
    </div>
    
    <!-- Custom Design Image -->
    <div class="mx-auto mb-6">
      <nuxt-img 
        src="/images/custom-img.png" 
        alt="Selected Custom Design" 
        class="w-full lg:h-auto 2xl:h-auto px-4 sm:px-10 object-contain rounded-lg " 
      />
    </div>


    <!-- CTA Section -->
    <div class="cta-section relative py-24 bg-gradient-to-r from-blue-300 to-teal-100 text-center">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-400 opacity-70"></div>
      <div class="relative z-10 mx-auto px-8">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 animate__animated animate__fadeInUp">
          Ready to Customize Your Machine?
        </h2>
        <p class="text-lg sm:text-xl mb-8">
          Contact us today to create a vending machine design that aligns with your brand and vision.
        </p>
        <nuxt-link 
          to="/contactus" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  '/images/original.png',
  '/images/custom-machine-1.png',
  '/images/machine3.png',
  '/images/machine4.png',
  '/images/machine5.png'
]
const selectedImage = ref(images[0])

const rebrandingImages = [
  '/images/brand-image-1.png',
  '/images/brand-image-2.png',
  '/images/brand-image-3.png'
]

definePageMeta({
  layout: 'custom-layout',
  name: 'Our Service',
  title: 'We Customize Your Helmet Cleaning Machine',
  description: 'Explore customization options for Helmet Cleaning Machines with a personalized design style.',
  link: [
    { 
      hid: 'canonical',
      rel: 'canonical', 
      href: 'https://www.helmetprosolutions.com/our-service'
     }
  ]
})
</script>

<style scoped>
.customization-page {
  font-family: sans-serif;
}

.thumbnail-gallery img:hover {
  transform: scale(1.1);
  border-color: #1e40af; /* Blue-600 */
}

.thumbnail-gallery img {
  border-width: 2px;
  transition: transform 0.3s, border-color 0.3s;
}

.hero-banner h1 {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-bg-image {
  height: 900px;
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0B2B5A 146.14%
    ),
    url('/images/image1.png') center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
