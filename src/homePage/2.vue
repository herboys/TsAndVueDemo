<template>
    <div>
        <div>homePage--2</div>
        <div> foo:{{foo.description}}<br/>
            fooReactive:{{fooReactive}}<br/>
            fooReactiveKey1:{{fooReactiveKey1}}<br/>
            fooReactiveKey2:{{fooReactiveKey2}}
            <span style="padding-left:30px;">=> fooReactiveKey2没有些key所以取不到哦</span>


        </div>
    </div>


</template>

<script lang="ts">
    import {Component, Provide, ProvideReactive, Vue} from 'vue-property-decorator';

    @Component
    export default class HomePage2 extends Vue {
        //@Provide() eventBus=new Vue()
        @Provide() foo = Symbol('fooaaa');

        @ProvideReactive() fooReactive = 'fooReactive';

        @ProvideReactive('1') fooReactiveKey1 = 'fooReactiveKey1';

        @ProvideReactive('2') fooReactiveKey2 = 'fooReactiveKey2';

        created() {
            this.foo = Symbol('fooaaa111');
            this.fooReactive = 'fooReactive111';
            this.fooReactiveKey1 = 'fooReactiveKey111';
            this.fooReactiveKey2 = 'fooReactiveKey222';
        }
    }
</script>

<style scoped>

</style>