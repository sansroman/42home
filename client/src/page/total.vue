<template>
    <div>
        <message></message>
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
    .box-card{
        width:160px;
    }
    .box-card p{
        margin:10px;
    }
    .red{
        color:#FF4949;
    }
    .green{
        color:#13CE66;
    }
    .text-inline{
        display:inline-block;
    }
</style>