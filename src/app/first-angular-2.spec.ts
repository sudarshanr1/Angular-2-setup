import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {FirstAngular2App} from '../app/first-angular-2';

beforeEachProviders(() => [FirstAngular2App]);

describe('App: FirstAngular2', () => {
  it('should have the `defaultMeaning` as 42', inject([FirstAngular2App], (app: FirstAngular2App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([FirstAngular2App], (app: FirstAngular2App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

