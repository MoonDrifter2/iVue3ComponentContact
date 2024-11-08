<template>
    <div class="car">
        <h2>一辆{{ car.brand }}，价值{{ car.price }}万</h2>
        <button @click="changeBrand">修改汽车品牌</button>
        <button @click="changePrice">修改汽车价格</button>
    </div>
</template>

<script lang="ts" name="Car" setup>
import { ref } from 'vue' // refImpl{value:Proxy{}}

let car = ref({ brand: '小米su7', price: 20 })

function changeBrand() {
    car.value.brand = '问界'
}

function changePrice() {
    car.value.price += 10
}
</script>

<style scoped>
.car {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>