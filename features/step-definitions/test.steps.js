const {Given, When, Then} = require('@cucumber/cucumber')


Given(/^Launch url and click ember dropdown$/, async ()=>{
    var url = 'https://api.emberjs.com/ember/release'
    await browser.url(url)
    await $('.ember-power-select-trigger').click()
    await $('li[data-option-index="3"').click()
})