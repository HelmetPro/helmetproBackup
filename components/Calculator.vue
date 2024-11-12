<template>
  <section ref="sectionRef" class="flex flex-wrap  lg:gap-8 lg:p-8 bg-gradient-to-r from-blue-300 to-teal-100">
    <!-- Form Section with Results Inside -->
    <div class="w-full lg:w-2/3 bg-white p-4 lg:p-6 shadow-2xl  rounded-xl">
      
      <!-- 1st Row: Header -->
      <div class="mb-6 text-center items-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl  font-extrabold text-indigo-600 mb-4 sm:mb-6">Discover Your Profit Potential with the HelmetPro Revenue & Cost Calculator!</h2>

        <p class="text-gray-600 mb-6 leading-relaxed">
          Understand your revenue potential and manage costs effectively with the HelmetPro calculator. See how each wash contributes to your bottom line and maximize your profits!
        </p>
      </div>

      <!-- 2nd Row: 2-Column Layout -->
      <div class="flex flex-wrap lg:flex-nowrap lg:gap-6">
        <!-- Left Column: Form Inputs -->
        <div class="w-full lg:w-1/2">
          <div class="mb-6">
            <label class="block text-2xl font-semibold mb-2">Currency</label>
            <select v-model="formData.currency" class="w-full lg:p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="USD">$ - USD</option>
              <option value="EUR">€ - EUR</option>
              <option value="PHP">₱ - PHP</option>
            </select>
            <p class="text-sm text-gray-500 mt-2">Select the currency to display in calculations</p>
          </div>

          <div v-for="field in fields" :key="field.label" class="mb-6">
            <label :for="field.name" class="block text-sm lg:text-2xl font-semibold mb-2">{{ field.label }}</label>
            <div class="relative">
              <span v-if="field.name !== 'utilizationRate'" class="absolute  left-1 top-1/2 transform -translate-y-1/2 text-2xl font-semibold">{{ currencySymbol }}</span>
              <input
                :id="field.name"
                :type="field.type"
                v-model="formData[field.name]"
                class="w-full pl-10 text-2xl font-semibold lg:p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500"
                :placeholder="field.placeholder"
              />
            </div>
            <p class="text-sm text-gray-500 mt-2">{{ field.helpText }}</p>
          </div>
        </div>

        <!-- Right Column: Results Section -->
        <div class="w-full lg:w-1/2 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 lg:p-6 rounded-xl shadow-2xl">
          <h3 class="text-xl font-semibold">Daily Revenue</h3>
          <div class="flex items-center space-x-3 mb-6">
            <span>{{ currencySymbol }}</span>
            <p ref="dailyRevenue" class="text-3xl font-bold">{{ formattedResults.dailyRevenue }}</p>
          </div>

          <h3 class="text-xl font-semibold mb-4">Monthly Revenue</h3>
          <div class="flex items-center space-x-3 mb-10 lg:mb-6">
            <span>{{ currencySymbol }}</span>
            <p ref="monthlyRevenue" class="text-3xl font-bold">{{ formattedResults.monthlyRevenue }}</p>
          </div>

          <h3 class="text-xl font-semibold mb-4">Monthly Cost</h3>
          <div class="flex items-center space-x-3 mb-10 lg:mb-6">
            <span>{{ currencySymbol }}</span>
            <p ref="monthlyCost" class="text-3xl font-bold">{{ formattedResults.monthlyCost }}</p>
          </div>

          <h3 class="text-2xl lg:2xl font-semibold mb-4">Gross Profit</h3>
          <div class="flex items-center space-x-3 mb-10 lg:mb-6">
            <span class="text-4xl">{{ currencySymbol }}</span>
            <p ref="grossProfit" class="text-5xl font-extrabold">{{ formattedResults.grossProfit }}</p>
          </div>

          <h3 class="text-xl font-semibold mb-4">Profit Margin</h3>
          <div class="flex items-center space-x-3 mb-10 lg:mb-6">
            <span>{{ currencySymbol }}</span>
            <p ref="profitMargin" class="text-3xl font-bold">{{ formattedResults.profitMargin }}</p>
          </div>

          <h2 class="text-4xl font-bold text-white mb-4">Maximize Your Profits!</h2>
          <p class="text-white mb-6">
            Optimize your costs and increase your revenue with HelmetPro. Discover more ways to boost your business.
          </p>

          <!-- Learn More Button -->
          <button class="w-full py-3 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
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
