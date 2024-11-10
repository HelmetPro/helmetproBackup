<template>
  <div>
    <section
      id="productfeatures-section"
      class="relative overflow-hidden bg-gradient-to-r from-blue-300 to-teal-100 text-gray-700 "
    >
      <div class="h-1/2">
        <!-- Slider Images -->
        <div
          class="hidden lg:flex slider transition-transform duration-500"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          @touchstart="startTouch"
          @touchmove="moveTouch"
          @touchend="endTouch"
        >
          <NuxtImg src="/images/1.png" alt="Helmet Fresh" class="w-full flex-shrink-0" loading="lazy"/>
          <NuxtImg src="/images/2.png" alt="Helmet Fresh Detail" class="w-full flex-shrink-0" loading="lazy"/>
          <NuxtImg src="/images/3.png" alt="Helmet Fresh Application" class="w-full flex-shrink-0" loading="lazy"/>
          <NuxtImg src="/images/4.png" alt="Helmet Fresh Detail" class="w-full flex-shrink-0" loading="lazy"/>
          <NuxtImg src="/images/5.png" alt="Helmet Fresh Application" class="w-full flex-shrink-0" loading="lazy"/>
        </div>

        <!-- Mobile view -->
        <div
          class="slider flex lg:hidden transition-transform duration-500"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          @touchstart="startTouch"
          @touchmove="moveTouch"
          @touchend="endTouch"
        >
          <NuxtImg src="/images/mobileview/feature2.png" alt="Helmet Fresh Detail" class="w-full" loading="lazy"/>
          <NuxtImg src="/images/mobileview/feature3.png" alt="Helmet Fresh Application" class="w-full" loading="lazy"/>
          <NuxtImg src="/images/mobileview/feature4.png" alt="Helmet Fresh Detail" class="w-full" loading="lazy"/>
          <NuxtImg src="/images/mobileview/feature5.png" alt="Helmet Fresh Application" class="w-full" loading="lazy"/>
          <NuxtImg src="/images/mobileview/feature6.png" alt="Helmet Fresh Application" class="w-full" loading="lazy"/>
        </div>

        <!-- Slider Controls -->
        <button
          @click="prevSlide"
          aria-label="Previous slide"
          class="absolute left-2 top-1/2 bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg text-lg font-bold hover:bg-blue-700 transition duration-300 opacity-90 hover:opacity-100 "
        >
          <span class="material-icons">chevron_left</span>
        </button>
        <button
          @click="nextSlide"
          aria-label="Next slide"
          class="absolute right-2 top-1/2 bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg text-lg font-bold hover:bg-blue-700 transition duration-300 opacity-90 hover:opacity-100 "
        >
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentSlide = ref(0);
const totalSlides = 5; // Adjusted to include mobile images
let autoSlideInterval;

// Touch event variables
let startX = 0;
let endX = 0;

// Navigate to the previous slide
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

// Navigate to the next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

// Auto slide function
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

// Clear interval before component is unmounted
onBeforeUnmount(() => {
  clearInterval(autoSlideInterval);
});

// Start auto slide when component is mounted
onMounted(() => {
  startAutoSlide();
});

// Touch event handlers
const startTouch = (event) => {
  startX = event.touches[0].clientX;
};

const moveTouch = (event) => {
  endX = event.touches[0].clientX;
};

const endTouch = () => {
  if (startX - endX > 50) {
    // Swiped left
    nextSlide();
  } else if (endX - startX > 50) {
    // Swiped right
    prevSlide();
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
  height: auto;
}

button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.1);
}

/* Additional styles for better responsiveness */
@media (max-width: 640px) {
  button {
    px: 3;
    py: 1.5;
  }
}

@media (min-width: 640px) {
  button {
    px: 4;
    py: 2;
  }
}
</style>
