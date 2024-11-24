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
    <div class="flex flex-col justify-center items-center h-full">
      <!-- Heading -->
      <h1 class="leading-snug text-blue-900 text-xl lg:text-5xl title-font font-bold mt-10 mb-14 text-center">
        Helmet Cleaning Vending Machine
      </h1>

      <!-- Subheading -->
      <h2 class="title-font tracking-widest uppercase mb-2 text-center">
        Clean and Fresh
      </h2>

      <!-- Star Ratings -->
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
      <p class="leading-relaxed mb-6 text-gray-700 text-sm lg:text-lg text-center">
        HelmetPro is the ultimate solution for helmet hygiene and care. Keep your helmet fresh and sanitized with our Automatic Intelligent Helmet Cleaning Machine. It offers fast and efficient dry cleaning, thorough disinfection, and effective deodorization, all in one sleek, user-friendly machine. Designed for convenience, this is the ultimate solution for helmet hygiene and care.
      </p>

      <!-- Centered Buy Now Button -->
      <div class="flex justify-center items-center mt-8">
        <a 
          href="https://uzgcdn-nn.myshopify.com/products/helmet-cleaning-vending-machine-1" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-4 animate-bounce"
        >
          <svg 
            version="1.1" 
            id="Layer_1" 
            x="0px" y="0px" 
            viewBox="0 0 122.9 107.5" 
            class="text-white w-6 h-6 lg:w-8 lg:h-8 motion-safe:animate-pulse">
            <g>
              <path 
                d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z" 
                fill="currentColor"
              />
            </g>
          </svg>
          <span class="text-lg lg:text-xl">Buy Now</span>
        </a>
      </div>
      <span class="text-gray-400 text-xs font-semibold ml-3">Shop directly from our official Shopify store</span>
      <span class="text-gray-400 text-xs font-semibold ml-3">Enjoy a secure and convenient purchasing experience</span>

    </div>
  </div>
</div>

    </div>

          <InquiryModal
      v-if="isModalOpen"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import InquiryModal from "../components/FormInquiry.vue";

const isModalOpen = ref(false);
// Array of media files with images and videos, with poster thumbnails for videos
const mediaList = ref([
  { src: 'https://utfs.io/f/txXKmXW6aEb8buTxLy7Or9xj5E7ZDSuNWKeaAFwzvVt2mhdR' },
  { src: 'https://utfs.io/f/txXKmXW6aEb87D39ogvNJZsh50YKV3ufoDizx26ROAtqEjcg' },
  { src: 'https://utfs.io/f/txXKmXW6aEb85huVut1tfJ6kxXjH8hb2I7SpcqaDEZR3PzVF' },
  { src: 'https://utfs.io/f/txXKmXW6aEb8QZ5Lw9yHAEPL7YgWqRZ6OxFBNo1eiXVjKJv8' },
  { src: 'https://utfs.io/f/txXKmXW6aEb8xddFqhmrlgFz0uoShVUIp6njet8vPdMTDywf' },
  { src: 'https://utfs.io/f/txXKmXW6aEb8c52U2ZWlm0cp329CiRFfTQoe8Iwa7rMAE5Xx' },
  { src: 'https://utfs.io/f/txXKmXW6aEb8jkAnbDcQseLHMGdXzShEm9I4Ub51Rgqy687T' },
  { src: 'https://utfs.io/f/txXKmXW6aEb80UE4hWGiJSnzPheAx3bCfl8HZUOtuIq0MwL2', poster: 'https://utfs.io/f/txXKmXW6aEb8BT5NYl3iE9cNeP12iT4K5g7HMkBLaZyQbJDt' },
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
