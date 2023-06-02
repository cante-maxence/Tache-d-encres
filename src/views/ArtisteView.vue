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

                        Passionné de dessin, les années 90 et l'arrivée du mouvement Hip-Hop avec ses valeurs, son énergie
                        et sa richesse m'ont propulsé dans l'univers du graffiti. Autodidacte, je me suis perfectionné sur
                        le terrain, challenge après challenge. L'abeille est devenue ma signature.<br />

                        À partir de 2006, j'ai commencé à vivre de mon art, même si je ne roulais pas sur l'or, je
                        persévérais. En 2016, je me suis intéressé à l'univers du tatouage et à ses codes. En 2018, j'ai
                        ouvert mon premier salon. Aujourd'hui, ce qui m'anime dans ce domaine, c'est de travailler sur des
                        projets personnels, d'échanger et de partager avec mes clients afin d'aboutir à des créations
                        uniques.<br />

                        "Tout tatoueur passionné peut transformer votre corps en œuvre d'art."


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