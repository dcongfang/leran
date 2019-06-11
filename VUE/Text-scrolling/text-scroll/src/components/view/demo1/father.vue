<template>
  <div class="container">
    <Chiledren :msg="message" :send-age="age" :send-data="data"></Chiledren>
  </div>
</template>

<script>
import Chiledren from './children'
export default {
  name: 'demo1',
  data () {
    return {
      message: '我很帅',
      data: '2019-6-11',
      age: '18'
    }
  },
  components: {
    Chiledren
  }
}
</script>
