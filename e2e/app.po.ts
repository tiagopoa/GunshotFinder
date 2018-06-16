import { browser, element, by } from 'protractor';

export class GUNSHOTFINDERPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
