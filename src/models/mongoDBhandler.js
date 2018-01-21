const mongoose = require('mongoose')
const {dbaddress, dbuser, dbpassword} = require('../../config.json').test

const PRODUCTION_URI = ''//TODO add me later

const TEST_URI = dbaddress.replace('<dbuser>', dbuser).replace('<dbpassword>', dbpassword)

module.exports = {
    test_uri : TEST_URI
}
