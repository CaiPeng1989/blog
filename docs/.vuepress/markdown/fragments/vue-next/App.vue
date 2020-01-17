<script>
import {
  // eslint-disable-next-line no-unused-vars
  h,
  ref,
  onMounted,
  Fragment
} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',

  components: {
    HelloWorld
  },

  setup: () => {
    let img = ref(null)

    onMounted(() => {
      console.log(img)
    })

    return () => (
      <Fragment>
        <img {
          ...{
            alt: 'Vue logo',
            ref: el => (img = el),
            src: require('./assets/logo.png')
          }
        }/>
        <HelloWorld {
          ...{
            msg: 'Welcome to Your Vue.js App'
          }
        }/>
      </Fragment>
    )
  }
}
</script>
