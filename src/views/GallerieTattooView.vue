<template>
    <div class="slider mt-16 mx-auto">
        <div>
            <h1 class="text-4xl font-bold text-white mb-10 sm:text-4xl xl:text-6xl">
                Galeries des tatouages
            </h1>
        </div>
        <div class="slides">
            <div id="slide-1">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
            </div>
            <div id="slide-2">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
            </div>
            <div id="slide-3">3</div>
            <div id="slide-4">4</div>
            <div id="slide-5">5</div>
            <div id="slide-6">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
            </div>
            <div id="slide-7">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
            </div>
            <div id="slide-8">8</div>
            <div id="slide-9">9</div>
            <div id="slide-10">10</div>
            <div id="slide-11">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
            </div>
            <div id="slide-12">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
            </div>
            <div id="slide-13">3</div>
            <div id="slide-14">4</div>
            <div id="slide-15">5</div>
            <div id="slide-16">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
            </div>
            <div id="slide-17">
                <img class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
            </div>
            <div id="slide-18">8</div>
            <div id="slide-19">9</div>
            <div id="slide-20">10</div>
        </div>
        <p class="my-4 text-base text-white lg:mt-8 sm:text-xl">
            20 tatouages à pêcher.
        </p>
    </div>
</template>

<style scoped>
.slider {
    width: 55%;
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

html,
body {
    height: 100%;

}

body {
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>