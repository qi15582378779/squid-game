<template>
    <el-dialog
        :title="null"
        :visible="visible"
        width="178px"
        :show-close="false"
        class="_common-modal"
        :close-on-click-modal="false"
        :close="closeLang">
        <ul class="_lang-list">
            <li v-for="(el, index) of langList"
                :key="index"
                :class="{'_active': active == el.val}"
                @click="closeLang(el.val)">
                {{el.label}}
            </li>
        </ul>
    </el-dialog>
</template>

<script>
export default {
    name: 'lang',
    props: ['visible', 'active'],
    data() {
        return {
            langList: [
                {
                    val: 'zh',
                    label: this.$t('Main.Zh')
                },
                {
                    val: 'en',
                    label: this.$t('Main.En')
                }
            ],
        }
    },
    methods: {
        closeLang(name) {
            this.$emit('close', name)
        }
    }
}
</script>

<style scoped lang="scss">
    ._lang-list {
        li {
            text-align: center;
            margin-bottom: 14px;
            font-weight: 900;
            font-size: 14px;
            letter-spacing: 0.035em;
            color: #ffffff;

            &:nth-last-of-type(1) {
                margin-bottom: 0;
            }
        }

        ._active {
            color: #F95D98;
        }
    }
</style>
