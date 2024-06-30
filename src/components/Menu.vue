<template>
    <div id="menu" class="menu w-full h-full">
        <div class="top-section mb-5">
            <h2 class="menu-title font-bold text-3xl mt-[15px]">MENU</h2>
            <div class="btn close-btn" @click="closeMenu">X</div>
        </div>
        <div class="menu-content flex justify-center items-center gap-5">
            <MenuItem @closeMenuFc="closeMenu" />
        </div>
    </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";

const closeMenu = () => {
    const menuElement = document.getElementById("menu");
    console.log("close menu");
    if (menuElement.classList.contains("active")) {
        menuElement.classList.remove("active");
    }
    // menuElement.classList.add("hide");
};
</script>

<style>
</style>