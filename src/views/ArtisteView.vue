<template>
    <section class="pt-10 -ml-10 overflow-hidden w-full  md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Salut 👋 moi c'est <br
                            class="block sm:hidden" />Jenny Carter</h2>
                    <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-200 md:mt-8">"Un tatoueur talentueux peut
                        transformer un corps en une œuvre d'art."</p>

                    <p class="mt-4 text-xl text-gray-400 md:mt-8">
                        <span class="relative inline-block">
                            <span class="absolute inline-block w-full bottom-0.5 h-2 bg-teal-200"></span>
                            <span class="relative text-white"> Une question ? </span>
                        </span>
                        <br class="block sm:hidden" /> Regarde sur la page <RouterLink
                            class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline" to="/FAQ">
                            F.A.Q</RouterLink> ou pose
                        la moi
                        directement sur la page <RouterLink
                            class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline" to="/FAQ">
                            Contact.</RouterLink>
                    </p>
                </div>

                <div class="relative">
                    <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                    <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>
