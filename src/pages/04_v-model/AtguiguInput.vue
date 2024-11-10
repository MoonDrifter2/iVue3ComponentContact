<template>
    <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
    <br>
    <input type="text" :value="mima" @input="emit('update:mima', (<HTMLInputElement>$event.target).value)">
</template>

<script lang="ts" name="AtguiguInput" setup>
defineProps(['modelValue', 'mima'])
const emit = defineEmits(['update:modelValue', 'update:mima'])
</script>

<style scoped>
input {
    border: 2px solid black;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: white;
}
</style>