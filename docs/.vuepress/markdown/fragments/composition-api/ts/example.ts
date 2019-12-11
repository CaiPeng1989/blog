import {
  createComponent,
  createElement
} from '@vue/composition-api'
const h = createElement

export default createComponent({
  setup: () => {
    return () => (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
    )
  }
})
