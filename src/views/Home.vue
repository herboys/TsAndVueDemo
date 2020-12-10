<template>
  <div class="home">
    <div>{{name}}</div>
    <div>{{ data }}</div>
    <ul v-for="(item,index) in list" :key="index">
      <li>{{ item.name }}</li>
      <li>{{ item.value }}</li>
    </ul>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <!--流星-->
        <div class="liuxing liuxing1 liuxingFla"></div>
        <div class="liuxing liuxing2 liuxingFla2"></div>
        <div class="liuxing liuxing3 liuxingFla3"></div>
        <div class="liuxing liuxing4 liuxingFla4"></div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {ListParams} from '@/types/index'
import publicMethod from '@/mixins/PublicMethod'

@Component({
  components: {
    HelloWorld,
  },
  mixins: [publicMethod]
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
  this.name=this.mixinTextFun('小小胖')
  }
}
</script>
