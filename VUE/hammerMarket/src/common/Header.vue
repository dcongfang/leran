<template>
<!--search bar layout-->
  <div class="search-bar">
      <van-row gutter="12">
          <van-col span="3"><img :src="locationIcon" width="70%" class="location-icon" /></van-col>
          <van-col span="16">
            <input type="text" placeholder="请输入宝贝" class="search-input"/>
          </van-col>
          <van-col span="5"><van-button size="mini">搜索</van-button></van-col>
      </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locationIcon: require('../assets/images/location.png')
    }
  },
}
</script>

<style scoped>
  .search-bar{
      /* height: 2.2rem; */
      width: 100%;
      background-color: #f3cf39;
      line-height:2.2rem;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */ 
      color: #e6e6e8; 
  }
  .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #f3cf39;
      color:#fff;
  }
  .location-icon{
      padding-top: .3rem;
      padding-left: .6rem;
  }
</style>