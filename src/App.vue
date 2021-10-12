<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            i: 0,
            isRouterAlive: false
        }
    },
    created() {
        setTimeout(() => {
            document.getElementById('screen-loading').style.display = 'none';
            // require(['skrollr'], function (skrollr) {
            //     // console.log('skrollr', skrollr)
            //     skrollr.init();
            //     document.getElementById('screen-loading').style.display = 'none';
            //     document.getElementById('app').style.display = 'block';
            // });
        }, 1000)
    },
}
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
