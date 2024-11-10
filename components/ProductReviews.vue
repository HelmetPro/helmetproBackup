<template>
  <div>
    <section class="text-gray-600 body-font bg-gradient-to-r from-blue-300 to-teal-100">
      <div class="px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-10 2xl:mb-20">
          <h1 class="text-5xl font-bold text-indigo-600 mb-">Testimonials</h1>
          <p class="text-black text-2xl sm:text-3xl md:text-4xl">What our happy users say!</p>
        </div>

        <!-- Splide Slider -->
        <div id="testimonial-slider" class="splide" aria-label="Testimonials">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <div class="p-8 border-2 rounded-2xl bg-white shadow-lg transform transition duration-500 hover:shadow-2xl w-full h-auto">
                  <div class="h-full text-center">
                    <p class=" text-gray-700 italic text-xs lg:text-xl">
                      "Nagtry ako ng ibang helmet cleaning machine dati, pero ang daming naging problema—mahina yung paglilinis at parang hindi matibay. Pero nung ni-recommend ng friend kong Mechanical Engineer itong HelmetPro, sobrang iba. Matibay, efficient, at ang dali pa ng operations dahil sa smart features. Super sulit talaga, mas maganda compared sa dati kong gamit!"
                    </p>
                    <span class="inline-block h-1 w-12 rounded bg-indigo-500 mt-6 mb-4"></span>

                    <div class="flex items-center justify-center space-x-6">
                      <!-- Larger Image -->
                      <NuxtImg alt="testimonial" class="w-28 h-28 object-cover object-center rounded-full border-4 border-indigo-500 shadow-lg" src="/images/profile.png" loading="lazy"/>
                      
                      <div class="text-left">
                        <!-- Name and Occupation -->
                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg sm:text-xl md:text-2xl">D*****a</h2>
                        <p class="text-gray-500 text-xs font-bold md:text-lg">Business Woman</p>
                        <!-- Mobile View -->
                        <div class="2xl:hidden">
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Quality</i>
                          <span class="text-yellow-500 text-sm lg:text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Appearance</i>
                          <span class="text-yellow-500 text-sm lg:text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-slate-300 text-sm lg:text-2xl">★</span>
                          
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Suitability</i>
                          <span class="text-yellow-500 text-sm lg:text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                        </div>
                      </div>
                      </div>

                      <!-- Ratings Section -->
                      <div class="ml-8 hidden 2xl:block">
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Quality</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Appearance</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-slate-300 text-2xl">★</span>
                          
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Suitability</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="p-8 border-2 rounded-xl bg-white shadow-lg transform transition duration-500 hover:shadow-2xl w-full h-auto">
                  <div class="h-full text-center">
                    <p class=" text-gray-700 italic text-xs lg:text-xl">
                      "Maayos yung machine, at napaka informative at mababait yung support nila mula sa simula—hands-on sa setup at laging andyan kapag may kailangan. Highly recommend sa mga naghahanap ng maaasahang business partner."
                    </p>
                    <span class="inline-block h-1 w-12 rounded bg-indigo-500 mt-6 mb-4"></span>

                    <div class="flex items-center justify-center space-x-6">
                      <!-- Larger Image -->
                      <NuxtImg alt="testimonial" class="w-28 h-28  object-cover object-center rounded-full border-4 border-indigo-500 shadow-lg" src="/images/profile2.png" loading="lazy"/>
                      
                      <div class="text-left">
                        <!-- Name and Occupation -->
                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">M*rc****a</h2>
                        <p class="text-gray-500">Business Owner</p>
                        <!-- Mobile View -->
                        <div class="2xl:hidden">
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Quality</i>
                          <span class="text-yellow-500 text-sm lg:text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Appearance</i>
                          <span class="text-yellow-500 text-sm lg:text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Suitability</i>
                          <span class="text-yellow-500 text-sm lg:text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-yellow-500 text-sm lg:text-2xl">★</span>
                          <span class="text-slate-300 text-sm lg:text-2xl">★</span>
                        </div>
                      </div>
                      </div>

                      <!-- Ratings Section -->
                      <div class="ml-8 hidden 2xl:block">
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Quality</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Appearance</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Suitability</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-slate-300 text-2xl">★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>



              <li class="splide__slide">
                <div class="p-8 border-2 rounded-xl bg-white shadow-lg transform transition duration-500 hover:shadow-2xl w-full h-auto">
                  <div class="h-full text-center">
                    <p class=" text-gray-700 italic text-xs lg:text-xl">
                      "Ang ganda ng experience namin sa HelmetPro. Matibay at maayos yung machine, tapos sobrang hands-on sila sa buong proseso—mula setup hanggang sa support. Laging may tugon sa tuwing may tanong o concern kami. Kung naghahanap kayo ng maasahang business partner, highly recommended sila."
                      </p>
                    <span class="inline-block h-1 w-12 rounded bg-indigo-500 mt-6 mb-4"></span>

                    <div class="flex items-center justify-center space-x-6">
                      <!-- Larger Image -->
                      <NuxtImg alt="testimonial" class="w-28 h-28 object-cover object-center rounded-full border-4 border-indigo-500 shadow-lg" src="/images/profile3.png" loading="lazy"/>
                      
                      <div class="text-left">
                        <!-- Name and Occupation -->
                        <h2 class="text-gray-900 font-bold title-font tracking-wider text-lg">Sh****</h2>
                        <p class="text-gray-500">BPO Employee</p>
                        <!-- Mobile View -->
                        <div class="2xl:hidden">
                          <div class="flex mb-1 items-center">
                            <i class="mt-2">Quality</i>
                            <span class="text-yellow-500 text-sm xl:text-2xl ml-2">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-slate-300 text-sm xl:text-2xl">★</span>
                          </div>
                          <div class="flex mb-1 items-center">
                            <i class="mt-2">Appearance</i>
                            <span class="text-yellow-500 text-sm xl:text-2xl ml-2">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                          </div>
                          <div class="flex mb-1 items-center">
                            <i class="mt-2">Suitability</i>
                            <span class="text-yellow-500 text-sm xl:text-2xl ml-2">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-yellow-500 text-sm xl:text-2xl">★</span>
                            <span class="text-slate-300 text-sm xl:text-2xl">★</span>
                          </div>
                        </div>
                      </div>

                      <!-- Desktop View Section -->
                      <div class="ml-8 hidden 2xl:block">
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Quality</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-slate-300 text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Appearance</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                        </div>
                        <div class="flex mb-1 items-center">
                          <i class="mt-2">Suitability</i>
                          <span class="text-yellow-500 text-2xl ml-2">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-yellow-500 text-2xl">★</span>
                          <span class="text-slate-300 text-2xl">★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Splide from '@splidejs/splide';

onMounted(() => {
  new Splide('#testimonial-slider', {
    type: 'loop',
    perPage: 1, // Adjusted to 1 for mobile responsiveness
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 2,
      },
      1440: {
        perPage: 2,
      },
      1921: {
        perPage: 3,
      },
    },
    gap: '1.5rem',
    autoplay: true,
    interval: 7000,
    arrows: true,
    pagination: true,
  }).mount();
});
</script>

<style scoped>
/* Adding hover effects and styling to the testimonial slides */
.splide__slide {
  transition: transform 0.3s ease-in-out;
}

.splide__slide:hover {
  transform: scale(1.05);
}

.splide__slide p {
  font-size: 0.9rem; /* Adjust as needed */
}
</style>
