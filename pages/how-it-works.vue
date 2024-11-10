<template>
  <div>
    <div class="hidden lg:flex flex-col text-center w-full mx-auto px-4 bg-gradient-to-r from-blue-300 to-teal-100 md:bg-gradient-to-r md:from-blue-300 md:to-teal-100 pb-52 lg:pb-20">
      <div class="p-5">
        <h1 class="lg:text-5xl font-bold text-white mt-10 md:text-indigo-600 mb-2">Walkthrough</h1>
        <h2 class="text-black text-center text-xl lg:text-3xl">How Our Helmet Cleaning Vending Machine Works </h2>
        <p class="info-text">
          Discover the innovative features and functionalities of our Helmet Cleaning Vending Machine.
        </p>
      </div>
      <div class="hidden lg:flex flex-col items-center justify-center py-2 lg:min-h-[80vh]">
        <div class="relative w-full max-w-xl md:max-w-3xl lg:max-w-7xl xl:max-w-8xl border-8 border-white rounded-lg shadow-lg overflow-hidden">
          <video
            src="/hpro.mp4"
            controls
            autoplay
            loop
            muted
            loading="lazy"
            class="w-full h-full object-cover"
             aria-label="Helmet Cleaning Vending Machine walkthrough video"
          ></video>
        </div>
        <div class="max-w-xl w-full bg-white rounded-lg shadow-md md:p-4 md:mt-4 mt-20">
          <p class="text-sm">
            This video provides a step-by-step guide on how to use the HelmetPro Cleaning Vending Machine, showcasing its features, from efficient helmet sanitization to eco-friendly operation, ensuring your helmet is fresh, clean, and ready to wear.
          </p>
        </div>
      </div>
    </div>

    <div class="block lg:hidden bg-gradient-to-r from-blue-300 to-teal-100 pb-10">
      <div class="flex flex-col text-center w-full mx-auto px-4">
        <h1 class="text-3xl lg:text-5xl font-bold text-indigo-700 mt-10 mb-2">Walkthrough</h1>
        <h2 class="text-black text-center text-xl lg:text-3xl">How Our Helmet Cleaning Vending Machine Works</h2>
        <p class="info-text">
          Discover the innovative features and functionalities of our Helmet Cleaning Vending Machine.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="relative w-full h-[500px] border-2 rounded-lg shadow-lg overflow-hidden">
          <video
            src="/hpro.mp4"
            controls
            autoplay
            loop
            muted
            loading="lazy"
            class="w-full h-full object-contain bg-black"
             aria-label="Helmet Cleaning Vending Machine walkthrough video"
          ></video>
        </div>
        <div class="max-w-xl w-full bg-white rounded-lg shadow-md p-4 mt-4">
          <p class="text-sm">
            This video provides a step-by-step guide on how to use the HelmetPro Cleaning Vending Machine, showcasing its features, from efficient helmet sanitization to eco-friendly operation, ensuring your helmet is fresh, clean, and ready to wear.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Define page metadata
definePageMeta({
  layout: 'custom-layout',
  name: 'How it Works',
  head: {
    link: [
    {
      rel: 'preload',
      href: '/hpro.mp4',
      as: 'video'
    },
    {
      hid: 'canonical',
      rel: 'canonical',
      href: 'https://www.helmetprosolutions.com/how-it-works'
    }
  ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "How Our Helmet Cleaning Vending Machine Works",
          "description": "Explore how the HelmetPro Cleaning Vending Machine operates.",
          "url": "https://www.helmetprosolutions.com/how-it-works",
          "video": {
            "@type": "VideoObject",
            "name": "How to Use the HelmetPro Cleaning Vending Machine",
            "description": "A step-by-step guide on using the HelmetPro Cleaning Vending Machine, featuring efficient helmet sanitization.",
            "thumbnailUrl": "https://www.helmetprosolutions.com/thumbnailvideo.png", // Add your thumbnail URL here
            "contentUrl": "https://www.helmetprosolutions.com/hpro.mp4",
            "embedUrl": "https://www.helmetprosolutions.com/hpro.mp4", // Optional: point to a watch page
            "duration": "PT2M33S", // Example duration; update accordingly
            "uploadDate": "2024-11-05", // Update with the actual upload date
            "publisher": {
              "@type": "Organization",
              "name": "HelmetPro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.helmetprosolutions.com/favicon/android-chrome-512x512.png"
              }
            }
          }
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "HelmetPro",
          "url": "https://www.helmetprosolutions.com",
          "logo": "https://www.helmetprosolutions.com/favicon/android-chrome-512x512.png",
          "description": "HelmetPro provides state-of-the-art helmet cleaning vending machines and dedicated support for business growth.",
          "sameAs": [
            "https://www.facebook.com/helmetprosolutions",
            "https://www.instagram.com/helmetpro_vendo"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+63-962-753-3915",
            "contactType": "Sales",
            "areaServed": "PH",
            "availableLanguage": "English"
          }
        }),
      }
    ]
  }
});

let scrollTimeout;
const handleScroll = () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
      }
    });
  }, 200); // adjust delay as needed
};

// // Pause videos on scroll
// const handleScroll = () => {
//   const videos = document.querySelectorAll('video');
//   videos.forEach(video => {
//     if (!video.paused) {
//       video.pause();
//     }
//   });
// };

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Additional scoped styles can go here if needed */
</style>
