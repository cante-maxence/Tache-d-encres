<template>
    <div class="slider mt-16 mx-auto">
        <div>
            <h1 class="text-4xl font-bold text-white mb-10 sm:text-4xl xl:text-6xl">Galleries des Tattoo </h1>
        </div>

        <div class="slides grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
                <p
                    class="hidden absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
                    Texte de description pour l'image 1
                </p>
            </div>
            <div id="slide-2" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
                <p
                    class="hidden absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
                    Texte de description pour l'image 2
                </p>
            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
                <p
                    class="hidden absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
                    Texte de description pour l'image 1
                </p>
            </div>
            <div id="slide-2" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
                <p
                    class="hidden absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
                    Texte de description pour l'image 2
                </p>
            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
                <p
                    class="hidden absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
                    Texte de description pour l'image 1
                </p>
            </div>
            <div id="slide-1" class="rounded-lg overflow-hidden">
                <img class="w-full h-auto rounded-lg hover:scale-110 transition-all duration-300 ease-out"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
                <p
                    class="hidden absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
                    Texte de description pour l'image 1
                </p>
            </div>
        </div>

        <p class="my-4 text-base text-white lg:mt-8 sm:text-xl">20 Graph' à pêcher.</p>



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

.slider>a {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    background: white;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    margin: 0 0 0.5rem 0;
    position: relative;
}

.slider>a:active {
    top: 1px;
}

.slider>a:focus {
    background: #000;
}

/* Don't need button navigation */
@supports (scroll-snap-type) {
    .slider>a {
        display: none;
    }
}
</style>

