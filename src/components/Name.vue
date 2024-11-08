<template>
    <div class="name">
        <h2>姓：<input type="text" v-model="firstName"></h2>
        <h2>名：<input type="text" v-model="lastName"></h2>
        <h2>姓名：<span>{{ fullName }}</span></h2>
        <button @click="changeFullName">修改姓名</button>
    </div>
</template>

<script lang="ts" name="Name" setup>
import { computed, ref } from 'vue'

let firstName = ref('gyn')
let lastName = ref('meffe')

// let fullName = computed(() => { // 只读
//     return `${firstName.value.slice(0, 1).toUpperCase()}${firstName.value.slice(1)}-${lastName.value}`
// })

let fullName = computed({ // 可读可写
    get() {
        return `${firstName.value.slice(0, 1).toUpperCase()}${firstName.value.slice(1)}-${lastName.value}`
    },
    set(newValue) {
        let [first, last] = newValue.split('-')
        firstName.value = first
        lastName.value = last
    }
})

function changeFullName() {
    fullName.value = 'meffe-gyn'
}
</script>

<style scoped>
.name {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>