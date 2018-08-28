const { of, throwError } = require('rxjs');
const init = require('./index');

init(() => of(true), () => throwError(false));
