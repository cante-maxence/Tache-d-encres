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
                            <span class="relative">F.A.Q</span>
                        </span>

                    </h2>

                </div>
            </div>
            <div class="space-y-4">
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(1)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Puis-je voir vos tarifs ?</p>
                        <div
                            :class="{ 'flex items-center justify-center w-8 h-8 border rounded-full transform rotate-180': isOpen[1], 'flex items-center justify-center w-8 h-8 border rounded-full': !isOpen[1] }">
                            <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200">
                                <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                            </svg>
                        </div>
                    </button>
                    <div v-if="isOpen[1]" class="p-4 pt-0">
                        <p class="text-gray-700">Nos tarifs varient en fonction de la taille, de la
                            complexité et de l'emplacement du tatouage. Nous offrons également des consultations gratuites
                            pour
                            discuter de votre projet de tatouage.</p>
                    </div>
                </div>
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(2)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Quelles sont vos disponibilités ?</p>
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
                        <p class="text-gray-700">Nous sommes ouverts de 11h à 19h du Lundi au Samedi. Vous pouvez également
                            prendre rendez-vous en ligne sur notre site web ou par
                            téléphone au 07 68 31 36 49.</p>
                    </div>
                </div>
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(3)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Tatouez-vous les mineurs ?</p>
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
                        <p class="text-gray-700">Nous ne tatouons pas les mineurs, conformément à la
                            législation en vigueur. Nous demandons également une pièce d'identité valide avant de commencer
                            toute séance de tatouage.</p>
                    </div>
                </div>
                <div class="border rounded shadow-sm">
                    <button @click="toggleContent(4)" type="button" aria-label="Open item" title="Open item"
                        class="flex items-center justify-between w-full p-4 focus:outline-none">
                        <p class="text-lg font-medium">Où êtes-vous
                            situés ?</p>
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
                        <p class="text-gray-700">Nous sommes localisés aux 40 Faubourg de france, 90000
                            Belfort.
                            Notre emplacement est facilement accessible et bien desservi par les transports en commun.</p>
                    </div>
                </div>
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
  