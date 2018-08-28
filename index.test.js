const { of, throwError } = require('rxjs');
const init = require('./index');

test('wtf', () => {
  init(() => of(true), () => throwError(false));
  console.log('next');
  expect(1).toBe(1);
});
