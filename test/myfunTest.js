var chai = require('chai')
var myfun = require('../myfun.js')

var assert = chai.assert;

describe('myfun', function(){
    it('should return Hello World!\\n', function(){
        var x = myfun('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.' , '');

        assert.equal(x, 'Hello World!\n');
    });
});