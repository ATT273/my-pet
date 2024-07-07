<template>
    <div class="main-game">
        <div class="bg-wrapper"></div>
        <div class="pet-container">
            <div class="pet">
                <div
                    v-for="bubble in statusBubles"
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
appStore.$subscribe(() => {
    if (appStore.cEnergy < 40 && !statusBubles.value.includes("energy")) {
        statusBubles.value.push("energy");
    } else if (appStore.cEnergy > 20 && statusBubles.value.includes("energy")) {
        statusBubles.value = statusBubles.value.filter((i) => i !== "energy");
    }
    if (appStore.cHunger < 40 && !statusBubles.value.includes("hunger")) {
        statusBubles.value.push("hunger");
    } else if (appStore.cHunger > 40 && statusBubles.value.includes("hunger")) {
        statusBubles.value = statusBubles.value.filter((i) => i !== "hunger");
    }
    if (appStore.cThirst < 40 && !statusBubles.value.includes("thirst")) {
        statusBubles.value.push("thirst");
    } else if (appStore.cThirst > 40 && statusBubles.value.includes("thirst")) {
        statusBubles.value = statusBubles.value.filter((i) => i !== "thirst");
    }
    if (appStore.cHappy < 40 && !statusBubles.value.includes("happy")) {
        statusBubles.value.push("happy");
    } else if (appStore.cHappy > 40 && statusBubles.value.includes("happy")) {
        statusBubles.value = statusBubles.value.filter((i) => i !== "happy");
    }
    if (appStore.cHygiene < 40 && !statusBubles.value.includes("hygiene")) {
        statusBubles.value.push("hygiene");
    } else if (
        appStore.cHygiene > 40 &&
        statusBubles.value.includes("hygiene")
    ) {
        statusBubles.value = statusBubles.value.filter((i) => i !== "hygiene");
    }
});
const statusBubles = ref([]);
</script>

<style>
</style>