// locale 설정
(function () {
    var locale = document.querySelector('html')
    , userAgentLocale = navigator.language || navigator.userLanguage
    , title = document.querySelector('title')
    ;

    locale.lang = /ko/.test(userAgentLocale) ? 'ko' : 'en';
    title.innerText = /ko/.test(userAgentLocale) ? 'PYKL | 피클' : 'PYKL';
})();

