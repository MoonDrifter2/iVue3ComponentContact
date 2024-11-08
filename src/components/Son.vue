<template>
    <div class="son">
        <h2 ref="city">广州</h2>
        <button @click="showCity">Show City</button>
    </div>
</template>

<script lang="ts" name="Son" setup>
import { ref, defineExpose } from 'vue'

let city = ref()

function showCity() {
    console.log(city.value);
}

defineExpose({
    area: '天河区',
    addr: '岑村红花岗'
})
</script>

<style scoped>
.son {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>