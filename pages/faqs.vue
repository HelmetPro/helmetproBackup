<template>
      <Faqs />
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

useHead({
  title: 'FAQs | HelmetPro: Helmet Cleaning Vending Solutions',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: route.name === 'faqs'
        ? 'Find answers to frequently asked questions about HelmetPro’s helmet cleaning vending machines, our services, and technology.'
        : 'Get in touch with HelmetPro for questions, feedback, or inquiries about our helmet cleaning vending machines and services',
    },
    { 
      hid: 'keywords', 
      name: 'keywords', 
      content: 'HelmetPro, helmet cleaning FAQ, helmet cleaning FAQ, vending machines, FAQ, helmet hygiene FAQ, convenience, automated vending machine FAQ' 
    }
  ],
})

definePageMeta({
  layout: 'custom-layout',
  name: 'FAQS',
  title: 'FAQs | HelmetPro: Helmet Cleaning Vending Solutions',
  head: {
    middleware: 'canonical',
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can the cleaning time be customized?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! HelmetPro allows customizable  settings—you can adjust the preferred cleaning time and process depending on the customer’s needs. Unlike other machines, you have control over the cleaning process for better results."
              }
            },
            {
              "@type": "Question",
              "name": "What is the Smart Alert System and Real-Time Transaction Monitoring System?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "HelmetPro’s Smart Alert System notifies you when there’s an error or if the cleaning solution needs refilling. The Real-Time Transaction Monitoring System lets you track all transactions and monitor your business operations anywhere, anytime."
              }
            },
            {
              "@type": "Question",
              "name": "What after-sales services are included with the HelmetPro package?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The package includes a 1-year warranty (for non-human damage), Real-Time Transaction Monitoring, Smart Alert System, Business Partner Training & Orientation Program, and access to our partner forum for ongoing support."
              }
            },
            {
              "@type": "Question",
              "name": "What are the advantages of HelmetPro compared to other helmet cleaning machines?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "HelmetPro is built with high-quality Cold Rolled Steel and Galvanized Steel, making it durable and corrosion-resistant. Aside from its toughness, it offers advanced features such as customizable cleaning processes, online payments, real-time monitoring, and smart alerts—features that are rare in other machines."
              }
            },
            {
              "@type": "Question",
              "name": "How much does the HelmetPro Vending Machine cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The starting price of the HelmetPro vending machine is ₱185,000. For more details on pricing and packages, feel free to message us or visit our showroom."
              }
            },
            {
              "@type": "Question",
              "name": "How can I inquire about purchasing HelmetPro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It’s easy! You can book a showroom visit or schedule a phone consultation. Just fill out our inquiry form or contact us through our website, and we’ll assist you right away."
              }
            },
            {
              "@type": "Question",
              "name": "Is there training and support for business partners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer full business support assistance and guidance to all our partners. This includes business orientation, training, and access to joint marketing materials to maximize the potential of HelmetPro in your market."
              }
            },
            {
              "@type": "Question",
              "name": "Can I become a partner even if I don’t have a business yet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, aspiring entrepreneurs are welcome! You can start your business journey with HelmetPro. Simply inquire for more details on how to get started."
              }
            }
          ]
        }),
      }
    ]
  }
});
</script>

<style scoped>

</style>