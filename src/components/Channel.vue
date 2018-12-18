<template>
<section class="section" id="network">
    <div class="container">
        <header class="section__header">
            <h1 class="section__title" lang="en" aria-label="aria.section.network.title">
                Channel
            </h1>
        </header>

        <section class="section__content">
            <header class="channel__header">
                <h1 class="channel__title">
                    <img src="../assets/image/logo-youtube.svg" alt="YouTube">
                </h1>
            </header>

            <ul class="card__list">
                <li class="card__item" v-for="youtube in youtube">
                    <article class="card --channel">
                        <a target="_blank" v-bind:href="youtube.url">
                            <div class="card__img">
                                <img v-bind:src="youtube.img" alt="">
                            </div>
                            <div class="card__content">
                                <h1 class="card__title">{{ youtube.name }}</h1>
                                <dl>
                                    <dt>{{ $t('subscriber') }}</dt>
                                    <dd>{{ youtube.subscriber }}</dd>
                                </dl>
                            </div>
                        </a>
                    </article>
                </li>
            </ul>
        </section>

        <section class="section__content">
            <header class="channel__header">
                <h1 class="channel__title">
                    <img src="../assets/image/logo-steemit.svg" alt="스팀잇">
                </h1>
            </header>

            <ul class="card__list">
                <li class="card__item">
                    <article class="card --channel">
                        <a target="_blank" href="https://steemit.com/@virus707">
                            <div class="card__img">
                                <img src="../assets/image/channel/virus707.jpg" alt="">
                            </div>
                            <div class="card__content">
                                <h1 class="card__title" lang="en">@virus707</h1>
                                <dl>
                                    <dt>팔로워</dt>
                                    <dd>6,155</dd>
                                </dl>
                            </div>
                        </a>
                    </article>
                </li>
            </ul>
        </section>
    </div>
</section>
</template>

<style lang="scss" src="style/components/_card.scss"></style>
<style lang="scss" src="style/components/_channel.scss"></style>

<i18n>
{
    "en" : {
        "subscriber" : "Subscribers"
    },
    "ko" : {
        "subscriber" : "구독자"
    }
}
</i18n>

<script lang="ts">
export default {
    name : 'Network',
    data() {
        return {
            youtube : [
                {
                    name : '킬러웨일',
                    img : '../assets/image/channel/img-channel-1-1.jpg',
                    subscriber : 36728,
                    url : 'https://www.youtube.com/channel/UCFYXE2w60jhpCO9uKvjZvVQ/featured',
                },
            ],
            steemit : [
                {
                    name : '@virus707',
                    img : '../assets/image/channel/virus707.jpg',
                    subscriber : 6155,
                },
            ],
        };
    },
};
</script>

