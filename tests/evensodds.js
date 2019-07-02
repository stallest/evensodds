module.exports = {
    beforeEach: browser => {
        browser.url: ('https://devmountain-qa.github.io/Automation-Basics/build/')
    },
    after: browser => {

    },
    'Login': browser => {
        browser
            .click('input[name="evenOddInput"]')
            .setValue('input[name="evenOddInput"]', '')
    }