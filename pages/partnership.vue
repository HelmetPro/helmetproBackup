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

    <section class="relative bg-cover bg-center text-black py-16" style="background-image: url('https://utfs.io/f/txXKmXW6aEb86nueOakOJkcAUtmhrYT5Z7veHw2VjExaof0q');">
      <div class="absolute inset-0 bg-black opacity-70"></div> 
      <div class="relative z-10 text-center">
        <h1 class="text-5xl lg:text-6xl font-extrabold text-indigo-600 mb-6">Join Our Distributor Network</h1>
        <p class="text-lg text-white mb-5">Unlock your potential and empower your future with our guidance and support as a distributor.</p>
        <!-- <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSceprgT-LisDTR-giEVZzgx9q2w-JLKnGDMZ3If8sxXXk4O4w/viewform"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
      >
      Become a Distributor
      </a>   -->
      <button
                @click="isModalOpenFormAppointment = true"
                class="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-300"
              >
              Become a Distributor
              </button>
      </div>
    </section>
    <section class="bg-gradient-to-r from-blue-300 to-teal-100 text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap items-center justify-between mx-auto">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-sm title-font text-indigo-600 tracking-widest uppercase mb-1">More Than Just Vending Machines</h2>
          <h1 class="text-gray-900 text-4xl title-font font-semibold mb-4">We’re Your Partner in Business Growth</h1>
          <p class="w-full text-lg text-gray-800 mx-auto font-medium mb-6">
            Our commitment goes beyond supplying state-of-the-art helmet cleaning vending machines. We’re here to support your business every step of the way. From guidance and maintenance to addressing your evolving needs, our partnership ensures
            <br />
            <span class="text-indigo-600 text-2xl font-extrabold">your long-term success.</span>
          </p>

          <div class="flex">
            <!-- <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScPH78it2IObDmevPColeGFe16743x8IzgvmQNGKGxYfX2wDQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Book Now
            </a> -->
            <button
                @click="isModalOpenFormAppointment = true"
                class="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-300"
              >
                Book an Appointment
              </button>
          </div>
        </div>
        <NuxtImg alt="Partnership" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg shadow-lg" src="https://utfs.io/f/txXKmXW6aEb8oVlrcJPsTc3VaUluMngjBrm6XEJwQ5PI9bxZ" loading="lazy"/>
      </div>
    </div>
  </section>
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
    <FormAppointmentModal
      v-if="isModalOpenFormAppointment"
      @close="isModalOpenFormAppointment = false"
    />
    <FormDistributorModal
      v-if="isModalOpenFormDistributor"
      @close="isModalOpenFormDistributor = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'
import FormAppointmentModal from "../components/FormAppointment.vue";
import FormDistributorModal from "../components/FormDistributor.vue";
const isModalOpenFormAppointment = ref(false);
const isModalOpenFormDistributor = ref(false);

const route = useRoute()

useHead({
  title: 'Join HelmetPro: Revolutionizing Helmet Hygiene',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: route.name === 'partnership'
        ? 'Discover the exciting partnership opportunities with HelmetPro and how you can join us in transforming helmet hygiene solutions.'
        : 'Learn how you can become a part of HelmetPro’s journey in revolutionizing helmet hygiene with innovative vending machines.',
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'HelmetPro,Helmet Cleaning vending machine partnership opportunities,Helmet Cleaning Reseller, helmet cleaning business, join helmetpro, helmet hygiene solutions, automated helmet cleaning, vending machine partnership' 
    }
  ],
})


definePageMeta({
  layout: 'custom-layout',
  name: 'JOIN US',
  title: 'Join HelmetPro: Revolutionizing Helmet Hygiene',
  head: {
    middleware: 'canonical',

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
          "logo": "https://utfs.io/f/txXKmXW6aEb8XoHIV4a9EQr5A7M6kZeuFyciCDqzg1nIBRaP",
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
    icon: 'https://utfs.io/f/txXKmXW6aEb85UqxBF1tfJ6kxXjH8hb2I7SpcqaDEZR3PzVF', 
  },
  {
    title: 'Marketing Support',
    description: 'Access to marketing resources and materials.',
    icon: 'https://utfs.io/f/txXKmXW6aEb8Iahh4exKSrAUb9D5fERNjXTZunqmiy0PpVt7', 
  },
  {
    title: 'Exclusive Products',
    description: 'Be the first to offer our latest products.',
    icon: 'https://utfs.io/f/txXKmXW6aEb8pJMj2JDtvW3s5owuSGP7qeH49crZfE08IaXK', 
  },
  {
    title: 'Flexible Hours',
    description: 'Work at your own pace and schedule.',
    icon: 'https://utfs.io/f/txXKmXW6aEb84Rx7TUmZ0DBO2KRxnm5t3i9uyaYLbGSCeV8f', 
  },
]);

const images = ref([
  { src: 'https://utfs.io/f/txXKmXW6aEb8bEnc2M7Or9xj5E7ZDSuNWKeaAFwzvVt2mhdR', alt: 'Image 1 Description' },
  { src: 'https://utfs.io/f/txXKmXW6aEb8caz0TLlm0cp329CiRFfTQoe8Iwa7rMAE5Xxj', alt: 'Image 2 Description' },
  { src: 'https://utfs.io/f/txXKmXW6aEb8OPBjiXRPI0NZWTJ5GnV8L3DehcdsgBXxuAtv', alt: 'Image 3 Description' },
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
