<template>
    <Sidebar />
    <v-container class="fill-height" fill-height fluid id="container">
        {{ globalData[0] }}
        <router-view v-slot="{ Component }">
            <transition name="slide" mode="out-in">
                <component :is="Component" :key="$route.path">
                </component>
            </transition>
        </router-view>
    </v-container>


</template>


<script setup lang="ts">
const props = defineProps<{
    globalData: string[]
}>()

</script>


<style lang="css">
.slide-enter-active,
.slide-leave-active {
    transition: opacity 1s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}

#container {
    background-color: red !important;
}
</style>