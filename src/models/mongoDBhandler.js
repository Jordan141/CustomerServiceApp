const {dbaddress, dbuser, dbpassword} = process.env

const TEST_URI = dbaddress.replace('<dbuser>', dbuser).replace('<dbpassword>', dbpassword)

module.exports = {
    test_uri : TEST_URI
}
