var chai = require('chai')
var myfun = require('../myfun.js')

var assert = chai.assert;

describe('myfun', function(){
    it('should return 3', function(){
        var x = myfun(1, 2);

        assert.equal(x, 3);
    });
});