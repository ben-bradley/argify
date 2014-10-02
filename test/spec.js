var should = require('should'),
  args = require('../');

describe('argify', function () {

  it('should return an object', function (done) {
    (args).should.be.an.Object;
    done();
  });

  it('should have a property "blargh" == "honk"', function (done) {
    (args.blargh).should.equal('honk');
    done();
  });

});
