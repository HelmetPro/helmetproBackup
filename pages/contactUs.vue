<template>
  <div class="py-10 bg-gradient-to-r from-blue-300 to-teal-100">
  

    <Form />   
    <section class="py-12 text-gray-800">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Email Section -->
          <div class="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <i class="fas fa-envelope text-indigo-600 text-4xl mb-2"></i>
            <h3 class="text-lg font-semibold text-indigo-600">Email</h3>
            <a href="mailto:partnerships@helmetprosolutions.com" class="text-blue-600 hover:underline">partnerships@helmetprosolutions.com</a>
          </div>

          <!-- Contact Number Section -->
          <div class="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <i class="fas fa-phone text-indigo-600 text-4xl mb-2"></i>
            <h3 class="text-lg font-semibold text-indigo-600">Contact Number</h3>
            <span class="text-blue-600">+63 962-753-3915</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Social Media Section with Icons -->
          <div class="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <i class="fas fa-share-alt text-indigo-600 text-4xl mb-2"></i>
            <h3 class="text-lg font-semibold text-indigo-600">Social Media</h3>
            <div class="flex space-x-4 mt-1">
              <a href="https://www.facebook.com/helmetprosolutions" target="_blank" class="text-blue-600 hover:text-blue-800">
                <i class="fab fa-facebook-square text-lg"><span class="text-lg m-2">facebook</span></i>
              </a>
              <a href="https://www.instagram.com/helmetpro_vendo/" target="_blank" class="text-pink-600 hover:text-pink-800">
                <i class="fab fa-instagram-square text-lg"><span class="text-lg m-2">instagram</span></i>
              </a>
              <a href="https://m.me/helmetprosolutions" target="_blank" class="text-blue-500 hover:text-blue-700">
                <i class="fab fa-facebook-messenger text-lg"><span class="text-lg m-2">messenger</span></i>
              </a>
            </div>
          </div>

          <!-- Location Section -->
          <div class="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <i class="fas fa-map-marker-alt text-indigo-600 text-4xl mb-2"></i>
            <h3 class="text-lg font-semibold text-indigo-600">Location</h3>
            <span class="text-blue-600 text-sm text-center">Agoho St. Phase 2 Central, Camella Springville, Brgy. Molino 3, Bacoor, Philippines</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="contact-us-container">
        <div class="map-container mb-6">
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12865.080123659327!2d120.949117!3d14.446871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9931daff42057%3A0xa10da4648c920012!2sMolino%203%2C%20Bacoor%20City%2C%20Cavite%2C%20Philippines!5e0!3m2!1sen!2sus!4v1698063299158!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"></iframe> -->

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15458.67564260357!2d120.9862246!3d14.3885581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3b0e5a510eb%3A0x66d07e63c978d0e4!2sHelmetPRO%20-%20Helmet%20Cleaning%20Vending%20Machine!5e0!3m2!1sen!2sph!4v1730811259124!5m2!1sen!2sph" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
useHead({
  title: 'Contact HelmetPro: Helmet Vending Solutions',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: route.name === 'contactus'
        ? 'Our mission is to provide innovative solutions for helmet hygiene and convenience.'
        : 'Get in touch with HelmetPro for questions, feedback, or inquiries about our helmet cleaning vending machines and services',
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'HelmetPro Support, helmet cleaning contact us, helmet cleaning service, vending machines contact us, hygiene, convenience, Helmet cleaning vending machine support, ' 
    }
  ],
})


definePageMeta({
  layout: 'custom-layout',
  name: 'CONTACT-US',
  head: {
    middleware: 'canonical',
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Us - HelmetPro",
          "description": "Get in touch with HelmetPro for questions, feedback, or inquiries about our helmet cleaning vending machines and services.",
          "url": "https://www.helmetprosolutions.com/contactus",
          "mainEntity": {
            "@type": "Organization",
            "name": "HelmetPro",
            "url": "https://www.helmetprosolutions.com",
            "logo": "https://utfs.io/f/txXKmXW6aEb8XoHIV4a9EQr5A7M6kZeuFyciCDqzg1nIBRaP",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+63 962-753-3915",
              "contactType": "Customer Service",
              "email": "partnerships@helmetprosolutions.com",
              "areaServed": "PH",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Agoho St. Phase 2 Central, Camella Springville, Brgy. Molino 3",
              "addressLocality": "Bacoor",
              "addressRegion": "Cavite",
              "addressCountry": "PH"
            },
            "sameAs": [
            "https://www.facebook.com/helmetprosolutions ",
            "https://www.instagram.com/helmetpro_vendo"
            ]
          }
        }),
      }
    ]
  }
});
</script>

<style scoped>
.contact-us-container {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1.5rem;  
  background-color: #f8fafc; /* Light gray background */
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.map-container {
  border-radius: 0.5rem;
  overflow: hidden;
}
.map-container iframe {
  height: 50vh; /* Adjust this value to fit your design */
}
</style>
