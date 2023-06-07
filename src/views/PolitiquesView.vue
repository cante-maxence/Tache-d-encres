<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div class="flex flex-col mb-16 sm:text-center">

                <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                    <h2
                        class="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor"
                                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7" x="0" y="0" width=".1" height=".30">
                                        <circle cx="1" cy="1" r=".7"></circle>
                                    </pattern>
                                </defs>
                                <rect fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)" width="72" height="24"></rect>
                            </svg>
                            <span class="relative">Politique de confidentialité de Taches d'Encres</span>
                        </span>

                    </h2>

                </div>
            </div>
            <div class="space-y-4">
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(1)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Définition </p>
                        <div
                            :class="{ 'flex items-center justify-center w-8 h-8 border rounded-full transform rotate-180': isOpen[1], 'flex items-center justify-center w-8 h-8 border rounded-full': !isOpen[1] }">
                            <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200">
                                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                            </svg>
                        </div>
                    </button>
                    <div v-if="isOpen[1]" class="p-4 pt-0">
                        <p class="text-gray-700">Chez Taches d'Encres, nous sommes engagés à protéger votre
                            vie
                            privée
                            et à
                            protéger vos données personnelles. Nous respectons la confidentialité de vos informations et
                            nous nous
                            engageons
                            à les protéger en conformité avec les lois et réglementations applicables en matière de
                            protection des
                            données.
                            Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et
                            partageons les
                            informations que nous collectons auprès de vous sur notre site web.</p>
                    </div>
                </div>
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(2)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Collecte d'informations</p>
                        <div
                            :class="{ 'flex items-center justify-center w-8 h-8 border rounded-full transform rotate-180': isOpen[2], 'flex items-center justify-center w-8 h-8 border rounded-full': !isOpen[2] }">
                            <svg viewBox="0 0 24 24"
                                class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                            </svg>
                        </div>
                    </button>
                    <div v-if="isOpen[2]" class="p-4 pt-0">
                        <p class="text-gray-700">Lorsque vous utilisez notre site web, nous pouvons collecter certaines
                            informations personnelles vous concernant, y compris votre nom, votre adresse e-mail. Nous
                            pouvons également
                            collecter des informations sur la manière dont vous utilisez notre site web, telles que les
                            pages que vous
                            visitez et les actions que vous effectuez.</p>
                    </div>
                </div>
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(3)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Utilisation des informations</p>
                        <div
                            :class="{ 'flex items-center justify-center w-8 h-8 border rounded-full transform rotate-180': isOpen[3], 'flex items-center justify-center w-8 h-8 border rounded-full': !isOpen[3] }">
                            <svg viewBox="0 0 24 24"
                                class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                            </svg>
                        </div>
                    </button>
                    <div v-if="isOpen[3]" class="p-4 pt-0">
                        <p class="text-gray-700">Nous utilisons les informations que nous collectons auprès de vous pour
                            fournir
                            et améliorer notre site web, pour répondre à vos demandes, pour communiquer avec vous, pour vous
                            informer
                            des
                            offres et des promotions que nous proposons, pour traiter vos paiements et pour tout autre
                            objectif
                            légitime.</p>
                    </div>
                </div>
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(4)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Modifications de la politique de confidentialité</p>
                        <div
                            :class="{ 'flex items-center justify-center w-8 h-8 border rounded-full transform rotate-180': isOpen[4], 'flex items-center justify-center w-8 h-8 border rounded-full': !isOpen[4] }">
                            <svg viewBox="0 0 24 24"
                                class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                            </svg>
                        </div>
                    </button>
                    <div v-if="isOpen[4]" class="p-4 pt-0">
                        <p class="text-gray-700">Nous pouvons modifier cette politique de confidentialité de temps à autre.
                            Si
                            nous apportons des modifications importantes à cette politique de confidentialité, nous vous en
                            informerons
                            par
                            e-mail ou en publiant une notification sur notre site web.</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="flex justify-center align-center h-100">
            <div>
                <button type="button"
                    class="px-4 py-3 mt-10 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex">

                    <RouterLink class="transition-all duration-200" to="/contrat">
                        Contrat
                    </RouterLink>
                </button>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    data() {
        return {
            isOpen: {
                1: false,
                2: false,
                3: false,
                4: false,
            },
        };
    },
    methods: {
        toggleContent(index) {
            this.isOpen[index] = !this.isOpen[index];
        },
    },
};
</script>

<style scoped>
p,
span,
h2 {
    color: #fff
}
</style>
  