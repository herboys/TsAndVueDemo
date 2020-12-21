<template>
    <div>
        <div>homePage--1 {{foo}}</div>

        <div>
            在ProvideInjectPage页面使用
            Provide,ProvideReactive定义数据,
            不需要props传递数据
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Inject, InjectReactive, Vue} from 'vue-property-decorator';

    @Component
    export default class HomePage1 extends Vue {
        //@Inject() eventBus!:Vue;
        @Inject() readonly foo!: string;

        @InjectReactive() fooReactive!: string;

        @InjectReactive('1') fooReactiveKey1!: string;

        @InjectReactive() fooReactiveKey2!: string;

    }
</script>

<style scoped>

</style>