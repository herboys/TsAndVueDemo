import {Vue, Component} from 'vue-property-decorator'
import {timestampToTime} from '@/utils/utils'

declare module "vue/types/vue" {
    interface Vue {
        mixinText: string;
        mixinTextFun (name: string): string;
        mixinTextFunVoid(): void;
    }
}
@Component
export default class ActionMixins extends Vue {
    public mixinText = '123';

    mixinTextFun = (name: string) => {
        const data: any=new Date().getTime()
        // @ts-ignore
        this.mixinText= timestampToTime(data)
        return name + this.mixinText
    }
}