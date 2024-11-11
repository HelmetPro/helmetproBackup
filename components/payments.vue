<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-8 z-20">
    <div class="bg-white shadow-lg rounded-lg flex w-full max-w-3xl overflow-hidden relative"> <!-- Adjusted max-width -->
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl">&times;</button>

      <!-- Left side: Image Slider and Details -->
      <div class="w-1/2 p-6 flex flex-col justify-center items-center border-r border-gray-200">
        <div class="relative w-full h-96 mb-4">
          <img :src="images[currentImageIndex]" alt="Helmet Fresh and Clean" class="w-full h-full object-cover rounded-lg shadow-md" />
          <button @click="prevImage" class="absolute left-0 top-1/2  bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            &lt;
          </button>
          <button @click="nextImage" class="absolute right-0 top-1/2  bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            &gt;
          </button>
        </div>

        <div class="flex space-x-2 mt-2">
          <img v-for="(image, index) in images" :key="index" :src="image" alt="" class="w-16 h-16 object-cover rounded-lg cursor-pointer border" 
               :class="{'border-blue-500': currentImageIndex === index}" 
               @click="currentImageIndex = index" />
        </div>

       
      </div>

      <!-- Right side: Payment Section -->
      <div class="w-1/2 p-6">
        <h2 class="text-1xl font-semibold mb-2 text-center">Helmet Fresh and Clean</h2>
        <p class="text-gray-600 text-center mb-4 text-lg">Stay fresh and comfortable with our advanced helmet cleaning solution. Designed to keep your gear in top condition.</p>

        <!-- Product Details Summary -->
        <div class="bg-gray-50 p-4 rounded-lg mb-6 shadow-sm">
          <h4 class="font-medium text-xl">Product Details</h4>
          <div class="flex justify-between items-center mt-2">
            <span class="text-gray-700">Helmet Fresh and Clean</span>
            <span class="font-semibold text-green-500">{{ formattedPrice }}</span>
          </div>
        </div>

        <!-- PayPal Button Container -->
        <div id="paypal-button-container" class="mt-4"></div>

        <!-- Cancel Button -->
        <button @click="closeModal" class="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2  transition duration-200">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, computed } from 'vue';
import { loadScript } from '@paypal/paypal-js';

const price = ref(3580.00); // Original price

const formattedPrice = computed(() => {
  // Format the price to include commas
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price.value);
});
// Define props
const props = defineProps({
  isVisible: Boolean,
});

// Define emits for closing the modal
const emit = defineEmits(['close']);

// Method to close the modal
const closeModal = () => {
  emit('close');
};

// Watch the isVisible prop to initialize PayPal buttons when the modal opens
watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal) {
      loadPayPalButtons();
    }
  }
);

// Image Slider Logic
const images = [
  'https://utfs.io/f/txXKmXW6aEb8buTxLy7Or9xj5E7ZDSuNWKeaAFwzvVt2mhdR',
  'https://utfs.io/f/txXKmXW6aEb87D39ogvNJZsh50YKV3ufoDizx26ROAtqEjcg',
  'https://utfs.io/f/txXKmXW6aEb85huVut1tfJ6kxXjH8hb2I7SpcqaDEZR3PzVF',
  'https://utfs.io/f/txXKmXW6aEb8QZ5Lw9yHAEPL7YgWqRZ6OxFBNo1eiXVjKJv8',
  'https://utfs.io/f/txXKmXW6aEb8xddFqhmrlgFz0uoShVUIp6njet8vPdMTDywf',
]; // Array of image paths

const currentImageIndex = ref(0);

// Function to show the previous image
const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
};

// Function to show the next image
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

// Function to load PayPal buttons
const loadPayPalButtons = () => {
  loadScript({
    'client-id': 'AVIP5AnkXnhPJHWnHMYJIMuFgoa4j7nSyoS4URaMOdhHH6UrtB_FAPiFiHmyxaSYoUp9fwdOgLvSpmK3'
  })
  .then((paypal) => {
    console.log('PayPal script loaded successfully!'); // Log for debugging
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '29.99' // Set to match the product price
            }
          }]
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      },
      onError: (err) => {
        console.error('PayPal Button error:', err); // Log any errors
      }
    }).render('#paypal-button-container');
  })
  .catch((err) => {
    console.error('PayPal Buttons failed to render', err);
  });
};
</script>

<style scoped>
/* Custom styles for the modal */
.bg-gray-700 {
  background-color: #4b5563; /* Darker gray background for better contrast */
}

.bg-white {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Softer shadow for depth */
}

.shadow-lg {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 12px; /* More rounded corners for a modern look */
}

button {
  transition: background-color 0.2s, transform 0.2s; /* Button hover effect */
}

button:hover {
  background-color: #e2e8f0; /* Lighter background on hover */
  transform: scale(1.05); /* Slight scale effect */
}

h2, h3 {
  color: #2d3748; /* Darker text color for headings */
}
</style>
