<script setup>
import { RouterLink, RouterView } from "vue-router";


// Burger menus
document.addEventListener('DOMContentLoaded', function () {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }
});

</script>

<template>
  <body>
    <!-- navbar petit menu -->

    <nav class="relative visible w-full md:hidden  px-4 py-4 flex justify-between items-center bg-white">
      <a class="text-3xl font-bold leading-none" href="/">

        <img class="h-14" src="../src/assets/tattoologo.png" alt="Logo représentant un poulpe sur fond noir">

      </a>
      <div class="lg:hidden">
        <button class="navbar-burger  flex items-center text-blue-600 p-3">
          <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
        <li class="text-gray-300">

        </li>
        <li><a class="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
        <li class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
        <li class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
        <li class="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
      </ul>

    </nav>

    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-bold leading-none" href="/">


            <img class="h-12" src="../src/assets/tattoologo.png" alt="Logo représentant un poulpe sur fond noir">


          </a>
          <button class="navbar-close">
            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <div class="space-y-3 ">
              <label class="px-3 text-xs  text-gray-500 uppercase dark:text-gray-400">Présentation</label>

              <router-link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/salon">


                <span class="mx-2 text-sm font-medium">Salon</span>
              </router-link>

              <router-link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/Artiste">
                <span class="mx-2 text-sm font-medium">Artiste</span>
              </router-link>
            </div>

            <div class="space-y-3 ">
              <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Informations</label>

              <router-link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/contact">
                <span class="mx-2 text-sm font-medium">Contact</span>
              </router-link>

              <router-link to="/FAQ"
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">


                <span class="mx-2 text-sm font-medium">F.A.Q</span>
              </router-link>


            </div>

            <div class="space-y-3 ">
              <label class="px-3 text-xs text-gray-500  uppercase dark:text-gray-400">Galleries</label>

              <router-link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/GallerieTattoo">


                <span class="mx-2 text-sm font-medium">Tattouages</span>
              </router-link>

              <router-link
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/GallerieGraph">



                <span class="mx-2 text-sm font-medium">Graphes</span>
              </router-link>
            </div>
          </ul>
        </div>

      </nav>

    </div>

    <div class="flex h-screen">

      <!-- Grand menu -->

      <aside
        class=" flex-col w-min hidden bg-white bg-opacity-5 md:block lg:block xl:block px-5 py-8  border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <a href="/">
          <img class="logo-image" src="../src/assets/logoBlanc.png" alt="Logo représentant un poulpe sur fond noir">
        </a>

        <div class="flex flex-col justify-between  flex-1 mt-6">
          <nav class="-mx-3 space-y-6 ">
            <div class="space-y-3 ">
              <label
                class="px-3   bg-gradient-to-r bg-clip-text text-xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold uppercase">Présentation</label>

              <router-link
                class="flex items-center px-3 py-2 bg-gradient-to-r bg-clip-text text-3xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 "
                to="/salon">


                <span class="mx-2 text-sm font-medium">Salon</span>
              </router-link>

              <router-link
                class="flex items-center px-3 py-2 bg-gradient-to-r bg-clip-text text-3xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 "
                to="/Artiste">
                <span class="mx-2 text-sm font-medium">Artiste</span>
              </router-link>
            </div>

            <div class="space-y-3 ">
              <label
                class="px-3  bg-gradient-to-r bg-clip-text text-xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold uppercase dark:text-yellow-400">Questions</label>

              <router-link
                class="flex items-center px-3 py-2 bg-gradient-to-r bg-clip-text text-3xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 "
                to="/contact">
                <span class="mx-2 text-sm font-medium">Contact</span>
              </router-link>

              <router-link to="/FAQ"
                class="flex items-center px-3 py-2 bg-gradient-to-r bg-clip-text text-3xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 "
                href="#">


                <span class="mx-2 text-sm font-medium">F.A.Q</span>
              </router-link>


            </div>

            <div class="space-y-3 ">
              <label
                class="px-3  bg-gradient-to-r bg-clip-text text-xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold  uppercase dark:text-yellow-400">Galleries</label>

              <router-link
                class="flex items-center px-3 py-2 bg-gradient-to-r bg-clip-text text-3xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 "
                to="/GallerieTattoo">


                <span class="mx-2 text-sm font-medium">Tattouages</span>
              </router-link>

              <router-link
                class="flex items-center px-3 py-2 bg-gradient-to-r bg-clip-text text-3xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 "
                to="/GallerieGraph">



                <span class="mx-2 text-sm font-medium">Graphes</span>
              </router-link>
            </div>
          </nav>
        </div>
      </aside>

      <RouterView />
    </div>



    <div class="waveee hidden xl:block">



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



    <footer aria-label="Site Footer" class="bg-white z-30">
      <div class="max-w-screen-xl px-4 bg-white pb-4 mx-auto sm:px-6 ">


        <div class="pt-4  border-t border-gray-100 sm:flex sm:items-center sm:justify-between">
          <nav aria-label="Footer Navigation - Support">
            <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <router-link to="/Politiques" href="#" class="text-gray-500 transition hover:opacity-75">
                  Politiques de confidentialité
                </router-link>
              </li>



            </ul>
          </nav>

          <ul class="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
            <li>
              <a href="https://m.facebook.com/tachedencrestattoo//?ref=bookmarks" rel="noreferrer" target="_blank"
                class="text-gray-700 transition hover:opacity-75">
                <span class="sr-only">Facebook</span>

                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://instagram.com/tachedencrestattoo?igshid=MzRlODBiNWFlZA==" rel="noreferrer" target="_blank"
                class="text-gray-700 transition hover:opacity-75">
                <span class="sr-only">Instagram</span>

                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>

            <li>

            </li>
          </ul>
        </div>
      </div>
    </footer>





  </body>
</template>

<style>
.mobil {
  display: none
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.logo-image {
  max-width: 100%;
  /* Le logo ne dépassera jamais la taille de son conteneur */
  height: auto;
  /* La hauteur s'ajustera automatiquement pour maintenir les proportions du logo */

  /* Définir différentes tailles pour différentes résolutions d'écran */
  width: 100%;
  /* Taille par défaut pour les petits écrans */
}

/* Taille pour les écrans de taille moyenne */
@media (min-width: 768px) {
  .logo-image {
    max-width: 30rem;
    /* Ajustez la valeur en fonction de vos besoins */
  }
}

/* Taille pour les grands écrans */
@media (min-width: 1024px) {
  .logo-image {
    max-width: 40rem;
    /* Ajustez la valeur en fonction de vos besoins */
  }
}

/* Taille pour les très grands écrans */
@media (min-width: 1440px) {
  .logo-image {
    max-width: 50rem;
    /* Ajustez la valeur en fonction de vos besoins */
  }
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
  z-index: 20;
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

}

.waves {
  position: relative;
  width: 100%;
  height: 12vh;
  margin-bottom: -7px;
  z-index: -5;
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

