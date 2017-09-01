const mongoose = require('mongoose')
const uri = require('../src/model/mongoDBhandler').test_uri
const should = require('chai').should()
const Dummy = mongoose.model('Dummy', new mongoose.Schema({a : Number}))
const clearDB = require('mocha-mongoose')(uri)

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
    it("can clear the DB on demand", function(done) {
        new Dummy({a: 5}).save(function(err, model){
          if (err) return done(err);
    
          clearDB(function(err){
            if (err) return done(err);
    
            Dummy.find({}, function(err, docs){
              if (err) return done(err);
    
              console.log(docs);
    
              docs.length.should.equal(0);
              done();
            });
          });
        });
      });
})