<template>
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Modal Content -->
    <div class="relative w-full max-w-5xl p-6 md:p-8 bg-white rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
      <button
        @click="emitClose"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>

      <h2 class="text-3xl font-extrabold text-indigo-600 mb-4 text-center">
        Book an Appointment
      </h2>

      <form class="space-y-6" @submit.prevent="handleSubmit">
        <!-- Grid Layout for the first 6 fields -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <!-- Full Name -->
          <div>
            <label for="name" class="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full mt-2 p-2 md:p-4 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>


          <!-- Email Address -->
          <div>
            <label for="email" class="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full mt-2 p-2 md:p-4 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <!-- Contact Number -->
          <div>
            <label for="phone" class="block text-lg font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              class="w-full mt-2 p-2 md:p-4 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

 

          <!-- Set Meeting Date -->
          <div>
            <label for="date" class="block text-lg font-medium text-gray-700">
              Set Appointment Date
            </label>
            <input
              type="date"
              id="date"
              v-model="formData.date"
              class="w-full mt-2 p-2 md:p-4 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-lg font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            class="w-full mt-2 p-2 md:p-4 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center mt-6">
          <button
            type="submit"
            class="w-full sm:w-auto py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-300"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="loader"></span>
            <span v-else>Submit Appointment</span>
          </button>
        </div>

        <!-- Error Message -->
      </form>
    </div>
  </div>
</template>




<script setup>
import { ref } from "vue";
import Swal from 'sweetalert2';

// Define the emit function for handling close event
const emit = defineEmits(["close"]);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  date: "",
  message: "",
});

const isLoading = ref(false);
const errorMessage = ref("");

// Close function
function emitClose() {
  emit("close");
}

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

// Submit handler
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
    date: event.target.date.value,
    message: event.target.message.value,
  };

  try {
  const response = await fetch('https://script.google.com/macros/s/AKfycbweqoQPOq3k6NovO6XC1zTDlEeaBiNC2i1rlsCry3YXthqqq1bKM_oxnf4C1AftS-w6kw/exec', {
    method: 'POST',
    mode: 'no-cors',  
    body: new URLSearchParams(formSubmissionData),
  });

  // Show success alert after sending the request
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Data submitted successfully.',
    confirmButtonText: 'OK'
  }).then(() => {

    emitClose(); 
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

</style>
