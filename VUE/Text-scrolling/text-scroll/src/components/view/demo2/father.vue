<template>
  <div class="container">{{msg}}
    <Chiledren @send="getSend"></Chiledren>
  </div>
</template>

<script>
import Chiledren from './children'
export default {
  name: 'demoChild2',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Chiledren
  },
  methods: {
    getSend (data) {
      this.msg = data
    }
  }
}
</script>
