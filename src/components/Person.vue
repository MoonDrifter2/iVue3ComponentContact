<template>
    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <h2>地址: {{ address }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- <script lang="ts">
export default {
    name: 'Person'
}
</script> -->

<script lang="ts" name="Person" setup>
import { ref } from 'vue' // RefImpl{}

let name = ref('Gyn')
let age = ref(24)
let tel = '15607595360'
let address = '广东省揭阳市惠来县华湖镇华英村四横巷'

function changeName() {
    name.value = 'meffe'
}

function changeAge() {
    age.value += 1
}

function showTel() {
    alert(tel)
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>