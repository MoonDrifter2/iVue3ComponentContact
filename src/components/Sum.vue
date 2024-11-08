<template>
    <div class="sum">
        <div>
            <h2>情况一：侦听ref定义的基本类型数据</h2>
            <h3>当前求和：{{ sum }}</h3>
            <button @click="changeSum">求和+1</button>
        </div>

        <div>
            <h2>情况二：侦听ref定义的对象类型数据</h2>
            <h3>姓名：{{ student.name }}</h3>
            <h3>年龄：{{ student.age }}</h3>
            <button @click="changeStudentName">修改学生名字</button>
            <button @click="changeStudentAge">修改学生年龄</button>
            <button @click="changeStudent">修改学生个人</button>
        </div>

        <div>
            <h2>情况三：侦听reactive定义的对象类型数据</h2>
            <h3>姓名：{{ teacher.name }}</h3>
            <h3>年龄：{{ teacher.age }}</h3>
            <button @click="changeTeacherName">修改老师名字</button>
            <button @click="changeTeacherAge">修改老师年龄</button>
            <button @click="changeTeacher">修改老师个人</button>
        </div>

        <div>
            <h2>情况四：侦听ref或reactive定义的对象类型数据中的某个属性</h2>
            <h3>姓名：{{ boss.name }}</h3>
            <h3>年龄：{{ boss.age }}</h3>
            <h3>汽车：{{ boss.car.first }}、{{ boss.car.second }}</h3>
            <button @click="changeBossName">修改老板名字</button>
            <button @click="changeBossAge">修改老板年龄</button>
            <button @click="changeBossFirstCar">修改老板第一辆车</button>
            <button @click="changeBossSecodeCar">修改老板第二辆车</button>
            <button @click="changeBoss">修改老板所有的车</button>
        </div>
    </div>
</template>

<script lang="ts" name="Sum" setup>
import { reactive, ref, watch } from 'vue'

let sum = ref(0)

function changeSum() {
    sum.value += 1
}

const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log(newValue, oldValue)
    if (newValue > 7) {
        stopWatch()
    }
})

// ================================

let student = ref({
    name: '何同学',
    age: 25
})

function changeStudentName() {
    student.value.name = '格茵梅菲'
}

function changeStudentAge() {
    student.value.age -= 1
}

function changeStudent() {
    student.value = { name: 'Gynmeffe', age: 18 }
}

watch(student, (newValue, oldValue) => {
    console.log(newValue, oldValue)
}, {
    deep: true
})

// ================================

let teacher = reactive({
    name: '何老师',
    age: 42
})

function changeTeacherName() {
    teacher.name = '黄老师'
}

function changeTeacherAge() {
    teacher.age += 1
}

function changeTeacher() {
    Object.assign(teacher, { name: 'Gynmeffe', age: 18 })
}

watch(teacher, (newValue, oldValue) => { // 强制默认deep: true
    console.log(newValue, oldValue)
})

// ================================

let boss = reactive({
    name: '潘天鸿',
    age: 32,
    car: {
        first: '帕拉梅拉',
        second: '梅赛德斯'
    }
})

function changeBossName() {
    boss.name = '王瀚哲'
}

function changeBossAge() {
    boss.age = 27
}

function changeBossFirstCar() {
    boss.car.first = '特斯拉'
}

function changeBossSecodeCar() {
    boss.car.second = '保时捷'
}

function changeBoss() {
    boss.car = {
        first: '小米su7',
        second: '问界'
    }
}

watch(() => boss.car, (newValue, oldValue) => { // 直接写：侦听地址值，函数式返回：侦听属性值
    console.log(newValue, oldValue)
}, {
    deep: true
})

watch([() => boss.name, () => boss.car.first], (newValue, oldValue) => { // 直接写：侦听地址值，函数式返回：侦听属性值
    console.log(newValue, oldValue)
})
</script>

<style scoped>
.sum {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>