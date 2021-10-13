<template>
    <div class="_main">
        <HeaderCom/>
        <div class="_main-con">
            <div class="_web"></div>
            <div class="_con-txt">
                <img src="../../assets/images/img1.svg" alt="" class="_top-img">
                <div class="_sub-txt">
                    <p>{{$t('Main.Title')}}</p>
                </div>
                <div class="_h5-pd">
                    <a href="" class="_btn1">
                        <img src="../../assets/images/word1.svg" alt="">
                    </a>
                </div>
                <div class="_h5-pd">
                    <a href="" class="_btn2">
                        <img src="../../assets/images/word2.svg" alt="">
                    </a>
                </div>

                <div class="_icons">
                    <a><i class="iconfont">&#xe632;</i></a>
                    <a><i class="iconfont">&#xe637;</i></a>
                    <a><i class="iconfont">&#xe636;</i></a>
                    <a><i class="iconfont">&#xe635;</i></a>
                    <a><i class="iconfont">&#xe634;</i></a>
                    <a><i class="iconfont">&#xe633;</i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderCom from './header';

export default {
    name: 'index',
    components: {HeaderCom}
}
</script>

<style scoped lang="scss">
    ._main {
        width: 100%;
        height: 100%;

        ._main-con {
            padding-top: 80px;
            width: 100%;
            min-height: 100%;
            background-image: url("../../assets/images/bg.svg");
            background-repeat: no-repeat;
            background-position: center right;
            background-size: cover;
            display: flex;
            align-items: center;
            padding-left: 92px;
        }

        ._con-txt {

        }

        ._web {
            display: none;
        }

        ._top-img {
            height: 178px;
            margin-bottom: 32px;
        }

        ._sub-txt {
            margin-bottom: 62px;

            p {
                width: 486px;
                font-size: 18px;
                line-height: 25px;
                color: #ffffff;
                text-align: justify;
                background-image: url("../../assets/images/txt-bg2.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-origin: border-box;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        ._btn1 {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 383px;
            height: 69px;
            border-top: 1px solid #ffffff;
            background: #EA4A86;
            box-shadow: -1px 4px 9px #000000;
            transition: all .2s;
            margin-bottom: 42px;

            &:hover {
                background: #F95D98;
            }

            img {
                height: 32px;
            }
        }

        ._btn2 {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 383px;
            height: 69px;
            border: 1px solid #ffffff;
            transition: all .2s;
            filter: drop-shadow(-1px 4px 9px #000000);
            margin-bottom: 70px;

            img {
                height: 34px;
            }

            &:hover {
                background: #232323;
            }
        }

        ._icons {
            width: 383px;
            display: flex;
            justify-content: center;

            a {
                display: flex;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #ffffff;
                align-items: center;
                justify-content: center;
                transition: all .2s;
                cursor: pointer;
                margin: 0 12px;

                &:hover {
                    background-color: #EA4C84;
                }
                &:nth-of-type(3) .iconfont {
                    font-size: 16px;
                }

                .iconfont {
                    font-size: 12px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        ._main {
            position: relative;
            ._web {
                display: block;
                width: 100%;
                height: 185px;
                background-image: url("../../assets/images/bg.svg");
                background-repeat: no-repeat;
                background-position: center right;
                background-size: cover;
            }

            ._main-con {
                padding-left: 0;
                display: block;
                flex-wrap: wrap;
                padding-top: 70px;
                background-image: none;
            }

            ._con-txt {
                padding: 13px 18px 0;
            }

            ._top-img {
                height: 65px;
                margin-bottom: 28px;
            }

            ._sub-txt {
                margin-bottom: 38px;
                p {
                    width: 100%;
                }
            }

            ._h5-pd {
                padding: 0 16px;
            }

            ._btn1, ._btn2 {
                width: 100%;
                height: 55px;
                margin: 0 auto;
                img {
                    max-width: 90%;
                }
            }

            ._btn1 {
                margin-bottom: 28px;
            }

            ._btn2 {
                margin-bottom: 42px;
            }

            ._icons {
                width: 100%;
                padding-bottom: 40px;
                a {
                    margin: 0 8px;
                }
            }
        }
    }
</style>
