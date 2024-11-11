<template>
  <div class="flex bg-gradient-to-r from-blue-700 to-teal-600 justify-center items-center p-10">
    <!-- Checkout Card -->
    <div class="w-full max-w-3xl p-12 rounded-2xl shadow-xl bg-white  ">
      <h1 class="text-5xl font-bold text-center mb-6">
        Secure Checkout with PayPal
      </h1>
      <p class="text-center text-lg  mb-12 leading-relaxed">
        Fast, Secure, and Hassle-Free. Pay with your PayPal account and complete your purchase in seconds!
      </p>
      <div id="paypal-button-container" class="flex justify-center items-center mb-8">

      </div>
      <!-- Removed Transparent Background -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-400 mb-4">Questions? Our support team is here to assist you!</p>

        <NuxtLink to="/contactUs" class="text-lg   transition-colors duration-300">Contact Support</NuxtLink>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { loadScript } from '@paypal/paypal-js';
definePageMeta({
  layout: 'custom-layout',
  name: 'Payment',
  head: {
    middleware: 'canonical',
  }
});



export default defineComponent({
  setup() {
    onMounted(() => {
      loadScript({
        'client-id': 'AVIP5AnkXnhPJHWnHMYJIMuFgoa4j7nSyoS4URaMOdhHH6UrtB_FAPiFiHmyxaSYoUp9fwdOgLvSpmK3',
      }).then((paypal) => {
        paypal.Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '20.00' // Replace this with your dynamic price
                }
              }]
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        }).render('#paypal-button-container');
      }).catch((err) => {
        console.error('PayPal Buttons failed to render', err);
      });
    });
  }
});
</script>

<style scoped>

</style>
