<template>
<section id="home">
    <div class="container">
        <header class="hero">
            <div class="hero__bubble">
                <h1 lang="en">
                    Korea No.1 Crypto
                    Influencer Network
                </h1>
                <a v-bind:href="pdf" class="button--large --green">{{$t('Download a proposal')}}</a></div>
            <div class="hero__pykl" aria-hidden="true">
            </div>
        </header>
    </div>

    <div aria-hidden="true" id="trigger"></div>

    <section class="intro">
        <div class="container">
            <header class="intro__header">
                <h1 class="intro__title" v-html="$t('introduce.title')"></h1>
            </header>
        </div>

        <div class="intro__content">
            <div class="container">
                <ul class="intro__list">
                    <li class="intro__item" v-bind:key="desc.index" v-for="desc in $t('introduce.text')">
                        <p class="intro__text" v-html="desc"></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</section>
</template>

<i18n>
{
    "en": {
        "Download a proposal": "Download a proposal",
        "introduce" : {
            "title" : "Pykl Network is the most influential Crypto Marketing Network in South Korea with a pool of cryptocurrency content creators.",
            "text" : [
                "WE UTILIZE a pool of content creators from <strong>Youtube</strong>, <strong>Steemit</strong>, <strong>Afreeca</strong>, and Blog (over 880,000 subscribers)",
                "WE OFFER branding and advertising solutions in South Korea optimally tailored for your projects",
                "WE COLLABORATE with numerous marketing companies to provide a marketing strategy for the events such as ICO pre-sale, exchange listing, mainnet launch, and conferences"
            ]
        }
    },
    "ko": {
        "Download a proposal": "제안서 다운로드",
        "introduce" : {
            "title" : "피클 네트워크 <span lang='en'>(PYKL Network)</span> 는 암호화폐 생태계의 트렌드를 리드하는 크리에이터들이 모여있는 국내 최고의 크립토 마케팅 네트워크입니다.",
            "text" : [
                "스팀잇, 유튜브, 아프리카, 블로그, 카페 등 다양한 채널의 총 88만 팔로워/구독자를 보유한 크립토 인플루언서 네트워크 활용",
                "프로젝트의 성격과 타깃에 따라 적합한 인플루언서 추천 및 국내 시장에서의 브랜딩 & 포지셔닝",
                "다수의 유관기관과 협력하여 ICO 단계부터 거래소 상장, 메인넷 런칭, 오프라인 밋업 등 다양한 이벤트의 마케팅 지원"
            ]
        }

    }
}
</i18n>

<style lang="scss" scoped src="style/components/_intro.scss"></style>
<style lang="scss" scoped src="style/components/_home.scss"></style>
<style lang="scss" scoped src="style/components/_hero.scss"></style>

<script>
import pdf from  '../assets/pdf/PYKL_Network_Proposal.pdf';
export default {
    name : 'Intro',
    data : () => ({
        pdf
    })}
</script>
