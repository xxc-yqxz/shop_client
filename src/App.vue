<template>
  <div id="app">
    <!-- 此处为避免与html标签同名，故不写小写 -->
    <Header></Header>
    <!-- 所有的一级路由都在此显示 -->
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>