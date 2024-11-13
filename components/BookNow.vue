<template>
  <div>
    <section
      id="product1-section"
      class="bg-gradient-to-r from-blue-300 to-teal-100 text-white shadow-lg rounded-md relative"
    >
      <div
        class="mx-auto flex justify-center items-center"
        style="background-image: url('https://utfs.io/f/txXKmXW6aEb8a5EZimQUWzYPrEl1Q67p4My3VRAmtdnsgINv'); background-size: cover; background-position: center;"
      >
        <!-- Color overlay -->
        <div class="absolute inset-0 bg-black opacity-70 rounded-md"></div>

        <div class="w-full flex flex-wrap rounded-lg shadow-lg overflow-hidden relative z-10">
          <!-- Product Details Section -->
          <div class="lg:w-2/4 w-full p-6 lg:p-16 flex flex-col lg:mt-52">
            <h2 class="text-sm title-font text-white tracking-widest mb-2">This is your chance to secure your spot</h2>
            <h2 class="text-2xl lg:text-4xl font-extrabold mb-4 text-blue-700">Ready to Book?</h2>
            <p class="text-base lg:text-lg text-white mx-auto font-semibold mb-6 py-2">
              Take action today for a brighter tomorrow! <span class="font-bold text-indigo-700">Book your appointment now</span> and unlock the benefits of our service.
            </p>
            <p class="text-base lg:text-lg text-white mx-auto font-semibold mb-6">
              Join a community of satisfied customers who have transformed their businesses with our state-of-the-art helmet cleaning vending machines. Don't miss out on this opportunity to elevate your experience!
            </p>
            <p class="text-base lg:text-lg text-white mx-auto font-semibold mb-6">
              Secure your spot today to enjoy exclusive offers tailored for your success. Your journey towards a cleaner, more efficient operation starts with just one click!
            </p>
            <div>
              <!-- <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScPH78it2IObDmevPColeGFe16743x8IzgvmQNGKGxYfX2wDQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
              >
                Book Now
              </a> -->
              <button
                @click="isModalOpen = true"
                class="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-300"
              >
                Book an Appointment
              </button>
            </div>
          </div>


          <!-- Main Slider Section -->
          <div class="lg:w-2/4 w-full flex flex-col items-center shadow-md justify-center p-4 lg:p-8">
            <div class="w-full rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <NuxtImg
                src="https://utfs.io/f/txXKmXW6aEb8PJzLkt76lR1PiHk73G6S29LbdaweDFNOmjcB"
                alt="Helmet Clean and Fresh Machine"
                class="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <FormAppointmentModal
      v-if="isModalOpen"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FormAppointmentModal from "../components/FormAppointment.vue";

const isModalOpen = ref(false);
</script>

<style scoped>
/* Additional styles to enhance the design */
section {
  border-radius: 12px;
}
</style>
