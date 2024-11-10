<template>
  <section class="bg-gradient-to-r from-blue-300 to-teal-100">
    <div class="mx-auto flex flex-col items-center text-center">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-6">Partnering for Success</h1>
        <p class="text-lg lg:text-xl text-gray-700 mb-8 px-1 lg:px-96">
          Join us in creating innovative solutions for cleaner, safer helmets, while unlocking new opportunities for growth and collaboration in the motorcycle industry.
        </p>
    </div>
    <div class="mx-auto flex items-center justify-center min-h-screen relative overflow-hidden">

      <!-- Image -->
      <NuxtImg src="/images/partnership.jpg" alt="Partnership" class="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
      
      <!-- Color Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-70"></div>

      <div class="relative flex flex-col items-center justify-center text-center gap-6 mt-96 px-4 z-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl mb-4 text-white rounded-2xl font-extrabold px-2">
          More Than Just Vending Machines — We’re Your Partner in Business Growth
        </h1>
        <div class="rounded-2xl flex text-center">
          <p class="w-full md:w-3/4 lg:w-1/2 text-lg text-white mx-auto font-semibold mb-6">
            Our commitment goes beyond supplying state-of-the-art helmet cleaning vending machines. We’re here to support your business every step of the way. From guidance and maintenance to addressing your evolving needs, our partnership ensures <span class="text-indigo-500 text-xl md:text-3xl font-extrabold">your long-term success.</span>
          </p>
        </div>

        <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScPH78it2IObDmevPColeGFe16743x8IzgvmQNGKGxYfX2wDQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
              >
                Book Now
              </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Optional: Add any additional styles here */
</style>
