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
                <li class="card__item" v-bind:key="index" v-for="(youtube,index) in youtube">
                    <article class="card --channel">
                        <a target="_blank" v-bind:href="youtube.href">
                            <div class="card__img">
                                <img v-bind:src="setImage(youtube.image)" alt="">
                            </div>
                            <div class="card__content">
                                <h1 class="card__title">{{ setLocaleName(youtube.name) }}</h1>
                                <dl v-if=youtube.subscriber>
                                    <dt>{{ $t('subscriber') }}</dt>
                                    <dd>{{ youtube.subscriber | addComma }}</dd>
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
                    <img src="../assets/image/logo-steemit.svg" alt="Steemit">
                </h1>
            </header>

            <ul class="card__list">
                <li class="card__item" v-bind:key="index" v-for="(steemit,index) in steemit">
                    <article class="card --channel">
                        <a target="_blank" v-bind:href="steemit.href">
                            <div class="card__img">
                                <img v-bind:src="setImage(steemit.image)" alt="">
                            </div>
                            <div class="card__content">
                                <h1 class="card__title" lang="en">@{{ steemit.name.ko }}</h1>
                                <dl>
                                    <dt>{{ $t('follower') }}</dt>
                                    <dd>{{ steemit.subscriber | addComma }}</dd>
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
        "subscriber" : "Subscribers",
        "follower" : "Follower"
    },
    "ko" : {
        "subscriber" : "구독자",
        "follower" : "팔로워"
    }
}
</i18n>

<script>
import ChannelData from '../conf/channel_info.json';

export default {
    name : 'Network',
    data() {
        return {
            youtube : ChannelData.youtube,
            steemit : ChannelData.steemit,
            community : ChannelData.community
        };
    },
    filters: {
        addComma(int) {
            const amt = Number(int)
            return amt.toLocaleString(undefined, {maximumFractionDigits:2})
        }
    },
    methods : {
        setLocaleName (str) {
            return str[this.$i18n.locale]
        },
        setImage (path) {
            return require('../assets/image/channel/'+path)
        } ,
        sortBySubscriberToDesc (list) {
            // 내림차순 정렬
            list.sort((a,b) => {
                return (a.subscriber) > (b.subscriber) ? -1 : (a.subscriber) < (b.subscriber) ? 1 : 0
            });
        }
    },
    created () {
        this.sortBySubscriberToDesc(this.youtube);
        this.sortBySubscriberToDesc(this.steemit);
    }

};
</script>

