<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="first:flex first:h-screen">
    <aside
      class="flex flex-col w-min mr-10 px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <a href="#">
        <img class="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="">
      </a>

      <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-6 ">
          <div class="space-y-3 ">
            <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Présentation</label>

            <router-link
              class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="/salon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>

              <span class="mx-2 text-sm font-medium">Salon</span>
            </router-link>

            <router-link
              class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="/tatoueur">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>

              <span class="mx-2 text-sm font-medium">Tatoueur</span>
            </router-link>
          </div>

          <div class="space-y-3 ">
            <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">content</label>

            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>

              <span class="mx-2 text-sm font-medium">Guides</span>
            </a>

            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>

              <span class="mx-2 text-sm font-medium">Hotspots</span>
            </a>

            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>

              <span class="mx-2 text-sm font-medium">Checklists</span>
            </a>
          </div>

          <div class="space-y-3 ">
            <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Galleries</label>

            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#">
              <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 459.82 459.82" xml:space="preserve">
                <path
                  d="M458.648,213.641l-53.128-53.128c1.471-4.246,4.284-13.429,5.426-24.395c1.9-18.255-1.774-33.442-10.608-44.271
                                                                                                                                                                                                                                                  	c0.864-1.96,1.329-4.05,1.397-6.155l12.564-3.165l1.051,6.227c0.33,1.953,2.023,3.335,3.939,3.335c0.221,0,0.445-0.019,0.67-0.057
                                                                                                                                                                                                                                                  	l28.453-4.803c2.179-0.368,3.646-2.432,3.279-4.61l-3.325-19.699c-0.177-1.046-0.762-1.979-1.626-2.594
                                                                                                                                                                                                                                                  	c-0.865-0.614-1.939-0.859-2.984-0.685l-28.454,4.803c-1.046,0.177-1.979,0.762-2.594,1.626s-0.861,1.938-0.685,2.984l0.938,5.558
                                                                                                                                                                                                                                                  	l-12.899,3.249c-1.347-2.756-3.458-5.229-6.49-7.004c-5.664-3.316-12.913-2.987-18.188,0.918c-4.711,3.488-6.936,8.79-6.735,14.015
                                                                                                                                                                                                                                                  	l-9.028,2.275l1.955,7.758l9.301-2.344c0.703,1.21,1.554,2.356,2.589,3.392c1.378,1.378,2.946,2.443,4.613,3.234
                                                                                                                                                                                                                                                  	c2.981,6.526-0.104,19.573-3.721,29.245l-53.308-53.308c-0.75-0.75-1.768-1.172-2.829-1.172s-2.078,0.422-2.829,1.172
                                                                                                                                                                                                                                                  	L194.227,197.21l-15.745-15.745c-0.75-0.75-1.768-1.172-2.829-1.172s-2.078,0.422-2.829,1.172l-4.496,4.496l-4.283-4.284
                                                                                                                                                                                                                                                  	l13.39-13.39c1.562-1.562,1.562-4.094,0-5.656l-12.818-12.818c-1.562-1.562-4.095-1.562-5.657,0l-32.438,32.438
                                                                                                                                                                                                                                                  	c-1.562,1.562-1.562,4.095,0,5.656l12.818,12.818c0.781,0.781,1.805,1.172,2.829,1.172s2.047-0.391,2.829-1.172l13.39-13.39
                                                                                                                                                                                                                                                  	l4.283,4.284l-4.496,4.496c-1.562,1.562-1.562,4.094,0,5.656l7.371,7.371l-24.255,24.256l-2.924-2.924
                                                                                                                                                                                                                                                  	c-0.807-0.807-1.921-1.242-3.058-1.165l-16.651,0.956c-0.98,0.056-1.905,0.471-2.599,1.165l-67.491,67.49
                                                                                                                                                                                                                                                  	c-0.694,0.693-1.108,1.619-1.165,2.599l-0.955,16.651c-0.065,1.139,0.359,2.251,1.165,3.058l3.45,3.45l-19.049,19.05
                                                                                                                                                                                                                                                  	c-1.109,1.109-1.559,2.766-1.017,4.238c1.356,3.677,0.447,7.841-2.309,10.599c-2.689,2.688-6.617,3.621-10.247,2.434
                                                                                                                                                                                                                                                  	c-1.836-0.602-3.836,0.196-4.758,1.893l-9.231,16.997c-0.846,1.557-0.566,3.485,0.687,4.737l2.406,2.406l-6.374,6.374
                                                                                                                                                                                                                                                  	c-1.562,1.562-1.562,4.095,0,5.657h0c1.562,1.562,4.094,1.562,5.656,0l6.374-6.374l3.45,3.45c0.781,0.781,1.805,1.172,2.829,1.172
                                                                                                                                                                                                                                                  	s2.047-0.391,2.829-1.172l50.107-50.107l3.415,3.415c0.785,0.785,1.856,1.233,2.966,1.205c0.042-0.001,0.084-0.003,0.126-0.006
                                                                                                                                                                                                                                                  	l16.651-0.955c0.98-0.056,1.905-0.471,2.599-1.165l67.491-67.491c0.694-0.693,1.108-1.619,1.165-2.599l0.956-16.651
                                                                                                                                                                                                                                                  	c0.065-1.139-0.359-2.251-1.165-3.058l-2.924-2.924l24.255-24.256l7.371,7.371c0.75,0.75,1.768,1.172,2.829,1.172
                                                                                                                                                                                                                                                  	s2.078-0.422,2.829-1.172l14.649-14.649c1.562-1.562,1.562-4.094,0-5.656l-15.745-15.745l1.668-1.668l134.769,134.77
                                                                                                                                                                                                                                                  	c0.75,0.75,1.768,1.172,2.829,1.172s2.078-0.422,2.829-1.172l116.67-116.671C460.21,217.736,460.21,215.203,458.648,213.641z
                                                                                                                                                                                                                                                  	 M441.144,68.197l1.993,11.811l-20.565,3.471l-1.994-11.811L441.144,68.197z M142.17,192.24l-7.162-7.161l26.781-26.78l7.162,7.161
                                                                                                                                                                                                                                                  	L142.17,192.24z M19.48,387.652l-6.572-6.571l6.367-11.725c5.498,0.717,11.05-1.117,15.069-5.136
                                                                                                                                                                                                                                                  	c4.31-4.311,6.108-10.527,4.902-16.412l17.471-17.471l10.039,10.038L19.48,387.652z M158.929,276.455l-65.335,65.336l-13.34,0.766
                                                                                                                                                                                                                                                  	l-25.716-25.717l0.765-13.34l65.336-65.335l13.339-0.766l25.716,25.716L158.929,276.455z M158.039,250.145l-11.09-11.09
                                                                                                                                                                                                                                                  	l24.255-24.256l11.09,11.09L158.039,250.145z M198.151,230.432l-31.489-31.489l8.993-8.992l31.489,31.489L198.151,230.432z
                                                                                                                                                                                                                                                  	 M379.124,79.085c1.672-1.672,3.869-2.508,6.065-2.508s4.394,0.836,6.065,2.508c3.345,3.345,3.345,8.787,0,12.132
                                                                                                                                                                                                                                                  	c-3.344,3.344-8.787,3.344-12.131,0C375.78,87.872,375.78,82.429,379.124,79.085z M385.015,122.183
                                                                                                                                                                                                                                                  	c2.196-8.264,2.797-15.136,1.819-20.546c2.994-0.296,5.914-1.415,8.417-3.332c13.03,17.688,7.368,44.149,3.895,55.834
                                                                                                                                                                                                                                                  	l-18.637-18.637C381.672,132.664,383.532,127.767,385.015,122.183z M406.737,215.948l-68.112,68.112l-37.768-37.768l68.112-68.112
                                                                                                                                                                                                                                                  	L406.737,215.948z M322.4,279.149l-4.282,4.282L301.487,266.8l4.282-4.282L322.4,279.149z M328.056,284.805l7.74,7.74
                                                                                                                                                                                                                                                  	c0.75,0.75,1.768,1.172,2.829,1.172s2.078-0.422,2.829-1.172l73.769-73.77c1.562-1.562,1.562-4.095,0-5.656l-7.74-7.74l4.282-4.282
                                                                                                                                                                                                                                                  	l12.757,12.757l-87.991,87.99l-12.757-12.757L328.056,284.805z M401.826,199.723l-16.631-16.631l4.283-4.282l16.631,16.631
                                                                                                                                                                                                                                                  	L401.826,199.723z M379.538,177.435l-7.74-7.74c-0.75-0.75-1.768-1.172-2.829-1.172s-2.078,0.422-2.829,1.172l-73.769,73.77
                                                                                                                                                                                                                                                  	c-1.562,1.562-1.562,4.095,0,5.656l7.74,7.74l-4.282,4.282l-29.083-29.083l4.282-4.282l7.74,7.74c0.75,0.75,1.768,1.172,2.829,1.172
                                                                                                                                                                                                                                                  	s2.078-0.422,2.829-1.172l73.77-73.77c0.75-0.75,1.171-1.768,1.171-2.828s-0.421-2.078-1.171-2.828l-7.74-7.74l4.282-4.282
                                                                                                                                                                                                                                                  	l29.083,29.083L379.538,177.435z M349.71,158.92l-68.113,68.112l-37.768-37.768l68.112-68.111L349.71,158.92z M265.372,222.122
                                                                                                                                                                                                                                                  	l-4.282,4.282l-16.631-16.631l4.282-4.282L265.372,222.122z M344.798,142.695l-16.631-16.63l4.283-4.283l16.631,16.631
                                                                                                                                                                                                                                                  	L344.798,142.695z M322.511,120.408l-7.74-7.74c-1.563-1.563-4.095-1.562-5.657,0l-73.769,73.769c-1.562,1.562-1.562,4.095,0,5.656
                                                                                                                                                                                                                                                  	l7.74,7.74l-4.282,4.282l-20.084-20.084l87.991-87.991l20.084,20.084L322.511,120.408z M339.149,327.483l-131.941-131.94
                                                                                                                                                                                                                                                  	l5.854-5.854l120.64,120.641c0.75,0.75,1.768,1.172,2.829,1.172s2.078-0.422,2.829-1.172l93.647-93.647
                                                                                                                                                                                                                                                  	c1.562-1.562,1.562-4.095,0-5.656L312.366,90.385l5.856-5.856l131.941,131.94L339.149,327.483z" />
              </svg>

              <span class="mx-2 text-sm font-medium">Tattoo</span>
            </a>

            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#">
              <svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">

                <g>
                  <path class="st0"
                    d="M438.024,210.133c0,7.488,6.08,13.551,13.551,13.551c7.488,0,13.569-6.063,13.569-13.551
                                                                                                                                                                                                                                                        		c0-7.479-6.081-13.552-13.569-13.552C444.104,196.581,438.024,202.654,438.024,210.133z" />
                  <path class="st0"
                    d="M400.097,376.503c-5.994,0-10.842,4.856-10.842,10.85c0,5.986,4.848,10.832,10.842,10.832
                                                                                                                                                                                                                                                        		c5.994,0,10.841-4.847,10.841-10.832C410.938,381.359,406.091,376.503,400.097,376.503z" />
                  <path class="st0"
                    d="M382.758,415.376c-12.284,0-22.238,9.956-22.238,22.238c0,12.274,9.955,22.229,22.238,22.229
                                                                                                                                                                                                                                                        		c12.283,0,22.238-9.955,22.238-22.229C404.997,425.332,395.041,415.376,382.758,415.376z" />
                  <circle class="st0" cx="137.251" cy="426.904" r="16.8" />
                  <path class="st0"
                    d="M94.425,359.164c-4.778,0-8.669,3.874-8.669,8.678c0,4.778,3.892,8.66,8.669,8.66
                                                                                                                                                                                                                                                        		c4.796,0,8.67-3.883,8.67-8.66C103.094,363.038,99.22,359.164,94.425,359.164z" />
                  <path class="st0"
                    d="M54.865,151.063c6.29,0,11.38-5.1,11.38-11.389c0-6.281-5.09-11.38-11.38-11.38
                                                                                                                                                                                                                                                        		c-6.289,0-11.38,5.099-11.38,11.38C43.485,145.963,48.576,151.063,54.865,151.063z" />
                  <path class="st0"
                    d="M165.97,97.952c8.374,0,15.166-6.793,15.166-15.185c0-8.365-6.792-15.158-15.166-15.158
                                                                                                                                                                                                                                                        		s-15.168,6.794-15.168,15.158C150.802,91.158,157.596,97.952,165.97,97.952z" />
                  <path class="st0"
                    d="M450.775,300.632c-47.586-16.887-56.968-10.485-80.214-32.515c-5.56-5.255-5.438-22.49,25.47-18.425
                                                                                                                                                                                                                                                        		c15.497,2.042,26.008-6.506,26.008-18.702c0-8.131-9.799-19.433-24.393-13.821c-21.126,8.131-34.834-1.094-37.388-11.38
                                                                                                                                                                                                                                                        		c-3.25-13.004,0.434-27.832,54.814-54.996c66.646-33.332,28.423-93.983-23.924-36.859c-23.194,25.296-34.14,35.764-49.584,43.895
                                                                                                                                                                                                                                                        		c-13.864,7.288-30.49-0.27-17.895-17.069c4.882-6.507,13.17-11.527,15.445-19.511c3.249-11.38-6.324-21.952-14.628-21.952
                                                                                                                                                                                                                                                        		c-8.304,0-18.694,4.874-21.943,17.07c-4.882,22.359-17.322,21.24-23.194,14.785c-11.241-12.318-7.193-26.686-5.264-48.924
                                                                                                                                                                                                                                                        		c2.276-26.121,17.738-86.443-29.709-81.995c-22.88,2.146-29.639,23.715-22.238,62.267c9.208,47.856-4.725,81.257-19.597,88.007
                                                                                                                                                                                                                                                        		c-17.878,8.13-26.946,5.046-65.029-21.126c-20.24-13.926-42.584-1.703-47.152,14.628c-4.031,14.385,7.332,31.768,24.393,37.396
                                                                                                                                                                                                                                                        		c26.286,8.678,37.944,10.693,50.14,17.33c11.918,6.507,13.412,22.282,1.511,36.554c-11.918,14.282-42.705,2.468-88.224-0.782
                                                                                                                                                                                                                                                        		c-78.685-5.611-60.999,81.43,12.996,55.831c42.27-14.637,60.147-11.389,67.479-2.441c10.112,12.344,3.162,29.031-16.54,40.915
                                                                                                                                                                                                                                                        		c-62.858,37.944,7.61,85.078,33.618,32.515c10.876-21.961,23.385-28.71,35.756-23.846c10.094,3.979,23.02,39.204,8.409,86.72
                                                                                                                                                                                                                                                        		C206.885,466.473,207.771,512,238.33,512c28.563,0,33.028-42.539,28.164-88.875c-1.808-17.339-0.47-44.207,13.012-50.948
                                                                                                                                                                                                                                                        		c10.842-5.421,27.781-11.458,39.283,12.457c10.58,21.951,33.34,18.693,42.287,6.506c6.532-8.921,9.851-28.71-16.157-38.969
                                                                                                                                                                                                                                                        		c-30.995-12.249-19.615-45.58,3.961-42.323c26.026,3.588,43.868,13.17,74.794,39.569
                                                                                                                                                                                                                                                        		C466.829,386.233,522.234,325.989,450.775,300.632z" />
                </g>
              </svg>

              <span class="mx-2 text-sm font-medium">Graphes</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>


    <div class="px-4 mx-auto rounded-md max-h-96 mt-16 bg-blue-800 max-w-7xl sm:px-6 lg:px-8">
      <div class="2xl:pl-24">
        <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
          <div class="text-center md:py-16 xl:py-24 md:text-left">
            <blockquote>
              <p class="text-2xl font-semibold leading-relaxed text-gray-900">“Amet minim mollit non deserunt ullamco
                est
                sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.”</p>
            </blockquote>
            <div class="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
              <p class="text-base font-semibold text-gray-900">Jenny Wilson</p>
              <p class="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">Project Manager at Microsoft</p>
            </div>
            <p class="mt-12 text-base text-gray-900 lg:mt-20">Want to see Celebration in action?</p>
            <a href="#" title=""
              class="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
              role="button"> Create your first website </a>
          </div>

          <div class="relative">
            <img class="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png" alt="" />
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="waveee">

    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>

  <footer aria-label="Site Footer" class="bg-white">
    <div class="max-w-screen-xl px-4  pb-4 mx-auto sm:px-6 ">


      <div class="pt-4  border-t border-gray-100 sm:flex sm:items-center sm:justify-between">
        <nav aria-label="Footer Navigation - Support">
          <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>
        </nav>

        <ul class="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
          <li>
            <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
              <span class="sr-only">Facebook</span>

              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>

          <li>
            <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
              <span class="sr-only">Instagram</span>

              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>

          <li>
            <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
              <span class="sr-only">Twitter</span>

              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>

          <li>
            <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
              <span class="sr-only">GitHub</span>

              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>

          <li>
            <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
              <span class="sr-only">Dribbble</span>

              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}



body {
  margin: 0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}

p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #000000;
}

.waveee {
  position: relative;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 60px;
  width: 100%;

}

.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 12vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;

}

/* Animation */

.parallax>use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
}
</style>

<script>

</script>