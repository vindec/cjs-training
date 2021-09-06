const { I, mainPage, cookiesFragment, footerFragment, aboutPage } = inject();

Given('a user coming to Betclic', () => {
  mainPage.goToMainPage();
});

When('the user goes to the about link in footer', () => {
  cookiesFragment.rejectCookies();
  footerFragment.goToAboutLink();
});

Then('the user sees text content in the about page', () => {
  aboutPage.validateContent();
  
  I.say('I will wait 2 seconds because it\'s too fast') // not mandatory for testing
  I.wait(2)// not mandatory for testing
});
