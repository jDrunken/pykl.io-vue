'use strict';

const fs = require('fs');
const list = require('./resource.json');
const got = require('got');
const cheerio = require('cheerio');
const request = require('request');

const result = {
    timestamp : '',
    youtube : [],
    steemit : []
};
let provider;

// 이미지 다운로드 처리

let downloadImage = function(uri, filename, callback){
    request.head(uri, function(err, res, body){

        // console.log(uri);
        // console.log(res.headers['content-type']);

        let extension;

        if (/jpg|png|gif/gi.test(uri)) {
            extension = uri.substr(-3,3);
        } else {
            extension = ((_ext) => {
                return {
                    'jpeg' : 'jpg',
                    'png' : 'png',
                    'gif' : 'gif'
                }[_ext]
            })(res.headers['content-type'].split('/')[1]);
        }

        request(uri).pipe(fs.createWriteStream('../src/assets/image/channel/'+provider.id+'.'+extension)).on('close', callback);
    });
};

// 채널 정보 긁어오기
async function get () {
    for (provider of list) {
        let {url,$} = '';

        if (provider.channel === 'youtube') {
            url = 'https://www.youtube.com/channel/'+provider.id
            let res = await got(url);

            $ = cheerio.load(res.body);
            let subscriber = $('span.yt-subscription-button-subscriber-count-branded-horizontal.subscribed.yt-uix-tooltip').text();
            let name = $('a.branded-page-header-title-link').text();
            let image = $('img.channel-header-profile-image').attr('src')
            downloadImage(image, provider.id , function(){
                // console.log('image downloaded');
            });

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
            let image = await got('https://steemitimages.com/u/' + provider.id + '/avatar').then(res => {
                if (!!res.url) {
                    downloadImage(res.url, provider.id , function(){
                        // console.log('image downloaded');
                    });
                }
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
