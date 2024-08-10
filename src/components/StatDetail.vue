<template>
    <div class="stat-detail grow-1 flex flex-wrap">
        <h3 class="title">{{ title }}</h3>
        <div class="stat-process__group">
            <div class="max-stat"></div>
            <div
                v-if="title !== 'EXP'"
                class="current-stat"
                :style="{ width: value + 'px' }"
            ></div>
            <div
                v-if="title === 'EXP'"
                class="current-stat xp"
                :style="{ width: currPrg + 'px' }"
            >
                {{ appStore.curLvl }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from "../stores/AppStore";
import { computed, ref } from "vue";
const props = defineProps({
    title: String,
    value: Number,
});
const appStore = useAppStore();
let currPrg = ref(0);
const baseXP = 100;
appStore.$subscribe(() => {
    currPrg.value = (appStore.curXp / appStore.lvlXp) * 100;
});
</script>

<style>
</style>