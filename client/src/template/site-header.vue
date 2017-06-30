<template>
<div id="header">
    <el-row type="flex" justify="center">
        <el-col :span="16"><div class="grid-content bg-purple-light"><p>this is header</p></div></el-col>
    </el-row> 
</div>
</template>
<script>
    export default {
        name: 'header',
        data() {
            return {}
        }
    }
</script>
<style>
    .el-row {
        margin-bottom: 20px;
    }
    
    .el-col {
        border-radius: 4px;
    }
</style>