<template>
    <div class="slider mt-16 mx-auto">
        <div>
            <h1
                class="mb-10 bg-gradient-to-r from-green-300via-blue-500to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent  leading-tight text-white  lg:text-5xl from-green-300 via-blue-500 to-purple-600 animate-fade-in  sm:text-4xl xl:text-6xl">
                Galleries des Graph'</h1>
        </div>

        <div class="slides grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/3dauto.jpeg" alt="">

            </div>
            <div id="slide-2" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/aka.png" alt="">

            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/bat1.jpeg" alt="">

            </div>
            <div id="slide-2" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/bat2.jpeg" alt="">

            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/bat3.jpeg" alt="">

            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/goldorak.jpeg" alt="">

            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/guepe.jpeg" alt="">

            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="../assets/graph/église.jpeg" alt="">

            </div>
        </div>

        <div class="flex flex-wrap mt-10 justify-center">

            <div class="m-3">
                <a href="https://m.facebook.com/tachedencrestattoo/"
                    class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span class="mx-auto">Facebook</span>
                </a>
            </div>
            <div class="m-3">
                <a href="https://instagram.com/tachedencrestattoo?igshid=MzRlODBiNWFlZA=="
                    class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-pink-500 hover:border-pink-500 hover:bg-pink-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span class="mx-auto">Instagram</span>
                </a>
            </div>

        </div>
    </div>
</template>

<style scoped>
.slider {
    width: 80%;
    text-align: center;


}

.slides {
    display: flex;
    padding-bottom: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;



    scroll-behavior: smooth;



}

.slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.slides::-webkit-scrollbar-thumb {
    background: whitesmoke;

    border-radius: 10px;
}

.slides::-webkit-scrollbar-track {
    background: transparent;
}

.slides>div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
    margin-right: 50px;
    border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
}





img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

