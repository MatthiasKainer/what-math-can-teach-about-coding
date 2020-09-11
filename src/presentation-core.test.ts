import {PresentationCore} from './presentation-core.js';

const assert = chai.assert;

suite('presentation-core', () => {
  test('is defined', () => {
    const el = document.createElement('presentation-core');
    assert.instanceOf(el, PresentationCore);
  });
});
