<template>
<div id="app">
    <Header/>
    <main id="main">
        <Intro/>
        <Channel/>
        <Community/>
        <Portfolio/>
        <Process/>
        <Contact/>
    </main>
    <Footer/>
</div>
</template>

<style lang="scss" src="style/components/_main.scss"></style>
<style lang="scss" src="style/components/_button.scss"></style>
<style lang="scss" src="style/components/_section.scss"></style>

<script>
import Vue from 'vue';
import store from './store.js';
import Header from '@/components/Header.vue';
import Intro from '@/components/Intro.vue';
import Channel from '@/components/Channel.vue';
import Community from '@/components/Community.vue';
import Portfolio from '@/components/Portfolio.vue';
import Process from '@/components/Process.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
    name: 'Index',
    store,
    components: {
        Header,
        Intro,
        Channel,
        Community,
        Portfolio,
        Process,
        Contact,
        Footer,
    },
});
</script>
