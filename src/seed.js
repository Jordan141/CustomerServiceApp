const Support = require('./models/support')

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at viverra erat, eget scelerisque magna. Cras eu tortor dignissim magna blandit tristique. Sed vehicula ut urna eu tincidunt. Aliquam quis ante ipsum. Ut condimentum tortor ac volutpat ornare. Cras dolor sem, porta ut tempus nec, varius a lorem. Fusce quis felis non nisi suscipit fermentum sit amet in lectus. Curabitur condimentum purus nisi, et dignissim mauris viverra ac. Aenean ultricies risus id ligula placerat tincidunt. Sed faucibus massa a lorem sollicitudin ullamcorper. In posuere imperdiet ornare.`
const data = [
    {
        username: 'staffMember1',
        password: 'password123',
        avatar: 'https://pbs.twimg.com/profile_images/1724449330/stick_man_by_minimoko94-d2zvfn8_400x400.png',
        firstName: 'John',
        lastName: 'Doe',
        bio: lorem,
        department: 'Human Resources',
        rating: 3,
        verified: true
    },
    {
        username: 'staffMember2',
        password: 'password124',
        avatar: 'https://store-images.s-microsoft.com/image/apps.38874.13510798884252984.23bfe3c5-20d9-46e3-88cf-a79182fb224b.c4d535a8-c2e4-4da5-bac5-86d5ad4c1264?w=180&h=180&q=60',
        firstName: 'Jerry',
        lastName: 'Brown',
        bio: lorem,
        department: 'Accounting',
        rating: 4,
        verified: true
    },
    {
        username: 'staffMember3',
        password: 'password125',
        avatar: 'https://comps.canstockphoto.com/vector-stickman-cartoon-of-boxer-with-clip-art-vector_csp45033368.jpg',
        firstName: 'Matt',
        lastName: 'Smith',
        bio: lorem,
        department: 'Technical Support',
        rating: 1,
        verified: true
    },
    {
        username: 'staffMember4',
        password: 'password123',
        avatar: 'https://thumbs.dreamstime.com/b/stick-figure-stickman-icon-pictogram-vector-simple-stick-figure-stickman-icon-pictogram-vector-simple-illustration-stickman-102222321.jpg',
        firstName: 'Jenny',
        lastName: 'O Connel',
        bio: lorem,
        department: 'Finance',
        rating: 5,
        verified: true
    },
    {
        username: 'staffMember5',
        password: 'password123',
        avatar: 'https://content.invisioncic.com/r125076/monthly_2017_05/CTstickman.png.c47f51b72a0c5a7bf3ec8a7058000093.png',
        firstName: 'Barry',
        lastName: 'White',
        bio: lorem,
        department: 'Marketing',
        rating: 2,
        verified: true
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