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
              <router-link to="/Politiques"
                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">


                <span class="mx-2 text-sm font-medium">Politiques</span>
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
          <div class="flex justify-center">
            <a href="/">
              <img class="logo-image mx-auto w-full sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-40" src="../src/assets/logoBlanc.png"
                alt="Logo représentant un poulpe sur fond noir">
            </a>
          </div>
        </a>


        <div class="flex flex-col justify-between  flex-1 mt-6">
          <nav class="-mx-3 space-y-6 ">
            <div class="space-y-3 ">
              <label
                class="px-3 bg-gradient-to-r bg-clip-text text-md text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold uppercase">Présentation</label>
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
                class="px-3  bg-gradient-to-r bg-clip-text text-md text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold uppercase dark:text-yellow-400">Informations</label>

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

              <router-link to="/Politiques"
                class="flex items-center px-3 py-2 bg-gradient-to-r bg-clip-text text-3xl text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 "
                href="#">


                <span class="mx-2 text-sm font-medium">Politiques</span>
              </router-link>


            </div>

            <div class="space-y-3 ">
              <label
                class="px-3  bg-gradient-to-r bg-clip-text text-md text-transparent leading-tight from-green-300 via-blue-500 to-purple-600 animate-fade-in font-extrabold  uppercase dark:text-yellow-400">Galleries</label>

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
</style>

