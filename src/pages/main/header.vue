<template>
    <div class="_main-header">
        <h1>{{$t('Main.test')}}</h1>

        <el-dropdown trigger="click" @command="command">
            <div class="language">
                {{langList[lang]}}
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">
                    {{$t('Main.Zh')}}
                </el-dropdown-item>
                <el-dropdown-item command="en">
                    {{$t('Main.En')}}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>

export default {
    name: 'header-index',
    data() {
        return {
            lang_show: false,
            langList: {
                zh: this.$t('Main.Zh'),
                en: this.$t('Main.En'),
            },
            lang: localStorage.getItem('lang') || 'en',
        }
    },
    methods: {
        command(locale) {
            this.lang = locale;
            this.$i18n.locale = locale;
            localStorage.setItem('lang', locale);
        },
    }
}
</script>

<style scoped lang="scss">
    ._main-header {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0 44px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        transition: all .5s;
    }
</style>
