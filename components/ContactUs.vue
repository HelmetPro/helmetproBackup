<template>
  <div>
    <section id="contact-section" class="text-gray-700 body-font relative bg-gray-300 ">
      <div  class="flex flex-col items-center justify-center p-6 ">
        <div ref="title" class="bg-gradient-to-b from-blue-300 to-teal-300 bg-opacity-100 pt-5 px-10 shadow-lg text-center justify-center rounded-3xl">
          <h1 id="product2"  class="text-5xl font-bold mb-4 text-center text-indigo-600">Introducing Helmet Pro</h1>
          <p ref="paragraph" class="text-lg text-black mb-8 text-center max-w-3xl">
            Helmet Pro is an innovative vending machine designed specifically for cleaning helmets. This page provides a summary of its features and benefits, showcasing how it can enhance the safety and comfort of your riding experience.
          </p>
        </div>
      </div>
      <div class="container px-6 py-12 mx-auto flex flex-wrap md:flex-nowrap ">
        
        <!-- Map Section -->
        <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden shadow-lg sm:mr-10 p-6 flex items-end justify-start relative bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24681.2575744279!2d120.98698490152704!3d14.388682621475626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1729077156466!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style="border:0; filter: grayscale(50%);"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0"
          ></iframe>
          <div class="bg-white relative flex flex-wrap p-6 rounded-lg shadow-md z-10">
            <div class="lg:w-1/2 px-4">
              <h2 class="text-indigo-600 font-semibold text-xs mb-1">ADDRESS</h2>
              <p class="text-sm">123 Main Street, Your City, Country</p>
            </div>
            <div class="lg:w-1/2 px-4 mt-4 lg:mt-0">
              <h2 class="text-indigo-600 font-semibold text-xs mb-1">CONTACT INFO</h2>
              <p class="text-sm">example@email.com</p>
              <p class="text-sm mt-2">+123-456-7890</p>
            </div>
          </div>
        </div>

        <!-- Feedback Form Section -->
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 md:mt-0 rounded-lg shadow-lg p-6 bg-gradient-to-b from-blue-300 to-teal-300">
          <h1 ref="title" class="text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <h2 class="text-2xl text-gray-900 font-semibold mb-4">We'd Love to Hear From You</h2>
          <p class="text-gray-600 mb-6">Feel free to send us your feedback or inquiries using the form below.</p>
          <form @submit.prevent="sendEmail" class="space-y-4">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
              Send Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const sendEmail = () => {
  const templateParams = {
    from_name: formData.value.name,
    from_email: formData.value.email,
    message: formData.value.message,
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
    .then(() => {
      alert('Your feedback has been sent successfully!');
      formData.value = { name: '', email: '', message: '' };
    }, (error) => {
      console.error('Failed to send email:', error);
      alert('There was an error sending your feedback. Please try again later.');
    });
};
</script>

<style scoped>
/* Custom styles for improved visuals */
.bg-white {
  background-color: #ffffff;
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.text-indigo-600 {
  color: #5a67d8;
}

.hover\:bg-indigo-700:hover {
  background-color: #4c51bf;
}
</style>
