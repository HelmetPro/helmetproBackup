<template>
  <section ref="sectionRef" class="bg-gradient-to-r from-blue-300 to-teal-100 pt-20">
    <div class="container mx-auto flex flex-col items-center text-center sm:px-6">
      <div class="rounded-lg shadow-2xl text-center bg-white mb-10 p-5">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-4 sm:mb-6">Motorcycle Usage in the Philippines</h1>
        <p class="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
          As of 2024, there are approximately registered motorcycles in the Philippines. 
        </p>
        <p ref="achievementCounter1" class="font-bold text-indigo-600 text-4xl sm:text-5xl p-5">
          0
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6">
          <div class="px-4 sm:px-10">
            <h3 class="text-indigo-600 text-lg sm:text-xl">Safety Commitment</h3>
            <p class="text-sm sm:text-md lg:text-lg mb-6 sm:mb-10">
              Most riders are dedicated to safety, proudly donning helmets on every journey. However, many face the challenge of maintaining helmet hygiene and combating unpleasant odors.
            </p>
          </div>
          <div class="px-4 sm:px-10">
            <h3 class="text-indigo-600 text-lg sm:text-xl">The Challenge</h3>
            <p class="text-sm sm:text-md lg:text-lg mb-6 sm:mb-10">
              Helmets can accumulate dirt, sweat, and odor over time, making it essential for riders to have a reliable cleaning solution. This is where HelmetPro comes in.
            </p>
          </div>
        </div>
      </div>
      <div class="relative w-full mb-8">
        <NuxtImg src="https://utfs.io/f/txXKmXW6aEb81Z49qb2tpNoBzsFYHn4jrO0gE6hbRq2wIcaT" alt="Motorcycles in the Philippines" class="w-full h-[500px] lg:h-auto  shadow-lg" loading="lazy"/>
        <div class="absolute inset-0 bg-black opacity-60 "></div>
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-6">
          <h1 class="text-2xl sm:text-3xl lg:text-6xl font-extrabold mb-6 sm:mb-14">Your Business Opportunity</h1>
          <p class="text-sm sm:text-md lg:text-lg mb-4 sm:mb-6 px-2 sm:px-10 md:px-96 text-center">
            <span class="text-lg sm:text-2xl lg:text-3xl font-bold">Imagine the impact on your business by offering riders a safe and convenient way to clean their helmets!</span>
          </p>
          <p class="text-sm sm:text-md lg:text-lg mb-6 px-2 sm:px-10 md:px-96 text-center">
            Our innovative vending machines cater to a growing demand, ensuring that every helmet is sanitized, fresh, and ready for the next ride.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimations } from '@/composables/useAnimations';

const motorcycleCount1 = ref(null);
const achievementCounter1 = ref(null);
const sectionRef = ref(null);
const { setupAnimations } = useAnimations();

// Function to animate number
const animateNumber = (element, end, duration = 1000) => {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const easedProgress = progress * progress * (3 - 2 * progress);
    element.textContent = Math.floor(easedProgress * end).toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};

setupAnimations([
  {
    element: sectionRef,
    customFn: () => {
      animateNumber(achievementCounter1.value, 8470000, 2000);
    }
  },
]);
</script>

<style scoped>
h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

button {
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}

strong {
  color: #ffffff;
}
</style>
