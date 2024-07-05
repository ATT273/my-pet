<template>
    <div class="action-container">
        <div class="button-group flex justify-center items-center gap-6">
            <button class="btn rounded" @click="rest">Sleep</button>
            <button class="btn rounded" @click="() => showMenu('food')">
                Eat
            </button>
            <button class="btn rounded" @click="() => showMenu('drink')">
                Drink
            </button>
            <button class="btn rounded" @click="() => showMenu('game')">
                Play
            </button>
            <button class="btn rounded" @click="clean">Clean</button>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
const showMenu = (menuType) => {
    const menuElement = document.getElementById("menu");
    appStore.changeMenu(menuType);
    menuElement.classList.add("active");
};

const rest = () => {
    appStore.changeState("sleep");
};

const clean = () => {
    appStore.updateStat({
        key: "hygiene",
        value: 100,
    });
};
</script>

<style>
</style>