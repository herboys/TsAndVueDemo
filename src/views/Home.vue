<template>
    <div class="home">
        <div>{{ "17639895136" | demo }}</div>
        <div>{{ name }}</div>
        <div>{{ data }}</div>
        <ul v-for="(item,index) in list" :key="index">
            <li>{{ item.name }}</li>
            <li>{{ item.value }}</li>
        </ul>
        <HomePage1/>
        <HomePage2/>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <!--流星-->
        <!--        <div class="liuxing liuxing1 liuxingFla"></div>-->
        <!--        <div class="liuxing liuxing2 liuxingFla2"></div>-->
        <!--        <div class="liuxing liuxing3 liuxingFla3"></div>-->
        <!--        <div class="liuxing liuxing4 liuxingFla4"></div>-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import {ListParams} from '@/types/index'
    import publicMethod from '@/mixins/PublicMethod'
    import {processingTel, maxstrString} from '@/utils/utils'
    import HomePage1 from "@/homePage/1.vue";
    import HomePage2 from "@/homePage/2.vue";

    @Component({
        components: {
            HelloWorld,
            HomePage2,
            HomePage1
        },
        mixins: [publicMethod],
        filters: {
            demo: (data: string) => {
                return processingTel(data)
            }
        }
    })
    export default class Home extends Vue {
        private name = '123'
        private data: ListParams = {
            name: '',
            value: 0
        }
        private list: Array<ListParams> = [{
            name: '小小胖',
            value: 18
        }]

        created() {
            this.name = this.mixinTextFun('小小胖')
            processingTel('17639895136')
            this.sanyuan()
            maxstrString('adsafsfgadsdaasssssaasssdfssss')
            console.log(maxstrString('adsafsfgadsdaasssssaasssdfssss'))
        }

        sanyuan(): void {
            const hungry = true
            const eat = hungry == true ? 'yes' : 'no'
            //删除重复项
            const array = [100, 23, 23, 23, 23, 67, 45]
            console.log(new Set(array))
            const outputArray = Array.from(new Set(array))
            console.log(outputArray)
            console.log('********for+定时器***********')
            //定时器它是异步执行的，而for循环执行速度又很快，所以导致当开始执行定时器时。for循环已经执行完毕，所以它一直会输出最后一个i
            for (let i = 0; i < 8; i++) {
                setTimeout(function () {
                    console.log(i, 'let')
                })
            }
            for (var i = 0; i < 8; i++) {
                setTimeout(function () {
                    console.log(i, 'var')
                })
            }
            console.log('**********this的理解*************')
            // //箭头函数是匿名函数 不能作为构造函数 不能使用this
            // let funjiantou=()=>{
            //   console.log('箭头函数')
            // }
            // let fc =new funjiantou() 会报错
            const obj = {
                a: 10,
                b: () => { //this 指向window
                    // console.log(this.a) undefined
                },
                c: function () { //this 指向当前对象
                    console.log(this.a)//10

                },
                d: function () {
                    return () => { //箭头函数 this 指向上下文 此时this的指向是当前的对象
                        console.log(this.a, '0000')
                        console.log(this, 'd')
                    }
                }
            }
            console.log(obj.d()(), '000')
            const user = {
                count: 1,
                getCount: function () {
                    return this.count
                }
            }
            console.log(user.getCount())
            const func = user.count
            console.log(func)
        }


    }
</script>
