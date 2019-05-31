<template>
  <div class="look-one">{{msg}}
    <div class="go-two" @click='goTwo'>去look2</div>
  </div>
</template>

<script>
export default {
  name: 'LookOne',
  data () {
    return {
      msg: '你是真的强'
    }
  },
  methods: {
    goTwo() {
      this.$router.push({ name: 'LookTwo',param: { Id: 1 } })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(from, to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(from, to)
    next()
  }
}
</script>

