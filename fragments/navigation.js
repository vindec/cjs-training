const { I, mainPage, aboutPage, responsibleGamingPage } = inject();

module.exports = {

    // locators

    // methods

    goToMainPage() {
        I.amOnPage(mainPage.mainPageUrl);
    }
}
