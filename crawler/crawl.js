'use strict';

const fs = require('fs');
const path = require('path');
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
// let imageFileName;

// 디렉토리가 없으면 만든다.
let directory = {
    image : '../src/assets/image/channel/',
    conf : path.join(__dirname, '..','src','conf')
};

// if (!fs.existsSync(directory.image)) {
    // fs.mkdirSync(directory.image);
    // console.log('이미지 폴더를 생성했습니다.');
// }

if (!fs.existsSync(directory.conf)) {
    fs.mkdirSync(directory.conf);
    console.log('json 파일이 저장될 폴더를 생성했습니다.');
}


// 이미지 다운로드 처리
// const downloadImage = function(uri, filename, callback){
    // request.head(uri, async function(err, res, body){

        // let extension;

        // if (/jpg|png|gif/gi.test(uri)) {
            // extension = uri.substr(-3,3);
        // } else {
            // extension = ((_ext) => {
                // return {
                    // 'jpeg' : 'jpg',
                    // 'png' : 'png',
                    // 'gif' : 'gif'
                // }[_ext]
            // })(res.headers['content-type'].split('/')[1]);
        // }

        // await request(uri).pipe(
            // fs.createWriteStream(directory.image + provider.id + '.' + extension)
        // ).pipe(
            // (function () {
               // return imageFileName = provider.id + '.' + extension;
            // })()
        // ).on('close', callback);
    // });
// };

// 파일명 생성 :: url을 받아와서 파일명으로 가공한다.
// const getFileName = function (uri) {
// };

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

            let src = $('img.channel-header-profile-image').attr('src')
            // await downloadImage(src, provider.id, function () {});

            let href = url;
            result.youtube.push({
                'name' : name,
                'href' : href,
                // 'image' : imageFileName,
                'image' : src,
                'subscriber' : subscriber
            });
            console.log('done : ' + provider.channel + ' || ' + name);
        } else if (provider.channel === 'steemit') {
            let subscriber = await got('https://api.steemjs.com/get_follow_count?account='+provider.id).then(res => {
                return JSON.parse(res.body).follower_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            });

            let name = provider.id;

            // let src = await got('https://steemitimages.com/u/' + provider.id + '/avatar').then(res => {
                // console.log(res.body);
                // return JSON.parse(JSON.parse(res.body)[0].json_metadata).profile.profile_image;
                // if (!!res.url) {
                    // downloadImage(res.url, provider.id, function () {});
                // }
            // });

            let src = 'https://steemitimages.com/u/' + provider.id + '/avatar';
            let href = 'https://steemit.com/@'+provider.id;

            result.steemit.push({
                'name' : name,
                'href' : href,
                // 'image' : imageFileName,
                'image' : src,
                'subscriber' : subscriber
            });
            console.log('done : ' + provider.channel + ' || ' + name);
        }
    }
}

(async () => {
    await get();
    result.timestamp = Date.now();
    fs.writeFileSync(directory.conf + '/channel_info.json', JSON.stringify(result));
})();
