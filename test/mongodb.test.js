const mongoose = require('mongoose')
const uri = require('../src/models/mongoDBhandler').test_uri
const Dummy = mongoose.model('Dummy', new mongoose.Schema({a : Number}))

describe('Example spec for a model', () => {
    beforeEach(function(done){
        if(mongoose.connection.db) return done()
        
        mongoose.connect(uri, done)
    })

    it('can be saved', function(done){
        new Dummy({a : 1}).save(done)
    })
    it("can be listed", function(done) {
        new Dummy({a: 1}).save(function(err, model){
          if (err) return done(err);
    
          new Dummy({a: 2}).save(function(err, model){
            if (err) return done(err);
    
            Dummy.find({}, function(err, docs){
              if (err) return done(err);
    
              // without clearing the DB between specs, this would be 3
              docs.length.should.equal(2);
              done();
            });
          });
        });
    });
})