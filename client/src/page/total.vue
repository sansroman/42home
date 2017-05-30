<template>
    <div>
        <message></message>
        <message></message>
        <message></message>
        <echarts></echarts>
    </div>
</template>
<script>
import message from '../components/message'
import echarts from '../components/echarts'
export default {
    name:'total',
    data(){
        return {
        }
    },
    components:{
        echarts,
        message
    },
}
</script>
<style>
   .message{
       text-align:center;
       display:inline-block;
       margin:10px 20px;
   }
</style>