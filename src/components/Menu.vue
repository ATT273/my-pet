<template>
    <div id="menu" class="menu w-full h-full p-5">
        <div class="top-section mb-5">
            <h2 class="menu-title font-bold text-3xl mt-[15px]">MENU</h2>
            <div
                class="btn close-btn flex justify-center items-center font-extrabold border-black border-2"
                @click="closeMenu"
            >
                X
            </div>
        </div>
        <div
            class="menu-content flex justify-normal items-center gap-5 flex-wrap"
        >
            <div v-for="item in menuItems" :key="item.name">
                <MenuItem :item="item" @closeMenuFc="closeMenu" />
            </div>
        </div>
    </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
import { useAppStore } from "../stores/AppStore";
import { ref, computed } from "vue";

const appStore = useAppStore();
const menuItems = computed(() => {
    if (appStore.menuType === "food") {
        return appStore.foodInventory;
    } else if (appStore.menuType === "drink") {
        return appStore.drinkInventory;
    }
});
const changeMenuItems = () => {
    if (appStore.menuType === "food") {
        menuItems.value = appStore.foodInventory;
    } else if (appStore.menuType === "drink") {
        menuItems.value = appStore.drinkInventory;
    }
};
// changeMenuItems();
const closeMenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement.classList.contains("active")) {
        menuElement.classList.remove("active");
    }
};
</script>

<style>
</style>