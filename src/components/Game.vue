<template>
    <div class="game">
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFristName">修改第二个游戏的名字</button>
        <button @click="changeGames">替换游戏库</button>
    </div>
</template>

<script lang="ts" name="Game" setup>
import { reactive, toRefs, toRef } from 'vue' // Proxy{}

const games = reactive([{ // reactive重新分配一个新对象，会失去响应式
    id: 1,
    name: '星穹铁道'
}, {
    id: 2,
    name: '绝区零'
}, {
    id: 3,
    name: '原神'
}])

function changeFristName() {
    games[1].name = '星之翼'
}

let [qiong, ling] = toRefs(games)
console.log(qiong.value, ling.value);
let genshin = toRef(games, 2)
console.log(genshin.value);

function changeGames() {
    const newGames = [{
        id: 1,
        name: '恐鬼症'
    }, {
        id: 2,
        name: 'panicore'
    }]

    // games = reactive(newGames) // 不更新

    Object.assign(games, newGames)
}
</script>

<style scoped>
.game {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>