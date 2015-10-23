var assert = require('assert');
var ns = require('../leya-ns');

describe('leya-ns', function () {
  var ins;
  
  context('when instantiated', function() {

    context('when having no parameter', function() {
      it('should not throw an error', function() {
        assert.doesNotThrow(function() {
          ins = new ns();
        });
      });
    });
    
    context('when having an object parameter', function() {
      it('should have this.placeHolder', function() {
        ins = new ns({});
        assert.equal(typeof ins.placeHolder == 'object', true);
      });
    });
    
    ins = new ns({});
    it('should have method namespace', function() {
      assert.equal(!!ins.namespace, true);
    });
    it('should have method ns', function() {
      assert.equal(!!ins.ns, true);
    });
    it('should have method namespaceRef', function() {
      assert.equal(!!ins.namespaceRef, true);
    });
    it('should have method nsRef', function() {
      assert.equal(!!ins.nsRef, true);
    });
  });
  
  context('when not instantiated', function() {
    it('should not have method namespace', function() {
      assert.equal(!ns.namespace, true);
    });
    it('should not have method ns', function() {
      assert.equal(!ns.ns, true);
    });
    it('should not have method namespaceRef', function() {
      assert.equal(!ns.namespaceRef, true);
    });
    it('should not have method nsRef', function() {
      assert.equal(!ns.nsRef, true);
    });
  });
  
  // describe('#new', function () {
  //   context('when not present', function () {
  //     it('should not throw an error', function () {
        
  //     });
  //     it('should return -1', function () {
        
  //     });
  //   });
  //   context('when present', function () {
  //     it('should return the index where the element first appears in the array', function () {
        
  //     });
  //   });
  // });
});