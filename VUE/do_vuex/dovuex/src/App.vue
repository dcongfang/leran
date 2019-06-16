<template>
  <div id="app">
    <button @click="decrement">-</button>
      clicked{{$store.state.count}}times,count is {{eventOrOdd}}
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
// 借
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  // 如果有多处要用到奇偶判断怎么办？
  computed:  mapGetters([
     'eventOrOdd'
    ]) 
}
</script>

<style>

</style>
