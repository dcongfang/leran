<template>
  <div>
    <Header />
    <div class="swiperImg">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img width="100%" height="100%" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import Header from "@/common/Header.vue";
export default {
  data() {
    return {
      images: [
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2164079939,1959998250&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3026541216,206764081&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=192031582,700609889&fm=26&gp=0.jpg'
      ]
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.swiperImg{
  width: 100%;
  height: 160px;
}
.van-swipe{
  width: 100%;
  height: 100%;
}
</style>
