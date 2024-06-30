<template>
    <div class="menu-item">
        <div class="image-wraper flex flex-col justify-between items-center">
            <img
                src="../assets/grilled_fish.jpg"
                width="120"
                height="120"
                class="item-img"
                @click="selectItem"
            />
            <p class="item-name font-bold" @click="selectItem">Grilled fish</p>
            <p class="item-detail">+10 hunger</p>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from "../stores/AppStore";

const appStore = useAppStore();
const emit = defineEmits({
    closeMenuFc: [],
});
const selectItem = () => {
    console.log("select");
    appStore.updateStat({
        key: "hunger",
        value: appStore.cHunger + 10,
    });
    emit("closeMenuFc");
};
</script>

<style>
</style>