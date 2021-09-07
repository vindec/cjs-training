const { I, aboutPage, mainPage } = inject();

module.exports = {

    // locators

    // methods

    goToMainPage() {
        I.amOnPage(mainPage.mainPageUrl);
    },

    async goToFooterLink(dataTable, state) {

        state.numberOfLinks = Object.keys(dataTable.parse().hashes()[0]).length;

        for (let i = 1; i < state.numberOfLinks; i++) {

            state['expectedText' + i] = Object.entries(dataTable.parse().hashes()[1])[i][1];

            I.scrollTo(aboutPage.aboutButton);
            I.click(Object.entries(dataTable.parse().hashes()[0])[i][1]);
            I.waitForElement(aboutPage.aboutPageContent, 10);
            state['currentText' + i] = await I.grabTextFrom(aboutPage.aboutPageContent);
            this.goToMainPage();
        }
    }
}
