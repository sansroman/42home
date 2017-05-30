<template>
  <div id="app">
    <div class="main-left">
      <el-menu default-active='/total' class='el-menu-vertical' :router="true">
        <el-menu-item index="/total" class="{'isActive':active}">总览</el-menu-item>
        <el-menu-item index="/contant" class="{'isActive':!active}">内容</el-menu-item>
      </el-menu>
    </div>
    <div class="main-right">
      <transition name="el-fade-in-linear">
        <router-view class="view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
export default {
  name: 'app',
  data () {
    return {
      active:'true'
    }
  },
  created(){
    this.$router.push('/total')
  },
  watch:{
    $route(to,from){
      this.active=!this.active;
    }
  }

}
</script>

<style >
body{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: -webkit-box;display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  background-color: #FCFCFC;
}
.main-left{
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 150px;
  flex: 0 0 150px;
}
.main-right{
  -webkit-box-flex:1;
  -ms-flex:1;
  flex:1; 
  background-color: #fff;
  padding: 50px 70px; 
}
.view{
  text-align:left;
}
</style>
