<template>
  <div>
    <h3>动态渲染 .vue 文件的组件--display</h3>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import defaultCode from './default-code'
import iDisplay from '@/components/com/display'
export default {
  components: { iDisplay },
  data () {
    return {
      code: defaultCode
    }
  }
}
</script>

<style>

</style>
