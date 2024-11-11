<template>
  <div>
    <div class="hidden lg:flex flex-col text-center w-full mx-auto px-4 bg-gradient-to-r from-blue-300 to-teal-100 md:bg-gradient-to-r md:from-blue-300 md:to-teal-100 pb-52 lg:pb-20">
      <div class="p-5">
        <h1 class="lg:text-5xl font-bold text-white mt-10 md:text-indigo-600 mb-2">Walkthrough</h1>
        <h2 id="how-it-works" class="text-black text-center">How Our Helmet Cleaning Vending Machine Works</h2>
        <p class="info-text">
          Discover the innovative features and functionalities of our Helmet Cleaning Vending Machine. 
        </p>
      </div>
      <div class="hidden lg:flex flex-col items-center justify-center py-2 lg:min-h-[80vh]">
        <div class="relative w-full max-w-xl md:max-w-3xl lg:max-w-7xl xl:max-w-8xl border-8 border-white rounded-lg shadow-lg overflow-hidden">
          <video
            src="https://utfs.io/f/txXKmXW6aEb8KQel80RXNn0EGXtSxRZ4WkULbiwYf3cVAOzo"
            :controls="controls"
            :autoplay="autoplay"
            :loop="loop"
            :muted="muted"
            class="w-full h-full object-cover"
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
        <h2 id="how-it-works" class="text-black text-center text-xl lg:text-3xl">How Our Helmet Cleaning Vending Machine Works</h2>
        <p class="info-text">
          Discover the innovative features and functionalities of our Helmet Cleaning Vending Machine. 
        </p>
      </div>
      <div id="how-it-works" class="flex flex-col items-center justify-center">
        <div class="relative w-full h-[500px] border-2 rounded-lg shadow-lg overflow-hidden">
          <video
            src="https://utfs.io/f/txXKmXW6aEb8KQel80RXNn0EGXtSxRZ4WkULbiwYf3cVAOzo"
            :controls="controls"
            :autoplay="autoplay"
            :loop="loop"
            :muted="muted"
            class="w-full h-full object-contain bg-black"
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
// Define page metadata


// Define the props for the video component
const props = defineProps({
  controls: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Additional scoped styles can go here if needed */
</style>
