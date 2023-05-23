<template>
    <div class=" w-full flex justify-center">

        <section class="mt-11 sm:mt-4 md:mt-10 lg:mt-40 xl:mt-40  ">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="grid  grid-cols-1  lg:grid-cols-2 lg:flex-col">
                    <div class="md-10">
                        <p class="text-base font-semibold tracking-wider text-white uppercase">Un salon de tatouage
                            Belfortain</p>
                        <h1
                            class="mt-4 text-4xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  text-transparent text-white lg:mt-8 sm:text-4xl xl:text-6xl">
                            Le corps est votre
                            toile, notre salon est votre pinceau.</h1>
                        <p class="mt-4 text-base text-white lg:mt-8 sm:text-xl">Des tatouages encré dans votre esprit et
                            votre peau.</p>
                        <router-link to="/GallerieTattoo"
                            class="relative mt-10 inline-flex p-0.5 mb-2 mr-4 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span
                                class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Découvrir
                            </span>
                        </router-link>
                    </div>

                    <video class="w-full h-full object-cover" autoplay muted loop>
                        <source src="../assets/Video.mp4" type="video/mp4">

                    </video>
                </div>
            </div>
        </section>

    </div>
</template>