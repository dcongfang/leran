<template>
  <div class="list">
    <template v-if="total===0">
      <div class="list-null">
        没有东西
      </div>
    </template>
    <template v-else>
      <ul></ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BaseList',
  data () {
    return {
      total: 0
    }
  }
}
</script>

<style>

</style>
