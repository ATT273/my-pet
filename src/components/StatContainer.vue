<template>
    <div class="stat-container flex justify-between items-center">
        <StatDetail title="Energy" :value="appStore.cEnergy" />
        <StatDetail title="Happy" :value="appStore.cHappy" />
        <StatDetail title="Hunger" :value="appStore.cHunger" />
        <StatDetail title="Thirst" :value="appStore.cThirst" />
        <StatDetail title="Hygiene" :value="appStore.cHygiene" />
    </div>
    <div class="xp-container">
        <StatDetail title="EXP" :value="appStore.xp" />
    </div>
</template>

<script setup>
import StatDetail from "./StatDetail.vue";
import { useAppStore } from "../stores/AppStore";
import { onUnmounted } from "vue";

const appStore = useAppStore();

const calculateStats = setInterval(() => {
    if (appStore.state === "awake") {
        appStore.dropStat({ type: "all" });
    }

    if (appStore.state === "sleep") {
        appStore.raiseStat({ type: "energy" });
    }
}, 10000);

const checkStats = setInterval(() => {
    if (appStore.state === "awake" && appStore.cEnergy === 0) {
        appStore.changeState("sleep");
    }
}, 1000);
onUnmounted(() => {
    clearInterval(calculateStats);
    clearInterval(checkStats);
});
</script>

<style>
</style>