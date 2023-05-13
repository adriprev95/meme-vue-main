<template>
    <header>
        <div
            class="flex flex-wrap justify-center content-center bg-gray-500 flex-col fixed w-full h-36 sm:h-40 md:h-44 lg:h-48">
            <span class="text-center font-sans text-4xl font-bold text-gray-200">Memeramdun</span>
        </div>
    </header>
    <section class="bg-gray-900">
        <div v-if="memeObj">
            <div class=" mx-24 sm:mx-10 flex flex-wrap justify-center content-center gap-4 pt-52">
                <div v-for="meme, index in memeObj.data.memes" :key="index">
                    <div class="w-64 h-72 ">
                        <img :src="meme.url" alt="" class="w-64 h-56 object-cover">
                        <div class="flex flex-grow flex-col bg-gray-800 h-16">
                            <p class="text-gray-200 text-center py-2 font-semibold">{{ `"${meme.name}"` }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const memeObj = ref(null)

fetch('https://api.imgflip.com/get_memes')
    .then(async (res) => (memeObj.value = await res.json()));
</script>

<style scoped></style>