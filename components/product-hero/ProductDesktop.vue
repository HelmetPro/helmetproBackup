<template>
  
  <div class="flex bg-gradient-to-r from-blue-300 to-teal-100 text-gray-700 shadow-2xl">
    <!-- Thumbnail Slider on the Left -->

    <div class="flex p-5 bg-slate-300 max-h-[800px]">
      <div class="relative w-1/12 h-auto overflow-hidden p-2 bg-white">
        <div class="bg-slate-200">
          <!-- Up Button -->
          <div class="flex justify-center mb-2">
            <button
              @click="scrollUp"
              class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
              :disabled="thumbnailStartIndex === 0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                <path d="m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z" />
              </svg>
            </button>
          </div>

          <!-- Thumbnail List -->
          <div class="flex flex-col gap-4 h-[650px] overflow-y-auto">
            <div
              v-for="(media, index) in visibleThumbnails"
              :key="index"
              @mouseover="handleThumbnailHover(index)"
              class="cursor-pointer h-auto p-2 relative rounded-md overflow-hidden transition-all duration-200 hover:border-2 hover:border-black"
            >
              <template v-if="isVideo(media.src)">
                <NuxtImg :src="media.poster" alt="Video Thumbnail" class="w-32 h-auto  rounded-md object-contain " loading="lazy"/>
              </template>
              <template v-else>
                <NuxtImg :src="media.src" alt="Image Thumbnail" class="w-32 h-auto rounded-md object-contain " loading="lazy"/>
              </template>
            </div>
          </div>

          <!-- Down Button -->
          <div class="flex justify-center mt-2">
            <button
              @click="scrollDown"
              class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
              :disabled="thumbnailStartIndex + 4 >= mediaList.length"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Slider Display -->
      <div class="relative w-3/4 overflow-hidden bg-black h-auto">
        <div
          class="flex transition-transform duration-700 ease-in-out" 
          :style="`transform: translateX(-${currentIndex * 100}%);`"
        >
          <div
            v-for="(media, index) in mediaList"
            :key="index"
            class="w-full flex-shrink-0"
          >
            <template v-if="isVideo(media.src)">
              <video
                ref="videos"
                controls
                class="w-full max-h-[700px] my-10 object-contain rounded-lg bg-black"
                :src="media.src"
                @error="handleVideoError"
              />
            </template>
            <template v-else>
              <NuxtImg
                :src="media.src"
                alt="Slide"
                class="w-full max-h-[700px] my-10 object-contain rounded-lg bg-black"
                loading="lazy"
              />
            </template>
          </div>
        </div>


        <!-- Navigation Buttons -->
        <button
          @click="prevSlide"
          class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
        >
          &#10094;
        </button>
        <button
          @click="nextSlide"
          class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
        >
          &#10095;
        </button>
      </div>

      <div class="w-1/4 overflow-hidden bg-white h-auto">
        <div class="p-5">
          <div class="flex flex-col justify-center">
           
            <h1 class="leading-snug text-blue-900 text-xl lg:text-5xl title-font font-bold mt-10 mb-14">Helmet Cleaning Vending Machine</h1>
            <h2 class=" title-font  tracking-widest uppercase mb-2">Clean and Fresh</h2>
            <div class="flex items-center mb-4">
              <div class="flex items-center">
                <svg v-for="n in 5" :key="n" fill="currentColor" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" class="w-5 h-5 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <span class="text-gray-600 ml-3">215 Reviews</span>
            </div>

            <!-- Product Description -->
            <p class="leading-relaxed mb-6 text-gray-700 text-sm lg:text-lg">
              HelmetPro is the ultimate solution for helmet hygiene and care. Keep your helmet fresh and sanitized with our Automatic Intelligent Helmet Cleaning Machine. It offers fast and efficient dry cleaning, thorough disinfection, and effective deodorization, all in one sleek, user-friendly machine. Designed for convenience, this is the ultimate solution for helmet hygiene and care.
            </p>
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Array of media files with images and videos, with poster thumbnails for videos
const mediaList = ref([
  { src: '/images/machine1.png' },
  { src: '/images/machine2.png' },
  { src: '/images/machine3.png' },
  { src: '/images/machine4.png' },
  { src: '/images/machine5.png' },
  { src: '/images/machine6.png' },
  { src: '/images/machine7.png' },
  { src: '/video.mp4', poster: '/images/thumbnailvideo2.png' },
]);

const currentIndex = ref(0);
const thumbnailStartIndex = ref(0);
const thumbnailsPerView = 5;

// Compute visible thumbnails based on the current start index
const visibleThumbnails = computed(() => {
  return mediaList.value.slice(thumbnailStartIndex.value, thumbnailStartIndex.value + thumbnailsPerView);
});

// Function to determine if the media source is a video
const isVideo = (src) => {
  return src.endsWith('.mp4');
};

// Scroll Up Function
const scrollUp = () => {
  if (thumbnailStartIndex.value > 0) {
    thumbnailStartIndex.value -= 1; // Scroll up by one thumbnail
  }
};

// Scroll Down Function
const scrollDown = () => {
  if (thumbnailStartIndex.value + thumbnailsPerView < mediaList.value.length) {
    thumbnailStartIndex.value += 1; // Scroll down by one thumbnail
  }
};

// Previous Slide Function
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

// Next Slide Function
const nextSlide = () => {
  if (currentIndex.value < mediaList.value.length - 1) {
    currentIndex.value += 1;
  }
};

// Handle Thumbnail Hover to Scroll
const handleThumbnailHover = (index) => {
  // Update the current index to display the corresponding media
  currentIndex.value = thumbnailStartIndex.value + index;

  // Scroll Up or Down based on the hovered thumbnail index
  if (index === 0 && thumbnailStartIndex.value > 0) {
    scrollUp(); // Scroll down if hovering over the first thumbnail
  } else if (index === 4 && thumbnailStartIndex.value + thumbnailsPerView < mediaList.value.length) {
    scrollDown(); // Scroll up if hovering over the fifth thumbnail
  }
};

// Handle Video Error
const handleVideoError = (event) => {
  console.error("Video failed to load:", event.target.src);
};



// Pause videos on scroll
const handleScroll = () => {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Transition for smooth sliding effect */
.transition-transform {
  transition: transform 0.7s ease-in-out; /* Smooth sliding effect */
}
</style>
