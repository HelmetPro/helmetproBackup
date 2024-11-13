<template>
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Modal Content -->
    <div class="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
      <button
        @click="closeModal"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>

      <h2 class="text-3xl font-extrabold text-blue-600 mb-4 text-center">
        Inquiry Form
      </h2>

      <form class="space-y-6" @submit.prevent="handleSubmit">
        <!-- Full Name -->
        <div>
          <label for="name" class="block text-lg font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
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
            class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
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
            class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <!-- Inquiry Details -->
        <div>
          <label for="inquiry" class="block text-lg font-medium text-gray-700">
            Inquiry Details
          </label>
          <textarea
            id="inquiry"
            v-model="formData.inquiry"
            rows="4"
            class="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-3 mt-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loader"></span>
          <span v-else>Submit Inquiry</span>
        </button>

        <!-- Error Message -->
        <div v-if="errorMessage" class="text-red-600 mt-4 text-center">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ref } from "vue";

// Define the emit function to trigger the close event
const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}

const formData = ref({
  name: "",
  email: "",
  phone: "",
  inquiry: "",
});

const isLoading = ref(false);
const errorMessage = ref("");

// Submit handler
async function handleSubmit() {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const formSubmissionData = {
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      inquiry: formData.value.inquiry,
    };

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyMbTcYiZ2yiluZeHdcH19xNZ53EVUkFTlXV-xjBmEu3a4J8VbCldbgDTO9g-G3EO-9/exec",
      {
        method: "POST",
        body: new URLSearchParams(formSubmissionData),
      }
    );

    if (!response.ok) {
      throw new Error("Error submitting the form.");
    }

    // Close modal on successful submission
    closeModal();

    // Display success toast
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    Toast.fire({
      icon: "success",
      title: "Inquiry submitted successfully"
    });
    
  } catch (error) {
    errorMessage.value = error.message;

    // Display error alert
    Swal.fire({
      icon: "error",
      title: "Submission Failed",
      text: error.message,
      confirmButtonText: "Try Again"
    });

  } finally {
    isLoading.value = false;
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
