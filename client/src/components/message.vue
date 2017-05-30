<template>
    <div>
        <el-card class="box-card">
                <p>{{title}}</p>
                <p v-bind:class="textColor">{{todayCount}}</p>
                <i v-bind:class="arrow"></i>
                <p class="text-inline">环比:{{MoM}}%</p>
        </el-card>
    </div>
</template>
<script>
export default {
    name:'total',
    data(){
        return {
            title:'今日访问',
            todayCount:3000,
            yesterdayCount:1000
        }
    },
    computed:{
        textColor(){
            return this.todayCount-this.yesterdayCount>0?"red":"green"
            
        },
        arrow(){
            return this.todayCount-this.yesterdayCount>0?"el-icon-arrow-up":"el-icon-arrow-down"
        },
        MoM(){
            return ((this.todayCount-this.yesterdayCount)/this.yesterdayCount).toFixed(3)*100
        }
    }
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