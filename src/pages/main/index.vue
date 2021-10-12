<template>
    <div class="_main">
        <HeaderCom/>
        <router-view/>
        <FooterCom/>
    </div>
</template>

<script>
import HeaderCom from './header';
import FooterCom from './footer'

export default {
    name: 'index',
    components: {HeaderCom, FooterCom}
}
</script>

<style scoped lang="scss">
    ._main {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        ._main {
            position: relative;
            padding-top: 64px;
        }
    }
</style>
