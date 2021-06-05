<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="item in floors" :key="item.id" :floor="item" />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Brand from "./Brand/Brand";
import Floor from "./Floor/Floor";
import Like from "./Like/Like";
import ListContainer from "./ListContainer";
import Rank from "./Rank/Rank";
import TodayRecommend from "./TodayRecommend";

/* 
1.dispatch()触发发请求的异步action调用 ==> 数据从后台接口请求到vuex的state中
2.store.state / mapState()读取vuex的state数据 ==> 数据从state到组件的computed
3.在模板中动态显示
*/

export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getRecommends");
    this.$store.dispatch("getFloors");
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  components: {
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend,
  },
};
</script>

<style lang="less" scoped>
</style>