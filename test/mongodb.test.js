const {MongoClient} = require('mongodb'),
assert = require('assert')
const {dbaddress, dbuser, dbpassword} = require('../config.json')
const url = dbaddress.replace('<dbuser>', dbuser).replace('<dbpassword>', dbpassword)

MongoClient.connect(url, (err,db) => {
    assert.equal(null, err)
    console.log('Connected correctly to the database: ' + new Date())
})


