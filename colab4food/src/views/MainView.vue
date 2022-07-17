<template>

    <v-app>

        <TheSidebar app elevate-on-scroll scroll-target="#scrolling-techniques-7"></TheSidebar>
        <TheTopBar app></TheTopBar>



        <!-- <v-main id="container" scroll-off-screen> -->


        <UiBottomSheet></UiBottomSheet>
        <v-container fluid id="container" class=" fill-height">

            <v-main id="container1">
                <router-view v-slot="{ Component }">

                    <transition name="slide" mode="out-in">

                        <component :is="Component" :key="$route.path" app></component>
                    </transition>
                </router-view>
            </v-main>
        </v-container>
        <v-footer app color="purple">
            reggr
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">
import TheSidebar from "../components/TheSidebar.vue";
import TheTopBar from "../components/TheTopBar.vue";


defineProps<{
    globalData: string[]
}>()

function onResize() {
    //64px is v-app-bar height in your case
    //@ts-ignore
    // document.querySelector(".scrollable").style.height = (window.innerHeight - 200) + 'px';
}


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
    background-color: rgb(153, 141, 141) !important;
    width: 100%
}

#container1 {
    background-color: rgb(180, 170, 180) !important;
    width: 100%
}

/* html {
    overflow-y: hidden !important;
} */

/* 
.scrollable {
    overflow-y: scroll !important;
} */

/* #{

} */
</style>