<template>
    <div class="chart">
      <div id="echarts"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  methods:{
    pullDate(url,callback){
      function doIt(){
        clearTimeout(timer);
        timer = setTimeout(doIt,5000);
        fetch(url)
          .then(res=>{
                return res.json()})
          .then((json=>{
                console.log(json);
                callback(json);
          }))
      }
      var timer = setTimeout(doIt,5000);
    },
    init(url,targetEl){
      fetch(url)
        .then(res=>{
          return res.json()
        })
        .then(json=>{
          targetEl.setOption(json)
        })
    },
    update(url,targetEl,delay){
      setInterval(()=>{
        fetch(url)
          .then(res=>{
                return res.json()})
          .then((json=>{
                console.log(json);
                targetEl.setOption(json)
          }))
      },delay)
    }
  },
    mounted () {
    var Myechart = echarts.init(document.getElementById('echarts'))
    this.init("http://127.0.0.1:3000/admin/data/line",Myechart)
    this.update('http://127.0.0.1:3000/admin/data/line/update',Myechart,3000)
  }  
}

</script>  
<style>
#echarts{
    height:300px;
    width:500px;
}

</style>
