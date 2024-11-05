<template>
    <div class="app">
        <h1>你好Vue3</h1>
        <Person />
        <Game />
        <Car />
    </div>
</template>

<script lang="ts">
import Person from "/src/components/Person.vue";
import Game from "/src/components/Game.vue";
import Car from "/src/components/Car.vue";

export default {
    name: 'App',
    components: {
        Person,
        Game,
        Car
    }
}
</script>

<style>
.app {
    display: grid;
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    row-gap: 20px;
}
</style>