<template>
    <section class="pt-20 mx-auto md:pt-0 sm:pt-24 2xl:pt-24 grid grid-cols-1 text-center ">
        <div class="px-6 mx-auto sm:px-8 lg:px-10 max-w-7xl">
            <div class=" items-center gap-8 ">
                <div class="md:mt-24">
                    <h2
                        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent leading-tight text-white sm:text-5xl lg:text-6xl">
                        Salut 👋 moi c'est <br class="block sm:hidden" />Lox
                    </h2>
                    <p class=" mt-6 text-xl leading-relaxed text-gray-200">
                        "Un tatoueur talentueux peut transformer un corps en une œuvre d'art."<br />
                        Retrouve-moi dans mon salon et vite, on a un tatouage à faire.
                    </p>
                    <p class="mt-8 text-xl text-gray-400">
                        <span class="relative inline-block">
                            <span class="absolute inline-block w-full bottom-0.5 h-2 bg-teal-200"></span>
                            <span class="relative text-white">Une question ?</span>
                        </span><br class="block sm:hidden" />
                        Regarde sur la page
                        <RouterLink class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                            to="/FAQ">
                            F.A.Q
                        </RouterLink>
                        ou pose-la moi directement sur la page
                        <RouterLink class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                            to="/contact">
                            Contact.
                        </RouterLink>
                    </p>
                </div>

                <div class="relative flex justify-center">
                    <img class="absolute inset-0 mx-auto w-3/5 mt-10" src="../assets/Photo-pro.jpeg" alt="" />
                </div>

            </div>
        </div>
    </section>
</template>