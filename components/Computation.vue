<template>
  <div class="bg-gradient-to-r from-blue-300 to-teal-100">
    <!-- Section 1: Introduction -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-20 mx-auto">
        <div class="lg:hidden block container px-5 p-5 mx-auto bg-white  flex-col items-center">
          <h1 class="text-3xl lg:text-5xl font-extrabold text-indigo-600 mb-6 text-center">Potential Income Computation</h1>
          <div class="flex flex-col items-center">
            <NuxtImg 
              alt="Helmet Cleaning Vending Machine" 
              class="h-auto w-auto object-cover rounded-lg shadow-lg m-2" 
              src="/images/computation.jpg" 
              loading="lazy"
            />
            <p class="leading-relaxed text-base text-center ">
              With our HelmetPro vending machines, you can tap into a lucrative market that is rapidly growing and evolving. These innovative machines not only provide a convenient solution for helmet cleaning but also present an exciting opportunity for entrepreneurs and business owners looking to diversify their income streams.
            </p>

          </div>
        </div>

        <div class="hidden lg:flex container  rounded-lg shadow-2xl mx-auto bg-white">
          <NuxtImg 
            alt="Helmet Cleaning Vending Machine" 
            class="h-96 w-auto object-contain rounded-lg  m-2 " 
            src="/images/computation.jpg" 
            loading="lazy"
          />
          <div class="flex-1 p-5">
            <h1 class="text-5xl font-extrabold text-indigo-600 mb-6 px-10 ">Potential Income Computation</h1>
            <p class="leading-10 text-base mx-auto px-10">
              With our HelmetPro vending machines, you can tap into a lucrative market that is rapidly growing and evolving. These innovative machines not only provide a convenient solution for helmet cleaning but also present an exciting opportunity for entrepreneurs and business owners looking to diversify their income streams.

              Here’s a comprehensive breakdown of potential earnings based on various utilization assumptions. By analyzing different scenarios—such as operating hours, customer demand, and pricing strategies—you can gain valuable insights into how our vending machines can maximize your profitability. 
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Income Breakdown Cards -->
    <section class="text-gray-700 body-font py-20">
      <div class="container mx-auto px-5">
        <!-- Grid Layout -->
        <div class="grid gap-12 grid-cols-1 md:grid-cols-3">
          <!-- Assumption 1 -->
          <div
            class="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-left transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <!-- Heading -->
            <div class="mb-4 border-b-2 border-indigo-600 pb-2">
              <h2 class="font-semibold text-indigo-800 mb-2 uppercase">
                Assumption 1: 90-100% Utilization
              </h2>
              <p class="text-sm text-gray-500 ">
                If your machine is running (10 hours/day) throughout the day,
                servicing about
                <span class="font-bold">40 helmets daily:</span>
              </p>
            </div>
            <!-- Income Breakdown -->
            <div>
              <ul class="space-y-3 text-lg text-gray-600">
                <li ><span class="font-bold">Average Price Per Wash:</span> ₱100</li>
                <li>
                  <span class="font-bold">Daily Income:</span> ₱4,000
                  (₱100 x 40 helmets)
                </li>
                <li>
                  <span class="font-bold">Weekly Income:</span> ₱28,000
                  (₱4,000 x 7 days)
                </li>
                <li>
                  <span class="font-bold">Monthly Income:</span> ₱120,400
                  (₱28,000 x 4.3 weeks)
                </li>
              </ul>
            </div>
          </div>

          <!-- Assumption 2 -->
          <div
            class="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-left transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <!-- Heading -->
            <div class="mb-4 border-b-2 border-indigo-600 pb-2">
              <h2 class=" font-semibold text-indigo-800 mb-2 uppercase">
                Assumption 2: 50% Utilization
              </h2>
              <p class="text-sm text-gray-500 ">
                If your machine is running at half capacity, cleaning
                approximately
                <span class="font-bold">20 helmets daily:</span>
              </p>
            </div>
            <!-- Income Breakdown -->
            <div>
              <ul class="space-y-3 text-lg text-gray-600">
                <li><span class="font-bold">Average Price Per Wash:</span> ₱100</li>
                <li>
                  <span class="font-bold">Daily Income:</span> ₱2,000
                  (₱100 x 20 helmets)
                </li>
                <li>
                  <span class="font-bold">Weekly Income:</span> ₱14,000
                  (₱2,000 x 7 days)
                </li>
                <li>
                  <span class="font-bold">Monthly Income:</span> ₱60,200
                  (₱14,000 x 4.3 weeks)
                </li>
              </ul>
            </div>
          </div>

          <!-- Assumption 3 -->
          <div
            class="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-left transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <!-- Heading -->
            <div class="mb-4 border-b-2 border-indigo-600 pb-2">
              <h2 class=" font-semibold text-indigo-800 mb-2 uppercase">
                Assumption 3: 25% Utilization
              </h2>
              <p class="text-sm text-gray-500 ">
                If your machine is running at 25% capacity, cleaning around
                <span class="font-bold">10 helmets per day:</span>
              </p>
            </div>
            <!-- Income Breakdown -->
            <div>
              <ul class="space-y-3 text-lg text-gray-600">
                <li><span class="font-bold">Average Price Per Wash:</span> ₱100</li>
                <li>
                  <span class="font-bold">Daily Income:</span> ₱1,000
                  (₱100 x 10 helmets)
                </li>
                <li>
                  <span class="font-bold">Weekly Income:</span> ₱7,000
                  (₱1,000 x 7 days)
                </li>
                <li>
                  <span class="font-bold">Monthly Income:</span> ₱30,100
                  (₱7,000 x 4.3 weeks)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
