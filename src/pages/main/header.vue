<template>
    <div class="_main-header">
        <div class="_hd-lf">
            <img src="../../assets/images/logo/logo-sub.svg" alt="">
            <img src="../../assets/images/logo/logo-word.svg" alt="" class="_web">
        </div>

        <div class="_hd-rt">
            <a href="" class="_btn1">
                <img src="../../assets/images/word1.svg" alt="">
            </a>

            <div class="_lang-con _web-lang" :class="{'_active-open': lang_show}">
                <div class="_language" @click="lang_show = !lang_show">
                    <div>
                        <img src="../../assets/images/globe.svg" alt="">
                        {{langTxt[lang]}}
                    </div>
                    <i class="iconfont">&#xe624;</i>
                </div>
                <transition :show="lang_show" class="_lang-menu">
                    <div v-for="(el, index) of langList"
                        :key="index"
                        :class="{'_active': lang == el.val}"
                        @click="command(el.val)">
                        {{el.label}}
                    </div>
                </transition>
            </div>


            <div class="_h5-lang" @click="langModalFlag = true">
                <img src="../../assets/images/globe.svg" alt="">
                <i class="iconfont">&#xe624;</i>
            </div>
        </div>

        <lang-modal :visible="langModalFlag" :active="lang" @close="closeModal($event)"/>
    </div>
</template>

<script>
import transition from '../../components/transition';
import langModal from './modal/lang';

export default {
    name: 'header-index',
    components: {
        transition,
        langModal
    },
    data() {
        return {
            lang_show: false,
            langTxt: {
                zh: this.$t('Main.Zh'),
                en: this.$t('Main.En'),
            },
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
            lang: localStorage.getItem('lang') || 'en',
            langModalFlag: false
        }
    },
    methods: {
        command(locale) {
            this.lang = locale;
            this.$i18n.locale = locale;
            localStorage.setItem('lang', locale);
            this.lang_show = false;
        },
        closeModal(e) {
            this.lang = e;
            this.$i18n.locale = e;
            localStorage.setItem('lang', e);
            this.langModalFlag = false;
        }
    }
}
</script>

<style scoped lang="scss">
    ._main-header {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #000000;
        padding: 0 44px;
        margin-bottom: -80px;
        position: relative;

        ._hd-lf {
            display: flex;
            align-items: center;

            img {
                &:nth-of-type(1) {
                    height: 40px;
                    margin-right: 8px;
                }

                &:nth-of-type(2) {
                    height: 32px;
                }
            }
        }

        ._hd-rt {
            display: flex;
            align-items: center;
            position: relative;
        }

        ._btn1 {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 140px;
            height: 32px;
            border-top: 1px solid #ffffff;
            background: #EA4A86;
            box-shadow: -1px 4px 9px #000000;
            transition: all .2s;
            margin-right: 156px;

            &:hover {
                background: #F95D98;
            }

            img {
                width: 120px;
            }
        }

        ._language {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 140px;
            height: 30px;
            cursor: pointer;
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.035em;
            text-transform: capitalize;
            color: #ffffff;
            padding: 0 14px 0 16px;
            position: relative;
            z-index: 2;

            & > div {
                display: flex;
                align-items: center;

                img {
                    width: 16px;
                    margin-right: 6px;
                }
            }

            .iconfont {
                font-size: 16px;
            }
        }

        ._lang-menu {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            & > div {
                width: 100%;
                color: #ffffff;
                font-weight: 900;
                font-size: 13px;
                letter-spacing: 0.035em;
                text-transform: capitalize;
                margin-bottom: 12px;
                padding-left: 38px;
                transition: all .3s;
                cursor: pointer;

                &:hover, &._active {
                    color: #F95D98;
                }

                &:nth-of-type(1) {
                    padding-top: 8px;
                }
            }
        }

        ._lang-con {
            transition: all .3s;
            position: absolute;
            top: 0;
            right: 0;
            border: 1px solid #FFFFFF;

            &:hover {
                background: #232323;
            }
        }

        ._h5-lang {
            display: none;
        }

        ._active-open {
            background: #232323;
            box-shadow: -1px 4px 9px #000000;

            ._language {
                background: #232323;
            }
        }
    }

    @media (max-width: 768px) {
        ._main-header {
            height: 70px;
            margin-bottom: -70px;
            padding: 0 18px;

            ._hd-lf img:nth-of-type(1) {
                height: 24px;
            }

            ._web {
                display: none;
            }

            ._btn1 {
                margin-right: 18px;
            }

            ._web-lang {
                display: none;
            }

            ._h5-lang {
                display: flex;
                align-items: center;

                i {
                    color: #ffffff;
                    font-size: 16px;
                    margin-left: 5px;
                }
            }
        }
    }
</style>
