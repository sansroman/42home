<template>
  <div id="app">
    <siteHeader></siteHeader>
    <p>this is index page</p>
    <siteFooter></siteFooter>
  </div>
</template>

<script>
    import siteFooter from './template/site-footer.vue'
    import siteHeader from './template/site-header.vue'
    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            siteFooter,
            siteHeader
        }
    }
</script>

<style>

</style>