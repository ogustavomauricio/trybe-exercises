const assert = require('assert');

const sum = (n1,n2) => n1 + n2;

const expected = sum (0,0);

assert.equal(expected, 0, 'A soma de 0 + 0 = 0');
