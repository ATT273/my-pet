<template>
    <div class="main-game">
        <div class="bg-wrapper"></div>
        <div class="pet-container">
            <div class="pet" :class="`stage-${form}`">
                <div
                    v-for="bubble in statusBubbles"
                    :key="bubble"
                    class="status-bubble-wrapper"
                >
                    <Bubble :status="bubble" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useAppStore } from "../stores/AppStore";
import Bubble from "../components/Bubble.vue";

const appStore = useAppStore();
const form = ref(1);
watch(
    () => appStore.curLvl,
    () => {
        if (appStore.evolveMark.includes(appStore.curLvl)) {
            console.log("evolve");
            form.value += 1;
        }
    }
);
watch(
    () => appStore.cEnergy,
    () => {
        if (appStore.cEnergy === 100) {
            console.log("awake");
            appStore.changeState("awake");
        }
    }
);
appStore.$subscribe(() => {
    if (appStore.cEnergy < 40 && !statusBubbles.value.includes("energy")) {
        statusBubbles.value.push("energy");
    } else if (
        appStore.cEnergy > 20 &&
        statusBubbles.value.includes("energy")
    ) {
        statusBubbles.value = statusBubbles.value.filter((i) => i !== "energy");
    }
    if (appStore.cHunger < 40 && !statusBubbles.value.includes("hunger")) {
        statusBubbles.value.push("hunger");
    } else if (
        appStore.cHunger > 40 &&
        statusBubbles.value.includes("hunger")
    ) {
        statusBubbles.value = statusBubbles.value.filter((i) => i !== "hunger");
    }
    if (appStore.cThirst < 40 && !statusBubbles.value.includes("thirst")) {
        statusBubbles.value.push("thirst");
    } else if (
        appStore.cThirst > 40 &&
        statusBubbles.value.includes("thirst")
    ) {
        statusBubbles.value = statusBubbles.value.filter((i) => i !== "thirst");
    }
    if (appStore.cHappy < 40 && !statusBubbles.value.includes("happy")) {
        statusBubbles.value.push("happy");
    } else if (appStore.cHappy > 40 && statusBubbles.value.includes("happy")) {
        statusBubbles.value = statusBubbles.value.filter((i) => i !== "happy");
    }
    if (appStore.cHygiene < 40 && !statusBubbles.value.includes("hygiene")) {
        statusBubbles.value.push("hygiene");
    } else if (
        appStore.cHygiene > 40 &&
        statusBubbles.value.includes("hygiene")
    ) {
        statusBubbles.value = statusBubbles.value.filter(
            (i) => i !== "hygiene"
        );
    }
});
const statusBubbles = ref([]);
console.log(statusBubbles.value);
</script>

<style scoped lang="css">
.pet.stage-1 {
    background-color: aqua
}
.pet.stage-2 {
    background-color: palevioletred
}
.pet.stage-3 {
    background-color: peru
}
</style>