const assert = require('assert');

const sum = (n1,n2) => n1 + n2;

const expected = sum (5,4);

assert.equal(expected, 9, 'A soma de 5 + 4 = 9');