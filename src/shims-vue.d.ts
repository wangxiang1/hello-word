import Vue from 'vue'
import VueRouter from "vue-router";
import { Store } from "vuex";
import { AxiosInstance } from "axios";

declare module '*.vue' {
  export default Vue
}

// 扩展vue
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

// 扩展ComponentOptions
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    store?: Store<any>;
  }
}
