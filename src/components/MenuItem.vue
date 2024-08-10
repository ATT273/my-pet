<template>
    <div class="menu-item mb-3">
        <div class="image-wraper flex flex-col justify-between items-center">
            <img
                :src="getImageURL(item.img)"
                width="110"
                height="110"
                class="item-img"
                @click="selectItem"
                alt="food"
            />
            <p class="item-name font-bold" @click="selectItem">
                {{ item.name }}
            </p>
            <p class="item-detail">+{{ item.effect }} hunger</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "../stores/AppStore";
import { getImageURL } from "../utils/images-utils";

const appStore = useAppStore();
type MenuItem = {
    name: string;
    effect: number;
    price: number;
    img: string;
    type: string;
    xp: number;
};
const emits = defineEmits<{
    closeMenuFc: [];
}>();

const props = defineProps<{
    item: MenuItem;
}>();

const selectItem = () => {
    appStore.updateStat({
        key: props.item.type,
        value: props.item.effect,
    });
    appStore.updateStat({
        key: "xp",
        value: props.item.xp,
    });
    if (appStore.curXp === appStore.lvlXp) {
        appStore.updateLvl(appStore.curLvl + 1);
    }
    emits("closeMenuFc");
};
</script>

<style>
</style>