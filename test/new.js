const assert = require('assert');
const New = require('../wheels/new.js');

/* global describe it */
describe('Wheels#New', () => {
  it('should be {}', () => {
    const ret = New();

    assert.deepEqual(ret, {});
  });

  it('should be { a: 1, b: 2 }', () => {
    function A(a, b) {
      this.a = a;
      this.b = b;
    }
    const ret = New(A, 1, 2);

    assert.deepEqual(ret, { a: 1, b: 2 });
  });
});
