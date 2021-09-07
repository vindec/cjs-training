const { I, mainPage, cookiesFragment, navigationFragment, aboutPage } = inject();
let state = {};

Before(() => {
  state = {};
});

Given('a user coming to Betclic', () => {
  navigationFragment.goToMainPage();
});

When('the user goes to the link in footer', async (dataTable) => {
  cookiesFragment.rejectCookies();
  await navigationFragment.goToFooterLink(dataTable, state);
});

Then('the user sees text content in the page', () => {
  aboutPage.validateContent(state);
});
