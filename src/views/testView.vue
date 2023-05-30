<template>
    <div class="container mx-auto px-4 h-60 py-20">
        <h1 class="relative mb-10 font-semibold text-4xl uppercase text-gray-800">Gallery</h1>

        <div class="flex flex-row w-full h-3/4">
            <div class="flex-1 item "><img src="../assets/hibou.png" /></div>
            <div class="flex-1 item "><img src="../assets/graph/aka.png" /></div>
            <div class="flex-1 item "><img src="../assets/graph/bat2.jpeg" /></div>
            <div class="flex-1 item "><img src="../assets/graph/goldorak.jpeg" /></div>
            <div class="flex-1 item "><img src="../assets/graph/3dauto.jpeg" /></div>
        </div>
    </div>
</template>

<style scoped>
.item {
    background-position: center;
    background-size: initial;
    background-repeat: no-repeat;
    transition: flex 0.8s ease;
}

.item:hover {
    flex: 7;
}
</style>