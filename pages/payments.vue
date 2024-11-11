<template>
  <div class="bg-indigo-50">
    <div id="paypal-button-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { loadScript } from '@paypal/paypal-js';

export default defineComponent({
  name: 'PaypalButton',
  setup() {
    onMounted(() => {
      loadScript({ 
        'client-id': 'AVIP5AnkXnhPJHWnHMYJIMuFgoa4j7nSyoS4URaMOdhHH6UrtB_FAPiFiHmyxaSYoUp9fwdOgLvSpmK3' 
      }).then((paypal) => {
        paypal.Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '10.00' // Replace this with the actual amount
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
