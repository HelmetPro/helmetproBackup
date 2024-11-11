export default defineNuxtRouteMiddleware((to, from) => {
  const baseUrl = 'https://www.helmetprosolutions.com'; // Your base URL
  const canonicalUrl = `${baseUrl}${to.fullPath}`;

  // Access `useHead` to dynamically set the head for the canonical link
  useHead({
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  });
});
