'use strict';

const fs = require('fs');

const list = require('./resource.json');
const got = require('got');
const cheerio = require('cheerio');

const result = {
    timestamp : '',
    youtube : [],
    steemit : []
};

// get channel information
// list.forEach((provider) => {
    // let {url,$} = '';

    // if (provider.channel === 'youtube') {
        // url = 'https://www.youtube.com/channel/'+provider.id
        // got(url).then(res => {
            // $ = cheerio.load(res.body);
            // let subscriber = $('span.yt-subscription-button-subscriber-count-branded-horizontal.subscribed.yt-uix-tooltip').text();
            // let name = $('a.branded-page-header-title-link').text();
            // // !!! 이거 이미지 다운로드 받아야 되는구나
            // let image = $('img.channel-header-profile-image').attr('src')
            // let href = url;
            // // console.log(href);
            // result.youtube.push({
                // 'name' : name,
                // 'href' : href,
                // 'image' : image,
                // 'subscriber' : subscriber
            // });
        // });
    // } else if (provider.channel === 'steemit') {
        // // url =
        // let subscriber = got('https://api.steemjs.com/get_follow_count?account='+provider.id).then(res => {
            // return JSON.parse(res.body).follower_count;
        // });
        // let name = provider.id;
        // let image = got('https://api.steemjs.com/get_accounts?names[]='+provider.id).then(res => {
            // // !!! 이거 이미지 다운로드 받아야 되는구나
            // // console.log(JSON.parse(JSON.parse(res.body)[0].json_metadata).profile.profile_image);
        // });
        // let href = 'https://steemit.com/@'+provider.id;

        // result.steemit.push({
            // 'name' : name,
            // 'href' : href,
            // 'image' : image,
            // 'subscriber' : subscriber
        // });
    // }
// });

// fs.writeFileSync('./channel_info.json', JSON.stringify(result));

// 함수를 만들고 그로부터 비동기 처리 후에 뭔가를 해보자.
let provider;

async function get () {
    for (provider of list) {
        let {url,$} = '';

        if (provider.channel === 'youtube') {
            url = 'https://www.youtube.com/channel/'+provider.id
            let res = await got(url);

            $ = cheerio.load(res.body);
            let subscriber = $('span.yt-subscription-button-subscriber-count-branded-horizontal.subscribed.yt-uix-tooltip').text();
            let name = $('a.branded-page-header-title-link').text();
            // !!! 이거 이미지 다운로드 받아야 되는구나
            let image = $('img.channel-header-profile-image').attr('src')
            let href = url;
            result.youtube.push({
                'name' : name,
                'href' : href,
                'image' : image,
                'subscriber' : subscriber
            });
            console.log('done : ' + provider.channel + ' || ' + name);
        } else if (provider.channel === 'steemit') {
            let subscriber = await got('https://api.steemjs.com/get_follow_count?account='+provider.id).then(res => {
                return JSON.parse(res.body).follower_count;
            });

            let name = provider.id;
            let image = await got('https://api.steemjs.com/get_accounts?names[]='+provider.id).then(res => {
                // !!! 이거 이미지 다운로드 받아야 되는구나
                return JSON.parse(JSON.parse(res.body)[0].json_metadata).profile.profile_image;
            });
            let href = 'https://steemit.com/@'+provider.id;

            result.steemit.push({
                'name' : name,
                'href' : href,
                'image' : image,
                'subscriber' : subscriber
            });
            console.log('done : ' + provider.channel + ' || ' + name);
        }
    }
}

(async () => {
    await get();
    result.timestamp = Date.now();
    fs.writeFileSync('../src/conf/channel_info.json', JSON.stringify(result));
})();
// 이제 뭐 어쩌라는 이야기냐?
