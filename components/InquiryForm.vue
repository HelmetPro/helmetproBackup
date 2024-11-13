  <template>
  <section class="bg-gradient-to-r from-blue-300 to-teal-100 pt-10">
    <div class="mx-auto flex items-center justify-center ">
      <!-- Desktop view -->
      <div class="lg:h-[300px] relative w-full flex">
        <NuxtImg src="https://utfs.io/f/txXKmXW6aEb8fy1qQWIsdGCOeqaMtfRhVBpQvY7UJXEm3HSj" alt="Partnership" class="w-full h-auto object-cover" loading="lazy"/>
        
        <!-- Color Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

        <div class="absolute inset-0 flex flex-col items-center justify-center text-center gap-6 px-4 ">
          <h1 class="lg:w-1/2 text-2xl lg:text-5xl lg:mb-4 text-white  rounded-2xl font-extrabold">
            Got Questions?
          </h1>
          <div class="rounded-2xl flex text-center">
            <p class="text-white lg:mb-6 text-lg">
              We're here to help! Click the button below to send us your inquiries via our Google Form.
            </p>
          </div>
        <!-- 
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform?usp=send_form"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          Inquire Now
        </a> -->
        <!-- <button
          @click="isModalOpen = true"
          class="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
        >
          Inquire Now
        </button> -->
          <NuxtLink 
            to="/contactus" 
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
      <InquiryModal
      v-if="isModalOpen"
      @close="isModalOpen = false"
    />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import InquiryModal from "../components/FormInquiry.vue";

const isModalOpen = ref(false);
</script>

<style scoped>
</style>
