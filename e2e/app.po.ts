export class FirstAngular2Page {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('FirstAngular2-app p')).getText(); }
}
