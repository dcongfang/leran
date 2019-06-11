<template>
  <div class="container">{{msg}}{{sendAge}}{{sendData}}</div>
</template>

<script>
export default {
  name: 'demo1Child',
  props: {
    msg: {
      type:String,
      require: true
    },
    sendAge: {
      type: Number,
      require: true
    },
    sendData: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
