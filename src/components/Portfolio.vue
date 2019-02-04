<template>
    <section class="section" id="portfolio">
        <div class="container">
            <header class="section__header">
                <h1 class="section__title" lang="en" v-bind:aria-label="$t('portfolio')">
                    Portfolio
                </h1>
            </header>

            <section class="section__content">
                <h1 class="sr-only">{{ $t('case')}}</h1>

                <ul class="card__list">
                    <li class="card__item" v-bind:key="list.index" v-for="list in lists">
                        <article class="card --portfolio">
                            <a class="hit" target="_black" :href="list.url">
                                <div class="card__img">
                                    <!-- image url 처리 필요 -->
                                    <img v-bind:src="require(`../assets/image/portfolio/${list.image}`)" alt="">
                                </div>
                                <div class="card__content">
                                    <h1 class="card__title" lang="en">{{list.name}}</h1>
                                </div>
                            </a>
                        </article>
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>

<style scoped lang="scss" src="../assets/style/components/_portfolio.scss"></style>

<i18n>
{
    "en" : {
        "portfolio" : "Portfolio",
        "case" : "Case of Portfolio"
    },
    "ko" : {
        "portfolio" : "포트폴리오",
        "case" : "포트폴리오 사례"
    }
}
</i18n>

<script>
export default ({
    name: 'Portfolio',
    data() {
        return {
            lists : [
                {
                    id : 1,
                    url : 'https://daybit.com/',
                    image : 'img-portfolio-1.jpg',
                    name : 'Daybit Exchange',
                },
                {
                    id : 2,
                    url : 'https://get-scatter.com/',
                    image : 'img-portfolio-2.jpg',
                    name : 'Scatter',
                },
                {
                    id : 3,
                    url : 'https://wavesplatform.com/',
                    image : 'img-portfolio-3.jpg',
                    name : 'Waves Platform',
                },
                {
                    id : 4,
                    url : 'https://everipedia.org/',
                    image : 'img-portfolio-4.jpg',
                    name : 'Everipedia',
                },
                {
                    id : 5,
                    url : 'https://www.redpulse.com/',
                    image : 'img-portfolio-5.jpg',
                    name : 'Red Pulse',
                },
                {
                    id : 6,
                    url : 'https://iost.io/',
                    image : 'img-portfolio-6.jpg',
                    name : 'IOSToken',
                },
                {
                    id : 7,
                    url : 'https://chaince.com/',
                    image : 'img-portfolio-7.jpg',
                    name : 'Chaince',
                },
                {
                    id : 8,
                    url : 'https://eosys.io',
                    image : 'img-portfolio-8.jpg',
                    name : 'EOSYS',
                },
                {
                    id : 9,
                    url : 'https://greymass.com/',
                    image : 'img-portfolio-9.jpg',
                    name : 'Greymass',
                },
                {
                    id : 10,
                    url : 'https://eosauthority.com/',
                    image : 'img-portfolio-10.jpg',
                    name : 'EOS Authority',
                },
                {
                    id : 11,
                    url : 'https://airbloc.org',
                    image : 'img-portfolio-11.png',
                    name : 'AIRBLOC',
                },
                {
                    id : 12,
                    url : 'https://carryprotocol.io/',
                    image : 'img-portfolio-12.png',
                    name : 'Carry protocol',
                },
                {
                    id : 13,
                    url : 'https://horuspay.io/',
                    image : 'img-portfolio-13.png',
                    name : 'HorusPay',
                },
                {
                    id : 14,
                    url : 'https://worbli.io/',
                    image : 'bnr-worbli@2x.png',
                    name : 'Worbli',
                }
            ],
        };
    },

});
</script>
