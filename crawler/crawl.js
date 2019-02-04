'use strict';

const path = require('path')
const fs = require('fs');

const resource_channel = require('./resource_channel.json');
const resource_community = require('./resource_community.json');

const got = require('got');
const cheerio = require('cheerio');
const request = require('request');
const findRoot = require('find-root')

const channelInfo = {
    timestamp : '',
    youtube : [],
    steemit : [],
};

const communityInfo = {
    timestamp : '',
    cafe : []
}

const root = findRoot(__dirname)
let list
let imagePath

// 디렉토리가 없으면 만든다.
let directory = {
    image : {
        channel : root + '/src/assets/image/channel/',
        community : root + '/src/assets/image/community/',
    },
    conf : root + '/src/conf'
};

if (!fs.existsSync(directory.image.channel)) {
    fs.mkdirSync(directory.image.channel);
    console.log('채널 이미지 폴더를 생성했습니다.');
}

if (!fs.existsSync(directory.image.community)) {
    fs.mkdirSync(directory.image.community);
    console.log('커뮤니티 이미지 폴더를 생성했습니다.');
}

if (!fs.existsSync(directory.conf)) {
    fs.mkdirSync(directory.conf);
    console.log('json 파일이 저장될 폴더를 생성했습니다.');
}


// 이미지 다운로드 처리
let downloadImage = async function(uri) {
    await request(uri).on('response', function(res) {

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

        let img = root+'/src/assets/image/channel/'+list.id+'.'+extension
        this.pipe(fs.createWriteStream(root+'/src/assets/image/channel/'+list.id+'.'+extension));
        return imagePath = img

    })
};

// 채널 정보 긁어오기
async function getChannelInfo () {
    for (list of resource_channel) {
        let {url,$} = '';

        if (list.channel === 'cafe') {
            url = 'https://cafe.naver.com/'+list.id
            let res = await got(url);

            $ = cheerio.load(res.body);
            let subscriber = parseInt($('li.mem-cnt-info > a > em').text());

            console.log(subscriber);

            channelInfo.community.push({
                'id' : list.id,
                'name' : list.name,
                'href' : url,
                'image' : list.image,
                'subscriber' : subscriber
            });

            console.log('done : ' + list.channel + ' || ' + list.id);
        } else if (list.channel === 'youtube') {
            url = 'https://www.youtube.com/channel/'+list.id
            let res = await got(url);

            $ = cheerio.load(res.body);
            let subscriber = parseInt($('span.yt-subscription-button-subscriber-count-branded-horizontal.subscribed.yt-uix-tooltip').text().replace(',',''));
            let name = $('a.branded-page-header-title-link').text()
            let path = $('img.channel-header-profile-image').attr('src')

            // 이미지의 정보를 가지고 온다.
            let imageRes = await got(path)

            let imageName = (function () {
                // imageRes.body
                let extension
                if (/jpg|png|gif/gi.test(path)) {
                    extension = uri.substr(-3,3);
                } else {
                    extension = ((_ext) => {
                        return {
                            'jpeg' : 'jpg',
                            'png' : 'png',
                            'gif' : 'gif'
                        }[_ext]
                    })(imageRes.headers['content-type'].split('/')[1]);

                    return list.id+'.'+extension
                }
            })()

            // download image
            await request(path).pipe(fs.createWriteStream(root+'/src/assets/image/channel/'+imageName));

            channelInfo.youtube.push({
                'id' : list.id,
                'name' : list.name,
                'href' : url,
                'image' : imageName,
                'subscriber' : subscriber
            });

            console.log('done : ' + list.channel + ' || ' + name);

        } else if (list.channel === 'steemit') {
            let subscriber = await got('https://api.steemjs.com/get_follow_count?account='+list.id).then(res => {
                return JSON.parse(res.body).follower_count;
            });


            let name = list.id;
            let href = 'https://steemit.com/@'+list.id;

            let path = 'https://steemitimages.com/u/' + list.id + '/avatar'

            // 이미지의 정보를 가지고 온다.
            let imageRes = await got(path)

            let imageName = (function () {
                let extension
                if (/jpg|png|gif/gi.test(path)) {
                    extension = uri.substr(-3,3);
                } else {
                    extension = ((_ext) => {
                        return {
                            'jpeg' : 'jpg',
                            'png' : 'png',
                            'gif' : 'gif'
                        }[_ext]
                    })(imageRes.headers['content-type'].split('/')[1]);

                    return list.id+'.'+extension
                }
            })()

            await request(path).pipe(fs.createWriteStream(root+'/src/assets/image/channel/'+imageName));
            channelInfo.steemit.push({
                'id' : list.id,
                'name' : list.name,
                'href' : href,
                'image' : imageName,
                'subscriber' : subscriber
            });
            console.log('done : ' + list.channel + ' || ' + name);
        }
    }
}

async function getCommunityInfo () {
    for (list of resource_community) {
        let {url,$} = '';

        if (list.channel === 'cafe') {
            url = 'https://cafe.naver.com/'+list.id
            let res = await got(url);

            $ = cheerio.load(res.body);
            let subscriber = parseInt($('li.mem-cnt-info > a > em').text());

            console.log(subscriber);

            communityInfo.cafe.push({
                'id' : list.id,
                'name' : list.name,
                'href' : url,
                'image' : list.image,
                'subscriber' : subscriber
            });

            console.log('done : ' + list.channel + ' || ' + list.id);
        }
    }
}



//채널 정보 긁고 이미지 url 받아서 나중에 한번에 걸어서 이미지 받는걸로 해야되겠네
(async () => {
    await getChannelInfo()
    await getCommunityInfo()

    channelInfo.timestamp = Date.now();
    communityInfo.timestamp = Date.now();

    fs.writeFileSync(root+'/src/conf/channel_info.json', JSON.stringify(channelInfo));
    fs.writeFileSync(root+'/src/conf/community_info.json', JSON.stringify(communityInfo));
})();
