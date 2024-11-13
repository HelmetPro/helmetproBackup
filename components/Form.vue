<template>
  <section class="text-gray-600 body-font">
    <!-- Desktop Layout (Two Columns) -->
    <div class="container mx-auto bg-white rounded-lg shadow-2xl p-5">
      <div class="lg:flex lg:space-x-10 ">
        <!-- Left Column: Image and Contact Info -->
        <div class="lg:w-1/2">
          <NuxtImg 
            alt="Helmet Cleaning Vending Machine" 
            class="h-96 w-full object-cover rounded-lg"
            src="https://utfs.io/f/txXKmXW6aEb8Pj7gjV6lR1PiHk73G6S29LbdaweDFNOmjcBz" 
            loading="lazy"
          />
          <div class="py-8 px-5">
            <h1 class="text-4xl font-extrabold text-indigo-600 mb-4">Contact Us / Visit Us</h1>
            <h2 class="text-lg text-gray-400 mb-6">HelmetProSolutions</h2>
            <p class="text-base text-gray-700 leading-8">
              We’re here to help you every step of the way! Whether you have questions about our innovative <strong>HELMET CLEANING VENDING MACHINE</strong>, feedback on our services, or just want to say hello, don’t hesitate to reach out. You can contact us via email or phone, and our friendly team at <strong>HelmetProSolutions</strong> is always ready to assist you. If you prefer a personal touch, feel free to visit us at our office located in the heart of Molino 3, Bacoor. We can’t wait to connect with you and provide the support you need!
            </p>
          </div>
        </div>
        
        <!-- Right Column: Form -->
        <div class="lg:w-1/2 mt-8 lg:mt-0 justify-center items-center pt-16 ">
          <div class="mx-10 bg-gradient-to-r from-blue-900 to-blue-700  rounded-xl shadow-2xl p-5">
            <form class="space-y-6 px-5" @submit.prevent="handleSubmit">
              <div>
                <label for="name" class="block text-lg font-medium text-white">Full Name</label>
                <input type="text" id="name" name="name" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required  v-model="formData.name"/>
              </div>
              <div>
                <label for="email" class="block text-lg font-medium text-white">Email Address</label>
                <input type="email" id="email" name="email" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required  v-model="formData.email"/>
              </div>
              <div>
                <label for="phone" class="block text-lg font-medium text-white">Contact Number</label>
                <input type="tel" id="phone" name="phone" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required  v-model="formData.phone" />
              </div>
              <div>
                <label for="message" class="block text-lg font-medium text-white">Your Message</label>
                <textarea id="message" name="message" rows="4" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required v-model="formData.message"></textarea>
              </div>
              <div class="text-right my-6">
                <button 
                type="submit" 
                class="w-1/2 py-3  text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition duration-300" 
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="loader"></span> <!-- Loading Spinner -->
                <span v-else>Send Message</span>
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Layout (Stacked) -->
    <div class="lg:hidden block container px-5 py-10 mx-auto bg-white flex-col items-center">
      <h1 class="text-3xl font-extrabold text-indigo-600 mb-6 text-center">Contact Us / Visit Us</h1>
      <NuxtImg 
        alt="Helmet Cleaning Vending Machine" 
        class="h-auto w-auto object-cover rounded-lg shadow-lg mb-6" 
        src="https://utfs.io/f/txXKmXW6aEb8Pj7gjV6lR1PiHk73G6S29LbdaweDFNOmjcBz" 
        loading="lazy"
      />
      <p class="leading-relaxed text-base text-center text-gray-700 mb-6">
        We’re here to help you every step of the way! Whether you have questions about our innovative <strong>HELMET CLEANING VENDING MACHINE</strong>, feedback on our services, or just want to say hello, don’t hesitate to reach out. You can contact us via email or phone, and our friendly team at <strong>HelmetProSolutions</strong> is always ready to assist you. If you prefer a personal touch, feel free to visit us at our office located in the heart of Molino 3, Bacoor. We can’t wait to connect with you and provide the support you need!
      </p>
      <!-- Mobile Form -->
      <form class="space-y-6 px-5" @submit.prevent="handleSubmit">
        <div>
          <label for="name" class="block text-lg font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required v-model="formData.name"/>
        </div>
        <div>
          <label for="email" class="block text-lg font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required v-model="formData.email"/>
        </div>
        <div>
          <label for="phone" class="block text-lg font-medium text-white">Contact Number</label>
          <input type="tel" id="phone" name="phone" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required v-model="formData.phone" />
        </div>
        <div>
          <label for="message" class="block text-lg font-medium text-gray-700">Your Message</label>
          <textarea id="message" name="message" rows="4" class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" required v-model="formData.message"></textarea>
        </div>
        <button 
          type="submit" 
          class="w-1/2 py-3 mt-6 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition duration-300" 
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loader"></span> <!-- Loading Spinner -->
          <span v-else>Send Message</span>
        </button>
      </form>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
// Function to format the timestamp
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month (0-11, hence +1)
  const day = String(date.getDate()).padStart(2, '0'); // Day of the month
  const year = date.getFullYear(); // Full year (4 digits)
  
  const hours = String(date.getHours()).padStart(2, '0'); // Hours (24-hour format)
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutes
  const seconds = String(date.getSeconds()).padStart(2, '0'); // Seconds
  
  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const isLoading = ref(false);
const errorMessage = ref("");  // For showing error messages

async function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page
  
  // Get the current timestamp and format it
  const timestamp = formatTimestamp(new Date());

  // Collect form data and include the formatted timestamp
  const formSubmissionData = {
    timestamp: timestamp, 
    name: event.target.name.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    message: event.target.message.value,
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycby7Ccyud0FYDySYTHKWMnp-_laV-wofNehKEM_KPlcsHnQ5J5NMyeuLlv_FrP8ezja45A/exec', {
      method: 'POST',
      mode: 'no-cors',  // Temporarily set mode to no-cors
      body: new URLSearchParams(formSubmissionData),
    });

  // Show success alert after sending the request
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Data submitted successfully.',
        confirmButtonText: 'OK'
      }).then(() => {

        formData.value = { name: "", email: "", phone: "", message: "" }; 
      });

    } catch (error) {
      // Show error alert in case of an exception
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'An error occurred: ' + error.message,
        confirmButtonText: 'Try Again'
      });
    }
}
</script>

<style scoped>
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-left-color: #fff;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
