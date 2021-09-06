const { I } = inject();

module.exports = {

  // locators
  aboutPageContent: 'Betclic possède une offre de paris sportifs complète sur l\'ensemble des sports autorisés par l\'ANJ.',

  // methods
  validateContent() {
    I.waitForText(this.aboutPageContent);
  }

}
