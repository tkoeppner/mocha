function add(a, b) {
  return a + b;
}

var assert = require('assert');

describe('add', function() {
    it('should return 5 for 2 + 3', function() {
      assert.equal( add(2, 3), 5); 
    })
    it('should return 2 for 1 + 1', function() {
      assert.equal( add(1, 1), 2 );
    })
    it('should return 0 for 0 + 0', function() {
      assert.equal( add(0, 0), 0 );
    })
});
