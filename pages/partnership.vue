<template>
  <div class="font-sans text-gray-800 mx-auto bg-gradient-to-r from-blue-300 to-teal-100 min-h-screen">

    <section class="flex flex-col items-center py-16 bg-gradient-to-r from-blue-300 to-teal-100 text-center">
      <div class="relative z-10 text-center">
        <h1 class="text-3xl lg:text-5xl font-extrabold text-indigo-600 mb-6">Why Join Us?</h1>
       
      </div>
      <div class="flex flex-wrap justify-center gap-8">
        
        <div v-for="(benefit, index) in benefits" :key="index" class="flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg my-6 w-80 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
          <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
            <NuxtImg class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90" :src="benefit.icon" :alt="benefit.title" loading="lazy" />
          </div>
          <div class="p-6 text-center">
            <h4 class="mb-1 text-2xl font-semibold text-slate-800">{{ benefit.title }}</h4>
            <p class="text-base text-slate-600 mt-4 font-light">
              {{ benefit.description }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="relative bg-cover bg-center text-black py-16" style="background-image: url('/images/joinus8.jpg');">
      <div class="absolute inset-0 bg-black opacity-70"></div> 
      <div class="relative z-10 text-center">
        <h1 class="text-5xl lg:text-6xl font-extrabold text-indigo-600 mb-6">Join Our Distributor Network</h1>
        <p class="text-lg text-white mb-5">Unlock your potential and empower your future with our guidance and support as a distributor.</p>
        <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSceprgT-LisDTR-giEVZzgx9q2w-JLKnGDMZ3If8sxXXk4O4w/viewform"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
      >
      Become a Distributor
      </a>  
      </div>
    </section>
    <ProductHero3  />
    <section class="py-16 text-center">
      <h2 class="text-4xl font-bold mb-8 text-indigo-600">Visualize Your Success</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <NuxtImg 
          v-for="(image, index) in images" 
          :key="index" 
          :src="image.src" 
          :alt="image.alt" 
          class="w-full max-w-md object-cover rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300" 
          loading="lazy"
        />
      </div>
    </section>

    <section class="pb-16 bg-gradient-to-r from-blue-300 to-teal-100 text-center">
      <h2 class="text-4xl font-bold mb-4 text-indigo-600">We're Here to Support You.</h2>
      <p class="text-lg ">Our dedicated team will guide you every step of the way, ensuring your success as a distributor.</p>
      <p class="text-lg mb-6">Come and join to our Facebook Group Chat to discuss your needs and get support as a distributor in no time.</p>
      <a
        href="https://www.facebook.com/groups/362063670230089"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
      >
      Join Our Facebook Group
      </a>      
    </section>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
definePageMeta({
  layout: 'custom-layout',
  name: 'JOIN US',
  head: {
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
       href: 'https://www.helmetprosolutions.com/partnership'
      }
    ],

    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Partnership Opportunities",
          "description": "Discover the exciting partnership opportunities with HelmetPro and how you can join us in transforming helmet hygiene solutions.",
          "url": "https://www.helmetprosolutions.com/partnership"
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "HelmetPro",
          "url": "https://www.helmetprosolutions.com",
          "logo": "https://www.helmetprosolutions.com/favicon/android-chrome-512x512.png",
          "description": "HelmetPro offers cutting-edge helmet cleaning vending machines and comprehensive business support for distributors, helping them thrive and grow.",
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



const benefits = ref([
  {
    title: 'Comprehensive Training',
    description: 'Receive extensive training to help you succeed.',
    icon: '/images/joinus.jpg', 
  },
  {
    title: 'Marketing Support',
    description: 'Access to marketing resources and materials.',
    icon: '/images/joinus2.jpg', 
  },
  {
    title: 'Exclusive Products',
    description: 'Be the first to offer our latest products.',
    icon: '/images/joinus4.jpg', 
  },
  {
    title: 'Flexible Hours',
    description: 'Work at your own pace and schedule.',
    icon: '/images/joinus3.jpg', 
  },
]);

const images = ref([
  { src: '/images/joinus5.jpg', alt: 'Image 1 Description' },
  { src: '/images/joinus6.jpg', alt: 'Image 2 Description' },
  { src: '/images/joinus7.jpg', alt: 'Image 3 Description' },
]);

const handleApply = () => {
  console.log('Application form will be shown here.');
};

const handleContact = () => {
  console.log('Contact form will be shown here.');
};
</script>

<style scoped>
/* No custom styles are needed since everything is done with Tailwind CSS */
</style>
