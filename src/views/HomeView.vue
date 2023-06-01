<template>
    <div class=" w-full ">
        <div class="relative grid  lg:grid-cols-2">
            <div class="max-w-7xl mx-auto ">
                <div class="relative z-0 pb-8  sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <div class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                        <div class="sm:text-center lg:text-left">
                            <img class="w-11/12 z-10 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl "
                                src="../assets/Tachencre-font-removebg-preview.png" alt="" />

                            <h1
                                class=" mb-10 bg-gradient-to-r  bg-clip-text text-3xl  text-transparent justify-center text-center leading-tight   lg:text-5xl from-green-300 via-blue-500 to-purple-600 animate-fade-in tracking-tight  font-extrabold text-white sm:text-5xl md:text-6xl">
                                <span class="block z-10 xl:inline">Votre nouveau tatouage</span>
                                <br />
                                <span class="block z-10 xl:inline"> à portée de tentacule.</span>
                            </h1>
                            <p
                                class="mt-3 text-base justify-center text-center text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Nous sommes une équipe de tatoueurs expérimentés, prêts à vous offrir un travail
                                personnalisé et de qualité.
                            </p>
                            <div class=" sm:mt-0 sm:ml-3 sm:flex sm:justify-center grid grid-cols-2">
                                <div>
                                    <router-link to="/GallerieGraph"
                                        class="relative inline-flex mt-5 items-center justify-center p-0.5 mb-2 mr-4 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                        <span
                                            class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Gallerie Graph
                                        </span>
                                    </router-link>
                                </div>
                                <div class=" sm:mt-0 sm:ml-3">
                                    <router-link to="/GallerieTattoo"
                                        class="relative inline-flex mt-5 items-center justify-center p-0.5 mb-2 mr-4 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                        <span
                                            class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Gallerie Tattoo
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <img class="relative hidden lg:block " src="../assets/tattoologo.png" alt="" />
        </div>

    </div>
</template>

<script setup>

</script>