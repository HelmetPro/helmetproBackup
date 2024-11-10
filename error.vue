<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
      <p class="text-8xl font-extrabold text-gray-800">{{ error.statusCode }}</p>
      <p class="text-2xl font-semibold text-gray-600 mt-4">Sleep is very important</p>
      <p class="text-xl text-gray-500 mt-2">{{ error.message }}</p>
      <button class="btn my-7" @click="handleClearError">GO Home...</button>
    </div>
  </div>
</template>

<script setup>
  defineProps(['error'])

  const handleClearError = () => clearError({ redirect: '/' })
</script>
