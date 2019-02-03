<template>
<section class="section" id="contact">
    <div class="container">
        <header class="section__header">
            <h1 class="section__title" lang="en">
                Contact
            </h1>
        </header>

        <div class="section__content">
            <p class="contact__text" v-html="$t('title')"></p>
            <div class="contact__etc">
                <a v-bind:href="pdf" class="button--large --ghost">{{ $t('download') }}</a>
                <a href="https://goo.gl/forms/GHVgiN5OWVfTwg4Z2" target="_blank" class="button--large --ghost" rel="noreferrer noopener">{{ $t('request') }}</a>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss" src="style/components/_contact.scss"></style>

<i18n>
{
    "en" : {
        "title" : "We have a pool of marketing experts who will aid your success in South Korea,<br> Be part of Pykl Network.",
        "download" : "Download a proposal",
        "request" : "Marketing request form"
    },
    "ko" : {
        "title" : "최고의 전문가 집단이 당신을 도울 준비가 되어 있습니다.<br>피클 네트워크와 함께하세요.",
        "download" : "제안서 다운로드",
        "request" : "광고 의뢰"
    }
}
</i18n>

<script>
// import 여기는 pdf가 문제구나...

import pdf from  '../assets/pdf/PYKL_Network_Proposal.pdf';
export default {
    name : 'Contact',
    data : () => ({
        pdf
    })
}
</script>
