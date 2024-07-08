<template>
    <div class="status-bubble show">
        <img
            src="../assets/bubble.png"
            width="120"
            height="120"
            class="absolute bubble"
            alt="status bubble"
        />
        <img
            :src="getImageURL(type)"
            width="30"
            height="30"
            class="bubble-icon"
            :alt="type"
        />
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useAppStore } from "../stores/AppStore";
import { getImageURL } from "../utils/images-utils";

const appStore = useAppStore();
const props = defineProps({
    status: String,
});
const type = computed(() => {
    switch (props.status) {
        case "hunger":
            return bubbleIcons.value.hunger;
        case "thirst":
            return bubbleIcons.value.thirst;
        case "happy":
            return bubbleIcons.value.happy;
        case "hygiene":
            return bubbleIcons.value.hygiene;
        case "energy":
            return bubbleIcons.value.energy;

        default:
            break;
    }
    return props.status;
});

const bubbleIcons = ref({
    hunger: "hamburger.png",
    thirst: "water1.png",
    happy: "ball.png",
    hygiene: "shower.png",
    energy: "sleepz.png",
});
</script>

<style>
</style>