const { I } = inject();

module.exports = {

  // locators
  aboutButton: '#footer_about',

  // methods
  goToAboutLink() {
    I.scrollTo(this.aboutButton);
    I.click(this.aboutButton);
  }
}


