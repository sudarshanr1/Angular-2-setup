/// <reference path="../typings/main.d.ts" />

import { FirstAngular2Page } from './app.po';

describe('first-angular-2 App', function() {
  let page: FirstAngular2Page;

  beforeEach(() => {
    page = new FirstAngular2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('first-angular-2 Works!');
  });
});
