<template>
  <div>
    <Computation />
    <Facts />

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom-layout',
  name: 'POTENTIAL INCOME',
  head: {
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.helmetprosolutions.com/computation'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Potential Income Computation",
          "url": "https://www.helmetprosolutions.com/computation",
          "description": "Calculate your potential income from the Helmet Cleaning  Vending Machine based on various utilization rates.",
          "mainEntity": {
            "@type": "HowTo",
            "name": "Income Calculation for Helmet Cleaning Vending Machine",
            "description": "A guide to help you calculate the potential income from a Helmet Cleaning Vending Machine.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Assumption 1: 90-100% Utilization",
                "description": "Daily income of ₱4,000 by servicing 40 helmets at ₱100 each, leading to a weekly income of ₱28,000 and monthly income of ₱120,400."
              },
              {
                "@type": "HowToStep",
                "name": "Assumption 2: 50% Utilization",
                "description": "Daily income of ₱2,000 by servicing 20 helmets at ₱100 each, leading to a weekly income of ₱14,000 and monthly income of ₱60,200."
              },
              {
                "@type": "HowToStep",
                "name": "Assumption 3: 25% Utilization",
                "description": "Daily income of ₱1,000 by servicing 10 helmets at ₱100 each, leading to a weekly income of ₱7,000 and monthly income of ₱30,100."
              }
            ]
          }
        }),
      }
    ]
  }
});
</script>

<style  scoped>

</style>