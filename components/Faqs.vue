<template>
  <section class="bg-gradient-to-r from-blue-300 to-teal-100">
    <div class="py-10">
      <div class="faq-container  max-w-4xl py-10 mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 class="faq-title text-4xl font-bold text-center mb-8 text-indigo-600">Frequently Asked Questions</h2>
        <div
          class="faq-item border-b border-gray-300 pb-6 mb-6"
          v-for="(item, index) in faqs"
          :key="index"
        >
          <button
            class="faq-question flex justify-between items-center w-full py-4 hover:bg-gray-50 focus:outline-none"
            @click="toggleFAQ(index)"
            :aria-expanded="activeIndex === index"
            :aria-controls="'faq-answer-' + index"
          >
            <div class="flex items-center">
              <!-- Icon to the left of the question -->
              <NuxtImg src="https://img.icons8.com/color/48/faq.png" alt="FAQ Icon" class="h-8 w-8 mr-4" loading="lazy"/>
              <h3 class="text-lg font-medium text-gray-700">{{ item.question }}</h3>
            </div>
            <!-- Arrow icon -->
            <span class="faq-icon transition-transform" :class="{ 'rotate-180': activeIndex === index }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <transition name="fade">
            <p 
              v-if="activeIndex === index" 
              :id="'faq-answer-' + index"
              class="faq-answer mt-4 text-gray-600 transition-opacity duration-500 text-md leading-relaxed"
            >
              {{ item.answer }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'Can the cleaning time be customized?',
    answer: 'Yes! HelmetPro allows customizable settings—you can adjust the preferred cleaning time and process depending on the customer’s needs. Unlike other machines, you have control over the cleaning process for better results.',
  },
  {
    question: 'What is the Smart Alert System and Real-Time Transaction Monitoring System?',
    answer: 'HelmetPro’s Smart Alert System notifies you when there’s an error or if the cleaning solution needs refilling. The Real-Time Transaction Monitoring System lets you track all transactions and monitor your business operations anywhere, anytime.',
  },
  {
    question: 'What after-sales services are included with the HelmetPro package?',
    answer: 'The package includes a 1-year warranty (for non-human damage), Real-Time Transaction Monitoring, Smart Alert System, Business Partner Training & Orientation Program, and access to our partner forum for ongoing support.',
  },
  {
    question: 'What are the advantages of HelmetPro compared to other helmet cleaning machines?',
    answer: 'HelmetPro is built with high-quality Cold Rolled Steel and Galvanized Steel, making it durable and corrosion-resistant. Aside from its toughness, it offers advanced features such as customizable cleaning processes, online payments, real-time monitoring, and smart alerts—features that are rare in other machines.',
  },
  {
    question: 'How much does the HelmetPro Vending Machine cost?',
    answer: 'The starting price of the HelmetPro vending machine is ₱185,000. For more details on pricing and packages, feel free to message us or visit our showroom.',
  },
  {
    question: 'How can I inquire about purchasing HelmetPro?',
    answer: 'It’s easy! You can book a showroom visit or schedule a phone consultation. Just fill out our inquiry form or contact us through our website, and we’ll assist you right away.',
  },
  {
    question: 'Is there training and support for business partners?',
    answer: 'Yes, we offer full business support assistance and guidance to all our partners. This includes business orientation, training, and access to joint marketing materials to maximize the potential of HelmetPro in your market.',
  },
  {
    question: 'Can I become a partner even if I don’t have a business yet?',
    answer: 'Yes, aspiring entrepreneurs are welcome! You can start your business journey with HelmetPro. Simply inquire for more details on how to get started.',
  },
]);

const activeIndex = ref(-1);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? -1 : index;
};
</script>

<style scoped>
.faq-container {
  animation: fadeIn 0.5s ease-in-out;
}

.faq-answer {
  padding: 1rem;
  border-left: 4px solid #6366f1;
  background-color: #f0f4f8;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.faq-icon {
  transition: transform 0.3s;
}
</style>
