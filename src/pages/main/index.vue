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
    @media (max-width: 768px) {
        ._main {
            position: relative;
            padding-top: 64px;
        }
    }
</style>
