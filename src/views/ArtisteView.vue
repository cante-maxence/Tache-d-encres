<template>
    <section class="pt-10  mx-auto md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 lg:grid-cols-2">
                <div class="md:mt-20">
                    <h2
                        class="bg-gradient-to-r from-green-300via-blue-500to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent  leading-tight text-white sm:text-4xl lg:text-5xl from-green-300 via-blue-500 to-purple-600 animate-fade-in">
                        Salut 👋
                        moi c'est <br class="block sm:hidden" />Loïc Clerici</h2>
                    <p class="max-w-lg  mt-3 text-xl leading-relaxed text-gray-200 md:mt-8 animate-slide-up">"Un tatoueur
                        talentueux peut
                        transformer un corps en une œuvre d'art." <br>Retrouve moi
                        dans mon salon et vite, on a un tatouage a faire.</p>


                    <p class="mt-4 text-xl text-gray-400 md:mt-8 animate-slide-up">
                        <span class="relative inline-block">
                            <span class="absolute inline-block w-full bottom-0.5 h-2 bg-teal-200"></span>
                            <span class="relative text-white"> Une question ? </span>
                        </span>
                        <br class="block sm:hidden" /> Regarde sur la page <RouterLink
                            class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline" to="/FAQ">
                            F.A.Q</RouterLink> ou pose la moi directement sur la page <RouterLink
                            class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                            to="/contact">Contact.</RouterLink>
                    </p>
                </div>

                <div class="relative">
                    <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                    <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 animate-slide-left"
                        src="../assets/Photo-pro.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 1s ease;
}

.animate-slide-up {
    animation: slideUp 1s ease;
}

.animate-float-up {
    animation: floatUp 5s ease infinite;
}

.animate-slide-left {
    animation: slideLeft 1s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}



@keyframes slideLeft {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
