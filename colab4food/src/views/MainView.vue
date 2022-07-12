<template>

    <v-app>

        <TheSidebar></TheSidebar>

        <TheTopBar></TheTopBar>
        <v-main fixed id="container">

            <v-container fluid>
                <router-view v-slot="{ Component }">

                    <transition name="slide" mode="out-in">
                        <component :is="Component" :key="$route.path"></component>
                    </transition>
                </router-view>
            </v-container>

        </v-main>
    </v-app>

</template>

<script setup lang="ts">

import TheTopBarVue from "@/components/TheTopBar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import TheTopBar from "../components/TheTopBar.vue";

defineProps<{
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
    width: 100%
}
</style>