<template>
  <div>
    <section id="product1-section" class="bg-gradient-to-r from-blue-300 to-teal-100 text-gray-700 py-10 shadow-2xl">
      <div class="flex justify-center items-center ">
        <div class="lg:w-4/5 w-full flex flex-wrap bg-white rounded-3xl shadow-2xl overflow-hidden">
          <!-- Main Slider Section -->
          <div class="lg:w-2/4 w-full flex flex-col items-center justify-center p-2 bg-gray-50">
            <div id="main-slider" class="splide w-full rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-h-[500px]">
              <div class="splide__track">
                <ul class="splide__list">
                  <li v-for="(media, index) in mediaItems" :key="index" class="splide__slide">
                    <template v-if="isVideo(media.src)">
                      <video
                        controls
                        preload="metadata"
                        class="w-full max-h-[500px] py-32 object-contain rounded-lg bg-black"
                        :src="media.src"
                        type="video/mp4"
                        @error="handleVideoError"
                      >
                        Your browser does not support the video tag.
                      </video>

                    </template>
                    <template v-else>
                      <NuxtImg
                        :src="media.src"
                        alt="Slide"
                        class="w-full max-h-[500px] my-10 object-contain rounded-lg bg-black"
                        loading="lazy"
                      />
                    </template>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Thumbnail Slider Section -->
            <div id="thumbnail-slider" class="splide mt-4 w-full">
              <div class="splide__track">
                <ul class="splide__list">
                  <li v-for="(media, index) in mediaItems" :key="index" class="splide__slide">
                    <template v-if="media.type === 'image'">
                      <NuxtImg :src="media.src" alt="Thumbnail" class="w-20 h-20 object-cover rounded-lg cursor-pointer hover:shadow-lg transition duration-300" loading="lazy"/>
                    </template>
                    <template v-else-if="media.type === 'video'">
                      <NuxtImg :src="media.thumbnail" alt="Video Thumbnail" class="w-20 h-20 object-cover rounded-lg cursor-pointer hover:shadow-lg transition duration-300" loading="lazy"/>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Product Details Section -->
          <div class="lg:w-2/4 w-full p-10 bg-white flex flex-col lg:mt-20 shadow-lg hover:shadow-2xl rounded-3xl transition-all duration-300">
            <div class="flex flex-col justify-center">
              <h2 class="text-sm title-font text-indigo-600 tracking-widest uppercase mb-2">Clean and Fresh</h2>
              <h1 class="leading-snug text-gray-900 text-xl lg:text-5xl title-font font-bold mb-5">Helmet Cleaning Vending Machine</h1>

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
              <div class="">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Splide from '@splidejs/splide';



const mediaItems = [
  { type: 'image', src: 'https://utfs.io/f/txXKmXW6aEb8buTxLy7Or9xj5E7ZDSuNWKeaAFwzvVt2mhdR' },
  { type: 'image', src: 'https://utfs.io/f/txXKmXW6aEb87D39ogvNJZsh50YKV3ufoDizx26ROAtqEjcg' },
  { type: 'image', src: 'https://utfs.io/f/txXKmXW6aEb85huVut1tfJ6kxXjH8hb2I7SpcqaDEZR3PzVF' },
  { type: 'image', src: 'https://utfs.io/f/txXKmXW6aEb8QZ5Lw9yHAEPL7YgWqRZ6OxFBNo1eiXVjKJv8' },
  { type: 'image', src: 'https://utfs.io/f/txXKmXW6aEb8xddFqhmrlgFz0uoShVUIp6njet8vPdMTDywf' },
  { type: 'image', src: 'https://utfs.io/f/txXKmXW6aEb8c52U2ZWlm0cp329CiRFfTQoe8Iwa7rMAE5Xx' },
  { type: 'image', src: 'https://utfs.io/f/txXKmXW6aEb8jkAnbDcQseLHMGdXzShEm9I4Ub51Rgqy687T' },
  { type: 'video', src: 'https://utfs.io/f/txXKmXW6aEb80UE4hWGiJSnzPheAx3bCfl8HZUOtuIq0MwL2', thumbnail: 'https://utfs.io/f/txXKmXW6aEb8BT5NYl3iE9cNeP12iT4K5g7HMkBLaZyQbJDt' },
];

// Check if the slide is active
const isActive = (index) => {
  return index === (currentIndex.value || 0); // Get the currently active index
};


const isVideo = (src) => {
  return src.endsWith('.mp4'); // Change as needed for your media types
};

const currentIndex = ref(0);

onMounted(() => {
  const mainSlider = new Splide('#main-slider', { type: 'fade', pagination: false, arrows: false }).mount();
  const thumbnailSlider = new Splide('#thumbnail-slider', {
    fixedWidth: 80,
    fixedHeight: 80,
    gap: 8,
    isNavigation: true,
    focus: 'center',
    pagination: false,
    cover: true,
  }).mount();
  mainSlider.sync(thumbnailSlider);

  mainSlider.on('move', (newIndex) => {
    currentIndex.value = newIndex; // Update the active index
  });
});



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
.splide__slide img {
  border: 2px solid transparent;
  transition: transform 0.3s, border-color 0.3s;
}
.splide__slide.is-active img {
  border: 2px solid #4F46E5; /* Tailwind Indigo 500 */
  transform: scale(1.05);
}
</style>
