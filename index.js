const { of } = require('rxjs');
const { switchMap } = require('rxjs/operators');

module.exports = (reqA, reqB) =>
  of('test')
    .pipe(
      switchMap(reqA),
      switchMap(reqB)
    )
    .subscribe(
      data =>
        console.log('ok', data),
      error => {
        console.log('e', error)
        thisWillFail();
      }
    )
