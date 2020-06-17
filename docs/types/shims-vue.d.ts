import Vue from 'vue'
import '@vue/composition-api'

declare module '*.vue' {
  export default Vue
}

declare module '@vue/composition-api' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}
