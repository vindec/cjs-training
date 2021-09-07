const { I } = inject();

module.exports = {

  // locators
  aboutButton: '#footer_about',
  aboutPageContent: '//div[contains(@class,"listeContent")]//p[1]',

  // methods
  validateContent(state) {
    for (let i = 1; i < state.numberOfLinks; i++) {
      I.assertContain(state['currentText' + i], state['expectedText' + i]);
    }
  }
}
