<template>
<header id="header" class="pykl-header">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-3 --y-center --x-between">
                <h1 class="pykl">
                    <a href="../index.html">Pykl</a>
                </h1>
                <button class="button--icon --menu" id="menu-btn" type="button"></button>
            </div>
            <div class="col-sm-12 col-md-9">
                <nav id="nav">
                    <h1 class="sr-only">
                    </h1>

                    <ul class="gnb">
                        <li>
                            <button class="button--icon --close" id="close-btn" type="button">
                            </button>
                        </li>
                        <li class="gnb__item">
                            <a href='#home' class="scroll" lang="en">Home</a>
                        </li>
                        <li class="gnb__item">
                            <a href='#network' class="scroll" lang="en">Network</a></li>
                        <li class="gnb__item">
                            <a href='#portfolio' class="scroll" lang="en">Portfolio</a>
                        </li>
                        <li class="gnb__item">
                            <a href='#contact' class="scroll" lang="en">Contact</a>
                        </li>
                    </ul>
                    <div class="i18n">
                        <h1 class="sr-only">{{ $t('select language') }}</h1>
                        <a href="#ko" class="en" v-on:click="changeLocale('en',$event);">Eng</a>
                        <a href="#en" class="ko" v-on:click="changeLocale('ko',$event);">한국어</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
</template>

<style lang="scss" src="style/components/_header.scss"></style>
<style lang="scss" src="style/components/_nav.scss"></style>

<i18n>
{
    "en" : {
        "select language" : "select language"
    },
    "ko" : {
        "select language" : "언어 선택"
    }
}
</i18n>

<script>
export default ({
    name : 'Header',
    methods : {
        // 언어 변환 버튼
        changeLocale(lang, event) {
            event.preventDefault();
            document.documentElement.lang = lang;

            this.$i18n.locale = lang;
        },
    },
});
</script>
