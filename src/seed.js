const Support = require('./models/support')

const lorem = ''
const data = [
    {
        username: 'staffMember1',
        password: 'password123',
        avatar: 'https://pbs.twimg.com/profile_images/1724449330/stick_man_by_minimoko94-d2zvfn8_400x400.png',
        firstName: 'John',
        lastName: 'Doe',
        rating: 3
    },
    {
        username: 'staffMember2',
        password: 'password124',
        avatar: 'https://store-images.s-microsoft.com/image/apps.38874.13510798884252984.23bfe3c5-20d9-46e3-88cf-a79182fb224b.c4d535a8-c2e4-4da5-bac5-86d5ad4c1264?w=180&h=180&q=60',
        firstName: 'Jerry',
        lastName: 'Brown',
        rating: 4
    },
    {
        username: 'staffMember3',
        password: 'password125',
        avatar: 'https://comps.canstockphoto.com/vector-stickman-cartoon-of-boxer-with-clip-art-vector_csp45033368.jpg',
        firstName: 'Matt',
        lastName: 'Smith',
        rating: 1
    },
    {
        username: 'staffMember4',
        password: 'password123',
        avatar: 'https://thumbs.dreamstime.com/b/stick-figure-stickman-icon-pictogram-vector-simple-stick-figure-stickman-icon-pictogram-vector-simple-illustration-stickman-102222321.jpg',
        firstName: 'Jenny',
        lastName: 'O Connel',
        rating: 5
    },
    {
        username: 'staffMember5',
        password: 'password123',
        avatar: 'https://content.invisioncic.com/r125076/monthly_2017_05/CTstickman.png.c47f51b72a0c5a7bf3ec8a7058000093.png',
        firstName: 'Barry',
        lastName: 'White',
        rating: 2
    }
]

function seedDB(){
    Support.remove({}, err => {
        if (err) return console.log(err)

        data.forEach(seed => Support.create(seed, (err, employee) => {
            if(err) return console.log(err)
        }))
    })
}

module.exports = seedDB;