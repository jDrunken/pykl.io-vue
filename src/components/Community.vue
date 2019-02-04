<template>
<section class="section" id="community">
    <div class="container">
        <header class="section__header">
            <h1 class="section__title" lang="en" aria-label="aria.section.network.title">
                Community
            </h1>
        </header>

        <section class="section__content community">
            <ul class="card__list">
                <li class="card__item" v-bind:key="index" v-for="(cafe,index) in cafe">
                    <article class="card --channel">
                        <a target="_blank" v-bind:href="cafe.href">
                             <div class="card__img">
                                 <img v-bind:src="setImage(cafe.image)" alt="">
                             </div>
                             <div class="card__content">
                                 <h1 class="card__title" lang="en">{{ setLocaleName(cafe.name) }}</h1>
                                 <dl>
                                     <dt>{{ $t('member') }}</dt>
                                     <dd>{{ cafe.subscriber | addComma }}</dd>
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
        "member" : "Member"
    },
    "ko" : {
        "member" : "가입자"
    }
}
</i18n>

<script>
import CommunityData from '../conf/community_info.json';

export default {
    name : 'Community',
    data() {
        return {
            cafe : CommunityData.cafe
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
            return require('../assets/image/community/'+path)
        },
        sortBySubscriberToDesc (list) {
            // 내림차순 정렬
            list.sort((a,b) => {
                return (a.subscriber) > (b.subscriber) ? -1 : (a.subscriber) < (b.subscriber) ? 1 : 0
            });
        }
    },
    created () {
        this.sortBySubscriberToDesc(this.cafe);
    }

};
</script>


