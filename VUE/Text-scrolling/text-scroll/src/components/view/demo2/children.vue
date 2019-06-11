<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
  name: 'demo1Child2',
  data () {
    return {
      message: '为维护啥说法'
    }
  },
  methods: {
    sendMsg () {
      this.$emit('send', this.message)
    }
  }
}
</script>
