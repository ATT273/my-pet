<template>
    <div class="stat-detail grow-1 flex flex-wrap">
        <h3 class="title">{{ title }}</h3>
        <div class="stat-process__group">
            <div class="max-stat"></div>
            <div class="current-stat" :style="{ width: value + 'px' }"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    value: Number,
});
</script>

<style>
</style>