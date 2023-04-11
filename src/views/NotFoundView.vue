<style type="text/css">
.text-9xl {
    font-size: 14rem;
}

@media(max-width: 645px) {
    .text-9xl {
        font-size: 5.75rem;
    }

    .text-6xl {
        font-size: 1.75rem;
    }

    .text-2xl {
        font-size: 1rem;
        line-height: 1.2rem;
    }

    .py-8 {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .px-6 {
        padding-left: 1.2rem;
        padding-right: 1.2rem;
    }

    .mr-6 {
        margin-right: 0.5rem;
    }

    .px-12 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

html,
body {
    overflow: hidden;
}
</style>


<template>
    <div class="bg-gradient-to-r from-indigo-900 to-blue-200 w-8/12 h-5/6 mt-6 m-auto rounded-3xl">
        <div class="w-9/12 m-auto  min-h-screen flex  items-center justify-center">
            <div class="bg-white shadow overflow-hidden -mt-44 sm:rounded-lg pb-8">
                <div class="border-t border-gray-200 text-center pt-8">
                    <h1 class="text-9xl font-bold text-purple-400">404</h1>
                    <h1 class="text-6xl font-medium py-8">Dommage !</h1>
                    <p class="text-2xl pb-8 px-12 font-medium">La page que vous cherchez n'existe pas. Elle a
                        peut-être été déplacée ou supprimée.</p>
                    <router-link to="/"
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span
                            class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Accueil
                        </span>
                    </router-link>
                    <router-link to="/contact"
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span
                            class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contactez-moi
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>