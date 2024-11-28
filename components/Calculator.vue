<template>
  <section ref="sectionRef" class="flex flex-wrap lg:gap-8  bg-gradient-to-r from-blue-300 to-teal-100">
    <!-- Form Section with Results Inside -->
    <div class="w-full  container mx-auto bg-white  lg:p-6 shadow-2xl  rounded-xl">
      
      <!-- 1st Row: Header -->
      <div class="mb-6 text-center items-center">
        <h2 class="py-5 lg:py-4 text-2xl sm:text-4xl lg:text-5xl  font-extrabold text-indigo-600 mb-4 sm:mb-6">Discover Your Profit Potential with the HelmetPro Revenue & Cost Calculator!</h2>

        <p class="text-gray-600 mb-6 px-5 leading-relaxed">
          Understand your revenue potential and manage costs effectively with the HelmetPro calculator. See how each wash contributes to your bottom line and maximize your profits!
        </p>
      </div>

      <!-- 2nd Row: 2-Column Layout -->
      <div class="flex flex-wrap lg:flex-nowrap lg:gap-6 p-2">
        <!-- Left Column: Form Inputs -->
        <div class="w-full lg:w-1/2 space-y-8">
          <!-- Currency Selection -->
          <div>
            <label class="block text-xl lg:text-2xl font-semibold mb-2">Currency</label>
            <select v-model="formData.currency" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="USD">$ - USD</option>
              <option value="EUR">€ - EUR</option>
              <option value="PHP">₱ - PHP</option>
            </select>
            <p class="text-sm text-gray-500 mt-2">Select the currency to display in calculations</p>
          </div>

          <!-- Dynamic Form Fields -->
          <div v-for="field in fields" :key="field.label" class="space-y-1">
            <label :for="field.name" class="block text-lg lg:text-xl font-semibold">{{ field.label }}</label>
            <div class="relative">
              <!-- Prefix Symbol -->
              <span v-if="field.name !== 'utilizationRate'" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">{{ currencySymbol }}</span>
              <!-- Input Field -->
              <input
                :id="field.name"
                :type="field.type"
                v-model="formData[field.name]"
                class="w-full pl-10 text-lg lg:text-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                :placeholder="field.placeholder"
              />
            </div>
            <p class="text-sm text-gray-500">{{ field.helpText }}</p>
          </div>
        </div>

        <!-- Right Column: Results Section -->
        <div class="w-full lg:w-1/2 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 lg:p-8 rounded-xl shadow-2xl space-y-8">
          <h2 class="text-3xl font-extrabold text-center mb-6">Revenue & Profit Summary</h2>

          <div class="space-y-6">
            <!-- Daily Revenue -->
            <div class="flex justify-between items-center border-b border-white/30 pb-4">
              <h3 class="text-lg font-medium">Daily Revenue</h3>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">{{ currencySymbol }}</span>
                <p ref="dailyRevenue" class="text-3xl font-bold">{{ formattedResults.dailyRevenue }}</p>
              </div>
            </div>

            <!-- Monthly Revenue -->
            <div class="flex justify-between items-center border-b border-white/30 pb-4">
              <h3 class="text-lg font-medium">Monthly Revenue</h3>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">{{ currencySymbol }}</span>
                <p ref="monthlyRevenue" class="text-3xl font-bold">{{ formattedResults.monthlyRevenue }}</p>
              </div>
            </div>

            <!-- Monthly Cost -->
            <div class="flex justify-between items-center border-b border-white/30 pb-4">
              <h3 class="text-lg font-medium">Monthly Cost</h3>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">{{ currencySymbol }}</span>
                <p ref="monthlyCost" class="text-3xl font-bold">{{ formattedResults.monthlyCost }}</p>
              </div>
            </div>

            <!-- Gross Profit -->
            <div class="flex justify-between items-center border-b border-white/30 pb-4">
              <h3 class="text-lg font-medium">Gross Profit</h3>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">{{ currencySymbol }}</span>
                <p ref="grossProfit" class="text-4xl font-extrabold text-green-400">{{ formattedResults.grossProfit }}</p>
              </div>
            </div>

            <!-- Profit Margin -->
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-medium">Profit Margin</h3>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">{{ currencySymbol }}</span>
                <p ref="profitMargin" class="text-3xl font-bold text-yellow-400">{{ formattedResults.profitMargin }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-4 text-center">
            <h3 class="text-2xl font-bold">Maximize Your Profits!</h3>
            <p class="text-sm text-white/80">
              Optimize costs and increase revenue with HelmetPro. Discover new ways to boost your business and achieve success.
            </p>

            <!-- Learn More Button -->
            <button class="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_isim53g1u6-pYQRLzhk75UUQjFSYdkI9_wYUrgZCABmH8A/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>

      </div>

      <!-- Mobile View -->

      
    </div>
  </section>
</template>




<script setup>
import { ref, computed, watch } from 'vue';

// Form data with default values
const formData = ref({
  currency: 'USD',
  unitPrice: '3',
  utilizationRate: '25',
  fixedCosts: '200',
  variableCost: '0.2'
});

// Calculation logic
const results = computed(() => {
  const dailyRevenue = parseFloat(formData.value.unitPrice) * parseInt(formData.value.utilizationRate);
  const monthlyRevenue = dailyRevenue * 30;

  const adjustedMonthlyRevenue = monthlyRevenue - parseFloat(formData.value.fixedCosts) - parseFloat(formData.value.variableCost) * parseInt(formData.value.utilizationRate) * 30;
  const monthlyCost = parseFloat(formData.value.fixedCosts) + parseFloat(formData.value.variableCost) * parseInt(formData.value.utilizationRate) * 30;
  
  const grossProfit = adjustedMonthlyRevenue - monthlyCost;
  const profitMargin = (grossProfit / adjustedMonthlyRevenue) * 100;
  const profitDifference = adjustedMonthlyRevenue - monthlyCost;

  return {
    dailyRevenue: dailyRevenue || 0,
    monthlyRevenue: adjustedMonthlyRevenue || 0,
    monthlyCost: monthlyCost || 0,
    grossProfit: grossProfit || 0,
    profitDifference: profitDifference || 0,
    profitMargin: profitMargin || 0
  };
});

// Currency symbol logic
const currencySymbol = computed(() => {
  switch (formData.value.currency) {
    case 'USD': return '$';
    case 'EUR': return '€';
    case 'PHP': return '₱';
    default: return '$'; // Default to USD
  }
});

// Format numbers with commas
const formatNumber = (number) => {
  return number.toLocaleString();
};

// Watch formData for changes and trigger animations
watch(formData, () => {
  animateNumber(dailyRevenue.value, results.value.dailyRevenue, 2000);
  animateNumber(monthlyRevenue.value, results.value.monthlyRevenue, 2000);
  animateNumber(monthlyCost.value, results.value.monthlyCost, 2000);
  animateNumber(grossProfit.value, results.value.grossProfit, 2000);
  animateNumber(profitDifference.value, results.value.profitDifference, 2000);
  animateNumber(profitMargin.value, results.value.profitMargin, 2000, true);
}, { deep: true });

// Function to animate numbers with a "roulette" effect
const animateNumber = (element, end, duration = 2000, isPercentage = false) => {
  let start = 0;
  const startValue = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const currentValue = Math.floor(startValue + progress * (end - startValue));
    element.textContent = isPercentage
      ? `${currentValue.toFixed(2)}%`
      : currentValue.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};

// Format results for display
const formattedResults = computed(() => ({
  dailyRevenue: formatNumber(results.value.dailyRevenue),
  monthlyRevenue: formatNumber(results.value.monthlyRevenue),
  monthlyCost: formatNumber(results.value.monthlyCost),
  grossProfit: formatNumber(results.value.grossProfit),
  profitDifference: formatNumber(results.value.profitDifference),
  profitMargin: `${results.value.profitMargin.toFixed(2)}%`
}));

// Refs for result elements
const dailyRevenue = ref(null);
const monthlyRevenue = ref(null);
const monthlyCost = ref(null);
const grossProfit = ref(null);
const profitDifference = ref(null);
const profitMargin = ref(null);

// Fields for the form
const fields = [
  {
    label: 'Unit Price (per wash)',
    name: 'unitPrice',
    type: 'number',
    placeholder: 'Enter unit price',
    helpText: 'Price per helmet wash in your selected currency'
  },
  {
    label: 'Enter the Estimated Helmets Washed Daily',
    name: 'utilizationRate',
    type: 'number',
    placeholder: 'Enter the Estimated Helmets Washed Daily',
    helpText: 'Estimated percentage of machine utilization'
  },
  {
    label: 'Fixed Costs (per month)',
    name: 'fixedCosts',
    type: 'number',
    placeholder: 'Enter fixed costs',
    helpText: 'Fixed monthly costs for your machine (e.g., rent, maintenance)'
  },
  {
    label: 'Variable Cost (per wash)',
    name: 'variableCost',
    type: 'number',
    placeholder: 'Enter variable cost',
    helpText: 'Cost per helmet wash (e.g., electricity, water)'
  }
];
</script>

<style scoped>
/* Styling for section */
section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

/* Styling for result sections */

</style>
