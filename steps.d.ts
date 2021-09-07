/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type mainPage = typeof import('./pages/main.js');
type navigationFragment = typeof import('./fragments/navigation.js');
type cookiesFragment = typeof import('./fragments/cookies.js');
type aboutPage = typeof import('./pages/about.js');
declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    current: any,
    mainPage: mainPage,
    navigationFragment: navigationFragment,
    cookiesFragment: cookiesFragment,
    aboutPage: aboutPage,
  }
  interface Methods extends Playwright { }
  interface I extends ReturnType<steps_file> { }
  namespace Translation {
    interface Actions { }
  }
}
