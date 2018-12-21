<template>
<section class="section" id="process">
    <div class="container">
        <header class="section__header">
            <h1 class="section__title" lang="en">
                Process
            </h1>
        </header>

        <section class="section__content">
            <h1 class="sr-only">Pykl 서비스 이용 방법</h1>
            <ol class="process__list">
                <li class="process__item" v-bind:key="list.title" v-for="list in $t('step')">
                    <article class="process">
                        <div class="process__wrap">
                            <h1 class="process__title">{{list.title}}</h1>
                            <p class="process__text" v-html="list.desc"></p>
                        </div>
                    </article>
                </li>
            </ol>
        </section>
    </div>
</section>
</template>

<style lang="scss" src="style/components/_process.scss"></style>

<i18n>
{
    "en" : {
        "how to use" : "How to use Pykl",
        "step" : [
            {
                "title" : "Kick-Off",
                "desc" : "Obtaining an AD order from a company"
            },
            {
                "title" : "Planning",
                "desc" : "Planning the content and finding a right influencer"
            },
            {
                "title" : "Contract",
                "desc" : "Signing a contract"
            },
            {
                "title" : "Producing",
                "desc" : "Production of the related content"
            },
            {
                "title" : "On Air",
                "desc" : "Execution of the AD and balancing the account"
            }

        ]
    },
    "ko" : {
        "how to use" : "Pykl 서비스 이용 방법",
        "step" : [
            {
                "title" : "광고 의뢰",
                "desc" : "캠페인 개요 입력<br>(예산 포함)"
            },
            {
                "title" : "광고기획",
                "desc" : "콘텐츠 기획 및 적합한<br>인플루언서 제안"
            },
            {
                "title" : "계약 체결",
                "desc" : "인플루언서, 광고주 간<br>게약서 작성"
            },
            {
                "title" : "제작",
                "desc" : "콘텐츠 제작 진행"
            },
            {
                "title" : "집행",
                "desc" : "캠페인 개요 입력<br>(예산 포함)"
            }
        ]
    }
}
</i18n>

<script>
export default ({
    name : 'Process',

});
</script>

