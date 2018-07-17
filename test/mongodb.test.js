const mongoose = require('mongoose')
const uri = require('../src/models/mongoDBhandler').test_uri

describe('Can successfully connect to the DB', () => {
    beforeEach(function(done){
        if(mongoose.connection.db) return done()
        
        mongoose.connect(uri, done)
    })
})