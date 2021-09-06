const { I } = inject();

module.exports = {

  // locators
  mainPageUrl: 'https://www.betclic.fr/',

  // methods
  goToMainPage() {
    I.amOnPage(this.mainPageUrl);
  }

}
