<template>
    <div class="news">
        <div class="aside">
            <ul>
                <li v-for="item in newsList" :key="item.id">
                    <RouterLink :to="{ path: '/news/detail' }">{{ item.title }}</RouterLink>
                </li>
            </ul>
        </div>

        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" name="News" setup>
import { reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const newsList = reactive([
    {
        id: '001', title: '如何选择好的抗癌食品', content: '我也不知道，吃点西蓝花如何呢'
    },
    {
        id: '002', title: '如何一夜暴富', content: '别做梦了，打工人应该想着一日三餐吃什么'
    },
    {
        id: '003', title: '震惊！你竟然被我震惊到了', content: '恭喜你年轻人，你被我恭喜到了'
    }
])
</script>

<style scoped>
.news {
    display: flex;
    align-items: center;
    height: 100%;
}

.aside {
    width: 40%;
}

ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin-left: 20px;
}

a {
    font-size: 24px;
    color: #0366d6;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #ff8300;
    text-decoration: underline;
}

.content {
    width: 100%;
    background-color: #f2f2f2;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>