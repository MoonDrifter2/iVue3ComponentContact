<template>
    <div class="effect">
        <h2>水温：{{ temp }}°C</h2>
        <h3>水位：{{ height }}CM</h3>
        <button @click="changeTemp">水温+1</button>
        <button @click="changeHeight">水位+10</button>
    </div>
</template>

<script lang="ts" name="Effect" setup>
import { ref, watchEffect } from 'vue'

let temp = ref(10)
let height = ref(0)

function changeTemp() {
    temp.value += 10
}

function changeHeight() {
    height.value += 10
}

watchEffect(() => { // 立即调用
    if (temp.value >= 60 || height.value >= 80) { // 响应式追踪其依赖
        console.log('https');
    }
})
</script>

<style scoped>
.effect {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>