// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, 
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-gtag', 
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxtjs/sitemap', 
  ],
  css: [
    '~/assets/css/main.css',
    '@splidejs/splide/dist/css/splide.min.css'
  ],
  robots: [
    {
      UserAgent: '*',
      Disallow: ['/admin', '/private'],
      Allow: '/'
    }
  ],
  sitemap: {
    hostname: 'https://www.helmetprosolutions.com',
    gzip: true,
    routes: [
      {
        loc: '/',
        lastmod: new Date().toISOString(), 
        changefreq: 'daily', 
        priority: 1.0, 
        img: [
          {
            loc: 'https://www.helmetprosolutions.comhttps://utfs.io/f/txXKmXW6aEb8QZ5Lw9yHAEPL7YgWqRZ6OxFBNo1eiXVjKJv8',
            title: 'Home Image',
            caption: 'Welcome to HelmetPro'
          }
        ],
        video: [
          {
            content_loc: 'https://utfs.io/f/txXKmXW6aEb8KQel80RXNn0EGXtSxRZ4WkULbiwYf3cVAOzo',
            title: 'How Our Helmet Cleaning Vending Machine Works',
            description: 'This video provides a step-by-step guide on how to use the HelmetPro Cleaning Vending Machine.',
            thumbnail_loc: 'https://www.helmetprosolutions.comhttps://utfs.io/f/txXKmXW6aEb8fiKC3zIsdGCOeqaMtfRhVBpQvY7UJXEm3HSj',
            duration: 10600, 
          }
        ]
      },
      {
        loc: '/about',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
        img: [
          {
            loc: 'https://www.helmetprosolutions.comhttps://utfs.io/f/txXKmXW6aEb8jkAnbDcQseLHMGdXzShEm9I4Ub51Rgqy687T',
            title: 'About Us Image',
            caption: 'Learn more about HelmetPro'
          }
        ]
      },
      {
        loc: '/product',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.7,
        img: [
          {
            loc: 'https://utfs.io/f/txXKmXW6aEb85huVut1tfJ6kxXjH8hb2I7SpcqaDEZR3PzVF',
            title: 'Product Overview',
            caption: 'Insights on helmet cleaning and maintenance'
          }
        ]
      },
      {
        loc: '/computation',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly', 
        priority: 0.7,
        img: [
          {
            loc: 'https://www.helmetprosolutions.comhttps://utfs.io/f/txXKmXW6aEb8txXfl8W6aEb84pkeofOrBZgyztcT50XqICmH',
            title: 'Computation Image',
            caption: 'Income assumptions for HelmetPro'
          }
        ]
      },
      {
        loc: '/faqs',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.6,
        img: [
          {
            loc: 'https://utfs.io/f/txXKmXW6aEb8Zt8rQ5B50AjlLUvVGXit4FExcaJgSyRsd8Ko',
            title: 'FAQs Image',
            caption: 'Frequently Asked Questions'
          }
        ]
      },
      {
        loc: '/contactus',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.6,
        img: [
          {
            loc: 'https://utfs.io/f/txXKmXW6aEb8Pj7gjV6lR1PiHk73G6S29LbdaweDFNOmjcBz',
            title: 'Contact Us Image',
            caption: 'Get in touch with HelmetPro'
          }
        ]
      },
      {
        loc: '/partnership',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
        img: [
          {
            loc: 'https://utfs.io/f/txXKmXW6aEb8oVlrcJPsTc3VaUluMngjBrm6XEJwQ5PI9bxZ',
            title: 'Partnership Image',
            caption: 'Join us for partnership opportunities'
          }
        ]
      }

    ]
  },
  

 
  gtag: {
    tags: [
      {
        id : 'G-37QBP6H10E',
        config : {
          anonymize_ip: true,
          send_page_view: true
        },
        debug : false
      }
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en' 
      },
      title: 'HelmetPro - Helmet Cleaning Vending Machine Helmet',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // Responsive design
        { hid: 'description', name: 'description', content: 'Helmet Pro provides Helmet Cleaning Vending Machines for efficient helmet hygiene, offering rental, automatic dispenser, and superior cleaning solutions.' },// SEO description
        { name: 'publisher', content: 'HelmetPro Solutions Helmet Cleaning Vending Machine (Mr.Prize)' }, // Publisher meta tag
        { hid: 'keywords', name: 'keywords', content: 'HelmetPro, Helmet Cleaning Vending Machine, Helmet Cleaning Vendo Machine, Helmet Cleaning Service, Helmet Pro, helmetpro, helmet pro, helmetprosolutions' }, // Keywords for SEO
        { hid: 'og:title', property: 'og:title', content: 'HelmetPro' }, // Open Graph title
        { hid: 'og:description', property: 'og:description', content: 'Discover the Future of Helmet Cleaning!' }, // Open Graph description
        { hid: 'og:image', property: 'og:image', content: 'https://utfs.io/f/txXKmXW6aEb82U8cZjfEU1vzk5oN476tqYL8XVafsZglPhAm' }, // Open Graph image
        { hid: 'og:url', property: 'og:url', content: 'https://www.helmetprosolutions.com/' }, // Open Graph URL
        { hid: 'og:type', property: 'og:type', content: 'website' }, // Open Graph type
        { hid: 'fb:app_id', property: 'fb:app_id', content: 'YOUR_FACEBOOK_APP_ID' } // Facebook App ID
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon/favicon-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/favicon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }
        
      ],
      script: [
              {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "url": "https://www.helmetprosolutions.com",
                  "logo": "https://utfs.io/f/txXKmXW6aEb8GtNvJyEAIahDtJKVq2R3fcvu4n60Q1jAZ7Sk"
                }),
              },
              {
                src: 'https://embed.tawk.to/67243b532480f5b4f5971b2a/1ibioffge',
                type: 'text/javascript',
                hid: 'tawk-to',
                async: true,
                crossorigin: 'anonymous'
              },
              {
                src: 'https://static.elfsight.com/platform/platform.js',
                async: true
              }
              // {
              //   hid: 'tawk-to',
              //   innerHTML: `
              //     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              //     (function(){
              //       var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              //       s1.async=true;
              //       s1.src='https://embed.tawk.to/67243b532480f5b4f5971b2a/1ibioffge';
              //       s1.charset='UTF-8';
              //       s1.setAttribute('crossorigin','*');
              //       s0.parentNode.insertBefore(s1,s0);
              //     })();
              //   `,
              //   type: 'text/javascript',
              // }
            ],
            // __dangerouslyDisableSanitizersByTagID: {
            //   'tawk-to': ['innerHTML']
            // }
    }
  },

  
  runtimeConfig: {
    // This will make currencyKey available in browser as process.env.CURRENCY_API_KEY using -> const { currencyKey } = useRuntimeConfig() 
    // Check -> ([code].js file)
    currencyKey: process.env.CURRENCY_API_KEY
  },
  compatibilityDate: '2024-08-20',
  
})