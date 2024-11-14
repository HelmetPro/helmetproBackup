<template>
  <div>
    <!-- <Chatbot />  -->
    <!-- Banner Section -->
    <section class="relative w-full bg-indigo-50 text-white md:h-screen overflow-hidden">
      <div class="custom-bg-image">
        <!-- Gradient Overlay for better text contrast -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

        <div class="container relative z-10 px-5 py-24 mx-auto flex flex-col items-center justify-center text-center">
          <NuxtImg
            class="w-1/2 lg:w-1/4 mb-8 object-cover rounded-3xl shadow-lg"
            alt="hero"
            src="https://utfs.io/f/txXKmXW6aEb81WtnRa2tpNoBzsFYHn4jrO0gE6hbRq2wIcaT"
            loading="lazy"
          />
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
            Discover the Future of Helmet Cleaning
          </h1>
          <p class="lg:w-2/3 mx-auto mb-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed drop-shadow-md">
            Helmet Pro provides a revolutionary vending machine experience for helmet cleaning, combining advanced technology with convenience for every rider.
          </p>
          <!-- <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
          >
            Learn More
          </a> -->
            <NuxtLink 
              to="/product" 
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
            Learn More
            </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Navigation Bar -->
    <section>
      <nav
        :class="['absolute top-0 left-0 w-full z-30 bg-gradient-to-r from-blue-800 to-teal-500 shadow-lg transition-transform duration-300', { '-translate-y-full': isHidden }]"
      >
        <div class="mx-auto flex justify-between items-center h-[70px] px-4 md:px-10">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <NuxtImg src="https://utfs.io/f/txXKmXW6aEb8l1xnnMTULFAz3OGEhrT62oYjiBmM5ebJtvDp" alt="Logo" class="h-12 md:h-16" loading="lazy" />
          </NuxtLink>

          <!-- Burger Menu for Mobile -->
          <div class="flex md:hidden">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Navigation Links for Desktop -->
          <div class="hidden md:flex space-x-8">
            <NuxtLink
              to="/"
              class="nav-link"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/product"
              class="nav-link"
              >Product</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="nav-link"
              >About Us</NuxtLink
            >
            <NuxtLink
              to="/our-service"
              class="nav-link"
              >Our Service</NuxtLink
            >
            <NuxtLink
              to="/contactus"
              class="nav-link"
              >Contact Us</NuxtLink
            >
            <NuxtLink
              to="/partnership"
              class="nav-link"
              >Join Us</NuxtLink
            >
            
            <div>
              <!-- Blog Dropdown -->
              <div class="relative group">
                <!-- Button with Arrow -->
                <button 
                  @click="toggleBlogDropdown"
                  class="text-white hover:text-gray-200  flex items-center nav-link"
                  aria-expanded="isBlogDropdownOpen"
                >
                  Learn More
                  <!-- Arrow icon -->
                  <svg 
                    :class="{'rotate-180': isBlogDropdownOpen}" 
                    class="ml-2 transition-transform duration-200" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    width="16" 
                    height="16"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Dropdown Menu (show on hover and click) -->
                <div 
                  v-show="isBlogDropdownOpen" 
                  @mouseenter="isBlogDropdownOpen = true"
                  @mouseleave="isBlogDropdownOpen = false"
                  class="absolute right-0 mt-2 w-48 bg-white text-blue-800 rounded-lg shadow-lg z-10 transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-hover:visible"
                >
                  <ul>
                    <li><NuxtLink to="/computation" class="dropdown-link">Computation</NuxtLink></li>
                    <li><NuxtLink to="/how-it-works" class="dropdown-link">How it Works</NuxtLink></li>
                    <li><NuxtLink to="/faqs" class="dropdown-link">FAQ's</NuxtLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

          <!-- Mobile Menu -->
          <div
            v-show="isMenuOpen"
            class="md:hidden bg-blue-500 text-white space-y-2 px-4 py-2 shadow-lg transition-all duration-300"
          >
            <NuxtLink
              to="/"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/product"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >Product</NuxtLink
            >
            <NuxtLink
              to="/about"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >About</NuxtLink
            >
            <NuxtLink
              to="/computation"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >Computation</NuxtLink
            >
            <NuxtLink
              to="/faqs"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >FAQ's</NuxtLink
            >
            <NuxtLink
              to="/contactus"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >Contact Us</NuxtLink
            >
            <NuxtLink
              to="/contactus"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >How it Works</NuxtLink
            >
            <NuxtLink
              to="/partnership"
              @click="toggleMenu"
              class="block text-white hover:bg-blue-700 py-2 rounded transition duration-300"
              >Join Us</NuxtLink
            >
  
          </div>
      </nav>
    </section>

    <div >
      <slot />
    </div>

<!-- Footer Section -->
<footer class="bg-gradient-to-r from-blue-800 to-teal-500 p-6 md:p-8 text-gray-800">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-start">
    
    <!-- Logo Section -->
    <div class="hidden lg:flex items-center flex-col mb-6 md:mb-0">
      <NuxtImg src="https://utfs.io/f/txXKmXW6aEb8l1xnnMTULFAz3OGEhrT62oYjiBmM5ebJtvDp" alt="Logo" class="h-20 md:h-[120px] lg:mr-4 mt-5" loading="lazy"/>
      <p class="text-white">&copy; {{ new Date().getFullYear() }} HELMETPRO. All rights reserved.</p>
    </div>

    <!-- Contact Section -->
    <div class="hidden lg:flex flex-col mb-6 md:mb-0 md:px-5">
      <h2 class="text-2xl lg:text-text-lg font-bold text-white mb-2">Contact Us</h2>
      <p class="mb-1 flex items-center py-2">
        <i class="fas fa-envelope text-white text-2xl mr-2"></i>
        <a href="mailto:partnerships@helmetprosolutions.com" class="underline text-white hover:text-white pl-4 ">partnerships@helmetprosolutions.com</a>
      </p>
      <p class="flex items-center py-2">
        <i class="fas fa-phone text-white text-2xl mr-2"></i>
        <span class="font-medium text-white pl-4">+63-962-753-3915</span>
      </p>
      <p class="flex items-center py-2">
        <i class="fas fa-map-marker-alt text-white text-4xl mb-2"></i>
        <span class="font-medium text-white pl-4"><NuxtLink to="https://maps.app.goo.gl/XQ56tYcUKCKjtw8d7" target="_blank" rel="noopener noreferrer">Camella Springville Molino 3 Bacoor</NuxtLink></span>
      </p>
    </div>

    <!-- Quick Links Section -->
    <div class="flex flex-col mb-10 md:mb-0 md:px-5">
      <h2 class="text-2xl lg:text-text-lg font-bold text-white mb-4">Quick Links</h2>
      <div class="grid grid-cols-2 gap-20 lg:gap-4">
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" @click="toggleMenu" class="link-item sm:text-sm">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product" @click="toggleMenu" class="link-item sm:text-sm">Product</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="toggleMenu" class="link-item sm:text-sm">About Us</NuxtLink>
          </li>
          
          <li>
            <NuxtLink to="/Computation" @click="toggleMenu" class="link-item sm:text-sm">Computation</NuxtLink>
          </li>
        </ul>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/how-it-works" @click="toggleMenu" class="link-item sm:text-sm">How it works</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contactUs" @click="toggleMenu" class="link-item sm:text-sm">Contact Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/partnership" @click="toggleMenu" class="link-item sm:text-sm">Join Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faqs" @click="toggleMenu" class="link-item sm:text-sm">FAQ's</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="lg:hidden flex flex-col mb-6 md:mb-0">
      <h2 class="text-2xl lg:text-text-lg font-bold text-white mb-2">Contact Us</h2>
      <p class="mb-1 flex items-center py-2">
        <i class="fas fa-envelope text-white text-2xl mr-2"></i>
        <a href="mailto:partnerships@helmetprosolutions.com" class="underline text-white hover:text-white pl-4 ">partnerships@helmetprosolutions.com</a>
      </p>
      <p class="flex items-center py-2">
        <i class="fas fa-phone text-white text-2xl mr-2"></i>
        <span class="font-medium text-white pl-4">+63-962-753-3915</span>
      </p>
      <p class="flex items-center py-2">
        <i class="fas fa-map-marker-alt text-white text-4xl mb-2"></i>
        <span class="font-medium text-white pl-4"><NuxtLink to="https://maps.app.goo.gl/XQ56tYcUKCKjtw8d7" target="_blank" rel="noopener noreferrer">Camella Springville  Molino 3 Bacoor</NuxtLink></span>
      </p>
    </div>

    <!-- Follow Us Section -->
    <div class="flex flex-col mb-6 md:mb-0">
      <h2 class="text-2xl lg:text-text-lg font-bold text-white mb-2">Follow Us</h2>
      <ul class="space-y-2">
        <li class="flex items-center">
          <i class="fab fa-facebook-square text-3xl text-blue-100 lg:text-blue-100 2xl:text-blue-600 mr-2"></i>
          <a href="https://www.facebook.com/helmetprosolutions" target="_blank" rel="noopener noreferrer" class="link-item font-semibold text-white">Facebook</a>
        </li>
        <li class="flex items-center">
          <i class="fab fa-instagram-square text-3xl text-pink-600 mr-2"></i>
          <a href="https://www.instagram.com/helmetpro_vendo/" target="_blank" rel="noopener noreferrer" class="link-item font-semibold text-white">Instagram</a>
        </li>
        <li class="flex items-center">
          <i class="fab fa-facebook-messenger text-3xl text-blue-100 lg:text-blue-100 2xl:text-blue-600 mr-1"></i>
          <a href="https://m.me/helmetprosolutions" target="_blank" class="link-item font-semibold text-white">Messenger</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="flex lg:hidden items-left lg:items-center flex-col mb-6 md:mb-0">
      <NuxtImg src="https://utfs.io/f/txXKmXW6aEb8l1xnnMTULFAz3OGEhrT62oYjiBmM5ebJtvDp" alt="Logo" class="w-48 h-20 md:h-[120px] mr-4 mt-5" loading="lazy"/>
      <p class="text-white">&copy; {{ new Date().getFullYear() }} HELMETPRO. All rights reserved.</p>
    </div>

</footer>



  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAnimations } from '@/composables/useAnimations';
// import Chatbot from '@/components/Chatbot.vue';

const { setupAnimations } = useAnimations();
const title = ref(null);
const paragraph = ref(null);
const image = ref(null);
const isChatbotVisible = ref(false);
const isMenuOpen = ref(false); // New state for mobile menu

const isBlogDropdownOpen = ref(false);

const toggleBlogDropdown = () => {
  isBlogDropdownOpen.value = !isBlogDropdownOpen.value;
};
const router = useRouter();

const toggleChatbot = () => {
  isChatbotVisible.value = !isChatbotVisible.value;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const refreshChatbot = () => {
  isChatbotVisible.value = false; // Hide the chatbot
  setTimeout(() => {
    isChatbotVisible.value = true; // Refresh after a short delay
  }, 0); // Instant refresh
};

watch(router.currentRoute, () => {
  refreshChatbot();
});

onMounted(() => {
  isChatbotVisible.value = true; // Show the chatbot on initial load
});

// Setup animation for each image
setupAnimations([
  {
    element: image,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.5, easing: 'ease-out' },
  },
  {
    element: title,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: paragraph,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
]);

const isHidden = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
    isHidden.value = true; // Scrolling down, hide the navbar
  } else {
    isHidden.value = false; // Scrolling up, show the navbar
  }
  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.custom-bg-image {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    89.65deg,
    rgba(120, 175, 253, 0.1) 11.52%,
    #0B2B5A 146.14%
  ),
  url('https://utfs.io/f/txXKmXW6aEb8auhAfHQUWzYPrEl1Q67p4My3VRAmtdnsgINv');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem; /* Add padding for spacing on smaller screens */
}



.centered-image {
  max-width: 90%; /* Ensure the image is responsive */
  height: auto;
}


.nav-link {
  position: relative;
  color: #ffffff;
  transition: color 0.3s ease, transform 0.3s ease;
}
.nav-link:hover {
  color: #d6d6d6;
  transform: translateY(-3px);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #d6d6d6;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.nav-link:hover::after {
  transform: scaleX(1);
}

.dropdown-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #000000;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.dropdown-link:hover {
  color: #ffffff;
  background-color: #3b82f6;
}

.link-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: #ffffff;
  border-radius: 0.375rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.link-item:hover {
  color: #fff;
  background-color: #1d4ed8; /* Indigo-700 */
}
@media (max-width: 1024px) {
  .custom-bg-image {
    height: 80vh; /* Adjust background height for tablets */
  }
}

@media (max-width: 768px) {
  .custom-bg-image {
    height: 90vh; /* Adjust background height for smaller screens */
  }

  .centered-image {
    width: 70vw; /* Resize image for smaller screens */
  }
}

@media (max-width: 480px) {
  .centered-image {
    width: 80vw; /* Resize image even further for mobile devices */
  }
}
nav {
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

button {
transition: background-color 0.3s, transform 0.2s;
}

button:hover {
transform: translateY(-2px);
}


</style>
