<template>
  <div class="bg-gradient-to-r from-blue-300 to-teal-100 py-10">
      <!-- <section class="text-gray-600 body-font">
        <div class="container lg:px-5 py-10 mx-auto flex flex-wrap">
          <div ref="product_feature_img" class="lg:w-1/2 w-full mb-5 lg:mb-0   ">
            <NuxtImg  alt="Helmet Cleaning Vending Machine Features" class="object-cover object-center lg:rounded-l-3xl h-full w-full" src="https://utfs.io/f/txXKmXW6aEb8buTxLy7Or9xj5E7ZDSuNWKeaAFwzvVt2mhdR" loading="lazy" />
          </div>

            <div class="flex flex-col flex-wrap lg:py-6 rounded-r-3xl lg:w-1/2 lg:pl-12 lg:text-left p-5 lg:p-0 bg-white">
                <div class="flex flex-col mb-5 items-start">  
                  <div class="flex flex-col lg:flex-row justify-between items-start w-full lg:py-4 lg:pr-5">
                    <div class="mb-4 lg:mb-0">
                        <h1 class="text-gray-900 font-semibold text-2xl lg:text-5xl">Product Features</h1>
                        <h2 class="text-gray-400 text-lg font-semibold">Helmet Cleaning Machine</h2>
                    </div>
                    <NuxtLink 
                        href="/how-it-works" 
                        class="text-orange-600 hover:text-orange-800 text-lg font-medium flex items-center mt-2 lg:mt-0">
                        How it Works
                        <svg 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            class="w-5 h-5 ml-2" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M7 17l10-10M17 17V7h-10" />
                        </svg>
                    </NuxtLink>
                </div>
                      <div ref="product_feature_svg1" class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#4F46E5"><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
                    </div>
                    <div  class="flex-grow">
                        <h2 ref="product_feature_title1" class="text-gray-900 text-lg title-font mb-3 font-semibold">Dry Cleaning</h2>
                        <p ref="product_feature_paragraph1" class="leading-relaxed text-base">Utilizes advanced dry cleaning technology to effectively remove dirt and grime without using water, ensuring helmets are clean and safe for use.</p>
                    </div>
                </div>
                <div class="flex flex-col mb-4 items-start">
                    <div ref="product_feature_svg2" class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#4F46E5"><path d="M96 32l0 96 128 0 0-96c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32zm0 128c-53 0-96 43-96 96L0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-208c0-53-43-96-96-96L96 160zm64 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM384 48c0-1.4-1-3-2.2-3.6L352 32 339.6 2.2C339 1 337.4 0 336 0s-3 1-3.6 2.2L320 32 290.2 44.4C289 45 288 46.6 288 48c0 1.4 1 3 2.2 3.6L320 64l12.4 29.8C333 95 334.6 96 336 96s3-1 3.6-2.2L352 64l29.8-12.4C383 51 384 49.4 384 48zm76.4 45.8C461 95 462.6 96 464 96s3-1 3.6-2.2L480 64l29.8-12.4C511 51 512 49.4 512 48c0-1.4-1-3-2.2-3.6L480 32 467.6 2.2C467 1 465.4 0 464 0s-3 1-3.6 2.2L448 32 418.2 44.4C417 45 416 46.6 416 48c0 1.4 1 3 2.2 3.6L448 64l12.4 29.8zm7.2 100.4c-.6-1.2-2.2-2.2-3.6-2.2s-3 1-3.6 2.2L448 224l-29.8 12.4c-1.2 .6-2.2 2.2-2.2 3.6c0 1.4 1 3 2.2 3.6L448 256l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L480 256l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6c0-1.4-1-3-2.2-3.6L480 224l-12.4-29.8zM448 144c0-1.4-1-3-2.2-3.6L416 128 403.6 98.2C403 97 401.4 96 400 96s-3 1-3.6 2.2L384 128l-29.8 12.4c-1.2 .6-2.2 2.2-2.2 3.6c0 1.4 1 3 2.2 3.6L384 160l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L416 160l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6z"/></svg>
                    </div>
                    <div class="flex-grow">
                        <h2 ref="product_feature_title2" class="text-gray-900 text-lg title-font mb-3 font-semibold">Disinfection and Sterilization</h2>
                        <p ref="product_feature_paragraph2" class="leading-relaxed text-base">Employs UV-C light technology to disinfect helmets, effectively killing harmful bacteria and viruses for enhanced hygiene.</p>
                    </div>
                </div>
                <div class="flex flex-col mb-4 items-start">
                    <div ref="product_feature_svg3" class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#4F46E5"><path d="M128 0l64 0c17.7 0 32 14.3 32 32l0 96L96 128l0-96c0-17.7 14.3-32 32-32zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 208c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    </div>
                    <div class="flex-grow">
                        <h2 ref="product_feature_title3" class="text-gray-900 text-lg title-font mb-3 font-semibold">Deodorization</h2>
                        <p ref="product_feature_paragraph3" class="leading-relaxed text-base">Uses an innovative deodorizing process to eliminate odors, leaving helmets smelling fresh and clean.</p>
                    </div>
                </div>
                <div class="flex flex-col mb-4 items-start">
                    <div ref="product_feature_svg4" class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 500" fill="#4F46E5"><path d="M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C249.8 332.6 256 349.5 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L128 112zM176 0C114.1 0 64 50.1 64 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L288 112C288 50.1 237.9 0 176 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L192 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM480 160l32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 288c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288z" /></svg>
                    </div>
                    <div class="flex-grow">
                        <h2 ref="product_feature_title4" class="text-gray-900 text-lg title-font mb-3 font-semibold">Tumble Dry on High Heat</h2>
                        <p ref="product_feature_paragraph4" class="leading-relaxed text-base">Features a tumble-dry mechanism that safely dries helmets on high heat, ensuring they're ready for immediate use.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section class="text-gray-600 body-font">
        <div class="container lg:px-5 pb-10 mx-auto flex flex-wrap">

          <div  class="lg:hidden block w-full  lg:rounded-t-3xl overflow-hidden">
            <NuxtImg  alt="Helmet Cleaning Vending Machine Specifications" class="object-cover object-center h-full w-full" src="https://utfs.io/f/txXKmXW6aEb8QZ5Lw9yHAEPL7YgWqRZ6OxFBNo1eiXVjKJv8" loading="lazy" />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 lg:rounded-l-3xl lg:w-1/2 lg:pl-12 text-left p-5 lg:p-0 bg-white">
            <div class="flex flex-col mb-5 items-start ">              
              <div class="flex flex-col lg:flex-row justify-between items-start w-full ">
                    <div class="mb-4 lg:mb-0">
                      <h1 ref="product_specifications_h1" class="text-gray-900 font-semibold text-2xl lg:text-5xl">Product Specifications</h1>
                      <h2 ref="product_specifications_h2" class="text-gray-400 text-lg font-semibold mb-5">Helmet Cleaning Vending Machine</h2>
                    </div>

                </div>
              <div  class=" rounded flex h-full items-center">
                <svg ref="product_specifications_svg1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <h2 ref="product_specifications_title1" class="text-gray-900 text-lg title-font font-medium ">Advertising Sticker Area</h2>
              </div>
              <div class="flex-grow">
                <p ref="product_specifications_paragraph1" class="leading-relaxed text-slate-400 text-sm">Customize with brand or promotional stickers for enhanced visibility and marketing impact.</p>
              </div>
            </div>

              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title2" class="text-gray-900 text-lg title-font font-medium ">Weight: 105kg</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph2" class="leading-relaxed text-slate-400 text-sm">Built with sturdy materials, the machine weighs 105kg, ensuring stability during operation.</p>
                </div>
              </div>


              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title3" class="text-gray-900 text-lg title-font font-medium ">Height: 1720mm</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph3" class="leading-relaxed text-slate-400 text-sm">A towering 1720mm height for optimal user interaction and ease of use.</p>
                </div>
              </div>


              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title4" class="text-gray-900 text-lg title-font font-medium "> Width: 560mm</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph4" class="leading-relaxed text-slate-400 text-sm">A width of 560mm, allowing for a compact yet functional design.</p>
                </div>
              </div>


              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title5" class="text-gray-900 text-lg title-font font-medium ">Length: 560mm</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph5" class="leading-relaxed text-slate-400 text-sm">Streamlined with a length of 560mm, fitting seamlessly into various spaces.</p>
                </div>
              </div>


              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title6" class="text-gray-900 text-lg title-font font-medium ">HD Touch All-In-One</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph6" class="leading-relaxed text-slate-400 text-sm">Features an HD touch display for smooth, intuitive interaction.</p>
                </div>
              </div>


              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title7" class="text-gray-900 text-lg title-font font-medium ">Breathe Ambient Lighting</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph7" class="leading-relaxed text-slate-400 text-sm">Elegant ambient lighting for an enhanced visual experience and user comfort.</p>
                </div>
              </div>

              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title8" class="text-gray-900 text-lg title-font font-medium ">Helmet Washing Area</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph8" class="leading-relaxed text-slate-400 text-sm">Dedicated area for washing helmets, providing convenience and hygiene.</p>
                </div>
              </div>

              <div class="flex flex-col mb-5 items-start ">
                <div class=" rounded flex h-full items-center">
                  <svg ref="product_specifications_svg9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <h2 ref="product_specifications_title9" class="text-gray-900 text-lg title-font font-medium "> Coin Ware</h2>
                </div>
                <div class="flex-grow">
                  <p ref="product_specifications_paragraph9" class="leading-relaxed text-slate-400 text-sm">Equipped with a coin ware for easy, cash-based transactions.</p>
                </div>
              </div>

              <div class="lg:pr-4">
                <p class="info-text text-slate-400 mt-2 p-5 lg:p-0 lg:pr-4">
                    Discover the innovative features and functionalities of our Helmet Cleaning Vending Machine. 
                    <NuxtLink 
                        href="/how-it-works" 
                        class="text-orange-600 hover:text-orange-800 text-lg font-medium items-center inline-flex"
                    >
                        <span>How it Works</span>
                        <svg 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            class="w-5 h-5 ml-1" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M7 17l10-10M17 17V7h-10" />
                        </svg>
                    </NuxtLink>
                </p>
            </div>


          </div>
          <div ref="product_specifications_img" class="hidden lg:block lg:w-1/2 w-full mb-5 lg:mb-0   ">
            <NuxtImg alt="Helmet Cleaning Vendo Machine" class="object-cover object-center rounded-r-3xl h-full w-full" src="https://utfs.io/f/txXKmXW6aEb8QZ5Lw9yHAEPL7YgWqRZ6OxFBNo1eiXVjKJv8" loading="lazy" />
          </div>
        </div>
      </section> -->


    <!-- Section One -->
    <section>
      <div class="container lg:px-5 pb-10 mx-auto flex flex-wrap ">
        <div ref="image1" class="w-full lg:flex hidden justify-center mb-6 md:mb-0">
          <NuxtImg class="object-cover w-full h-auto rounded-t-3xl shadow-lg " alt="Helmet Cleaning Service" src="https://utfs.io/f/txXKmXW6aEb8MTAlHo00qvQAcuWwpTLrRzC692dKMVjkGx1g" loading="lazy"/>
        </div>
        <div ref="image_mobile1" class="lg:hidden w-full flex justify-center mb-6 md:mb-0">
          <NuxtImg class="object-cover w-full h-auto rounded-3xl shadow-lg " alt="Helmet Cleaning Service" src="https://utfs.io/f/txXKmXW6aEb8IDbrmMKSrAUb9D5fERNjXTZunqmiy0PpVt7v" loading="lazy"/>
        </div>
        <div ref="paragraph1" class="px-4 w-full  flex flex-col items-center md:items-start  md:text-left p-4 md:p-10 rounded-b-3xl shadow-2xl bg-slate-100">
          <h1 class="lg:text-5xl text-indigo-700 py-2">Deep-Clean Technology</h1>
          <h2 class="text-gray-900  py-2">360 Degrees of Clean</h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            Experience 360 Degrees of Clean with Zero Dead Ends! Our innovative <strong>helmet washing vending machine</strong> guarantees a thorough dry clean that leaves no corner untouched. Say goodbye to dirt and odors while ensuring your helmet is sanitized and ready for your next adventure.
          </p>
            <NuxtLink 
                href="/how-it-works" 
                class="text-orange-600 hover:text-orange-800 text-lg font-medium flex items-center mt-2 lg:mt-0">
                How it Works
                <svg 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    class="w-5 h-5 ml-2" 
                    viewBox="0 0 24 24"
                >
                    <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
            </NuxtLink>
        </div>
      </div>

      <div class="container lg:px-5 pb-10 mx-auto flex flex-wrap">
        <div ref="image2" class="lg:flex hidden w-full justify-center mb-6 md:mb-0">
          <NuxtImg class="object-cover w-full h-auto rounded-t-3xl shadow-lg " alt="Helmet Pro" src="https://utfs.io/f/txXKmXW6aEb8rbGmXnHHSJkm2IYFgA6RpltDVBb8uPzN3jc9" loading="lazy"/>
        </div>
        <!-- Mobile view -->
        <div ref="image_mobile2" class="lg:hidden w-full flex justify-center mb-6 md:mb-0">
          <NuxtImg class="object-cover w-full h-auto rounded-3xl shadow-lg " alt="Turbo-Dry System" src="https://utfs.io/f/txXKmXW6aEb8ZsXxzeQB50AjlLUvVGXit4FExcaJgSyRsd8K" loading="lazy"/>
        </div>
        <div ref="paragraph2" class="px-4 md:px-10 w-full  flex flex-col items-center md:items-start  md:text-left p-4 md:p-10 rounded-b-3xl shadow-2xl bg-slate-100">
          <h1 class=" lg:text-5xl text-indigo-700 py-2">Turbo-Dry System</h1>
          <h2 class="text-gray-900  py-2">High-temperature drying</h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            Our <strong>helmet cleaning</strong> machine utilizes cutting-edge technology to deliver high-temperature drying combined with powerful stereo airflow, ensuring your helmets dry rapidly and thoroughly after each cleaning cycle.
          </p>
          <NuxtLink 
                href="/how-it-works" 
                class="text-orange-600 hover:text-orange-800 text-lg font-medium flex items-center mt-2 lg:mt-0">
                How it Works
                <svg 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  class="w-5 h-5 ml-2" 
                  viewBox="0 0 24 24"
              >
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
            </NuxtLink>
        </div>
      </div>

      <div class="container lg:px-5 pb-10 mx-auto flex flex-wrap">
        <div ref="image3" class="w-full lg:flex hidden justify-center mb-6 md:mb-0">
          <NuxtImg class="object-cover w-full h-auto rounded-t-3xl shadow-lg " alt="Bacteria-Busting Power" src="https://utfs.io/f/txXKmXW6aEb8FMHeo3ttnfW6FTJVZcOL5ixKq0k3E9SaDv2H" loading="lazy"/>
        </div>
        <!-- Mobile view -->
        <div ref="image_mobile3" class="lg:hidden w-full flex justify-center mb-6 md:mb-0">
          <NuxtImg class="object-cover w-full h-auto rounded-3xl shadow-lg " alt="Bacteria-Busting Power" src="https://utfs.io/f/txXKmXW6aEb8AdicGwFPlv2UYGwEDixosRSVBd59ujqzIcF8" loading="lazy"/>
        </div>
        <div ref="paragraph3" class="px-4 md:px-10 w-full  flex flex-col items-center md:items-start  md:text-left p-4 md:p-10 rounded-b-3xl shadow-2xl bg-slate-100">
          <h1 class=" lg:text-5xl text-indigo-700 py-2">Bacteria-Busting Power</h1>
          <h2 class="text-gray-900  py-2"> Eliminate 99.9% of germs</h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            Eliminate 99.9% of germs and bacteria with the <strong>helmet cleaning vendo machine</strong>. It’s designed to deliver unmatched cleanliness and long-lasting freshness, so your helmet stays safe and hygienic for every ride.
          </p>
          <NuxtLink 
              href="/how-it-works" 
              class="text-orange-600 hover:text-orange-800 text-lg font-medium flex items-center mt-2 lg:mt-0">
              How it Works
              <svg 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                class="w-5 h-5 ml-2" 
                viewBox="0 0 24 24"
            >
                <path d="M7 17l10-10M17 17V7h-10" />
              </svg>
            </NuxtLink>
        </div>
      </div>
    </section>

    <section > 
      <div class="container lg:px-5 pb-10 mx-auto flex flex-wrap ">
      <!-- Glass card effect with vibrant gradient, enhanced blur and shadow -->
      <div class="bg-gradient-to-r from-blue-500 to-teal-700 bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-lg p-5 lg:p-12 ">
        <div class="relative z-10">
          <!-- Headline with bold font and glowing text effect -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate__animated animate__fadeInUp 
                    text-shadow-lg">
            We Customize Your Helmet Cleaning Vending Machine
          </h1>
          
          <!-- Description with increased contrast for readability -->
          <p class="text-lg sm:text-xl text-white opacity-90 mb-8 max-w-3xl ">
            Make your helmet cleaning machine an unforgettable experience. With our rebranding service, we design a machine that reflects your brand’s identity and captivates your customers. Stand out, make an impact, and leave a lasting impression.
          </p>
          
          <!-- Call-to-action button with vibrant, engaging hover effect -->
          <NuxtLink 
              href="/our-service" 
              class="text-white hover:text-black text-lg font-medium flex items-center mt-2 lg:mt-0">
              Learn More
              <svg 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                class="w-5 h-5 ml-2" 
                viewBox="0 0 24 24"
            >
                <path d="M7 17l10-10M17 17V7h-10" />
              </svg>
            </NuxtLink>
        </div>
      </div>
    </div>
  </section>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAnimations } from '@/composables/useAnimations';


const product_feature_img = ref(null);
const product_feature_svg1 = ref(null);
const product_feature_svg2 = ref(null);
const product_feature_svg3 = ref(null);
const product_feature_svg4 = ref(null);
const product_feature_title1 = ref(null);
const product_feature_title2 = ref(null);
const product_feature_title3 = ref(null);
const product_feature_title4 = ref(null);
const product_feature_paragraph1 = ref(null);
const product_feature_paragraph2 = ref(null);
const product_feature_paragraph3 = ref(null);
const product_feature_paragraph4 = ref(null);

// Product Specifications
const product_specifications_h1 = ref(null);
const product_specifications_h2 = ref(null);
const product_specifications_img = ref(null);

const product_specifications_svg1 = ref(null);
const product_specifications_svg2 = ref(null);
const product_specifications_svg3 = ref(null);
const product_specifications_svg4 = ref(null);
const product_specifications_svg5 = ref(null);
const product_specifications_svg6 = ref(null);
const product_specifications_svg7 = ref(null);
const product_specifications_svg8 = ref(null);
const product_specifications_svg9 = ref(null);

const product_specifications_title1 = ref(null);
const product_specifications_title2 = ref(null);
const product_specifications_title3 = ref(null);
const product_specifications_title4 = ref(null);
const product_specifications_title5 = ref(null);
const product_specifications_title6 = ref(null);
const product_specifications_title7 = ref(null);
const product_specifications_title8 = ref(null);
const product_specifications_title9 = ref(null);


const product_specifications_paragraph1 = ref(null);
const product_specifications_paragraph2 = ref(null);
const product_specifications_paragraph3 = ref(null);
const product_specifications_paragraph4 = ref(null);
const product_specifications_paragraph5 = ref(null);
const product_specifications_paragraph6 = ref(null);
const product_specifications_paragraph7 = ref(null);
const product_specifications_paragraph8 = ref(null);
const product_specifications_paragraph9 = ref(null);


const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const image_mobile1 = ref(null);
const image_mobile2 = ref(null);
const image_mobile3 = ref(null);
const paragraph1 = ref(null);
const paragraph2 = ref(null);
const paragraph3 = ref(null);


const { setupAnimations } = useAnimations();


setupAnimations([
  // Product Features
  {
    element: product_feature_img,
    props: { x: ['-100%', '0%'], opacity: [0, 1], scale: [0.95, 1] },
    options: { duration: 0.6, easing: 'ease-in-out', delay: 0 },
  },
  {
    element: product_feature_svg1,
    props: { y: ['-100%', '0%'], opacity: [0, 1], scale: [0.9, 1] },
    options: { duration: 0.6, easing: 'ease-in-out', delay: 0.1 },
  },
  {
    element: product_feature_svg2,
    props: { y: ['-100%', '0%'], opacity: [0, 1], scale: [0.9, 1] },
    options: { duration: 0.6, easing: 'ease-in-out', delay: 0.2 },
  },
  {
    element: product_feature_svg3,
    props: { y: ['-100%', '0%'], opacity: [0, 1], scale: [0.9, 1] },
    options: { duration: 0.6, easing: 'ease-in-out', delay: 0.3 },
  },
  {
    element: product_feature_svg4,
    props: { y: ['-100%', '0%'], opacity: [0, 1], scale: [0.9, 1] },
    options: { duration: 0.6, easing: 'ease-in-out', delay: 0.4 },
  },
  {
    element: product_feature_title1,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.5 },
  },
  {
    element: product_feature_title2,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.6 },
  },
  {
    element: product_feature_title3,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.7 },
  },
  {
    element: product_feature_title4,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.8 },
  },
  {
    element: product_feature_paragraph1,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.5 },
  },
  {
    element: product_feature_paragraph2,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.6 },
  },
  {
    element: product_feature_paragraph3,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.7 },
  },
  {
    element: product_feature_paragraph4,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-in-out', delay: 0.8 },
  },



  // Product Specifications
  {
    element: product_specifications_h1,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_h2,
    props: { y: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_img,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },

  {
    element: product_specifications_svg1,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg2,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg3,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg4,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg5,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg6,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg7,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg8,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_svg9,
   props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },


  {
    element: product_specifications_title1,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title2,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title3,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title4,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title5,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title6,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title7,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title8,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: product_specifications_title9,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },


  {
    element: product_specifications_paragraph1,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph2,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph3,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph4,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph5,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph6,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph7,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph8,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: product_specifications_paragraph9,
   props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },




  
  {
    element: image_mobile1,
    props: { y: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: image_mobile2,
    props: { y: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: image_mobile3,
    props: { y: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: image1,
    props: { y: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: image2,
    props: { y: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: image3,
    props: { y: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' },
  },
  {
    element: paragraph1,
    props: { y: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: paragraph2,
    props: { y: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
  {
    element: paragraph3,
    props: { y: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 },
  },
]);



</script>

<style scoped>

.link {
  color: #007bff; 
  text-decoration: underline;
  transition: color 0.3s; 
}

.link:hover {
  color: #0056b3; /* Darker color on hover */
}

img:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}


</style>
