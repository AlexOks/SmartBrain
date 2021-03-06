const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

const db =  knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'smart-brain'
    }
  });

  db.select('*').from('users').then(data => {
      console.log(data);
  });
const saltRounds = 10;

const app = express();

app.use(bodyParser.json());
app.use(cors());
const database = {
    users: [
        {
            id: '123',
            name: 'Sasha',
            email: 'alex@gmail.com',
            password: 'qwerty',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Andrey',
            email: 'andrey@gmail.com',
            password: 'qwerty1',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'alex@gmail.com'
        }
    ]
}

app.get('/', (req, res) =>{
    res.send(database.users);
})

app.post('/signin', (req, res) => {
    bcrypt.compare('qwerty2', '$2b$10$S/keJFnYsJsPKagb0q97HOJirDa9LpQku4mdSnnkbkauGWKPSECo6', function(err, res) {
       console.log('first guess', res)
    });
    bcrypt.compare('apples', '$2b$10$S/keJFnYsJsPKagb0q97HOJirDa9LpQku4mdSnnkbkauGWKPSECo6', function(err, res) {
        console.log('second guess', res)
    });
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json(database.users[0]);
    } else {
        res.status(400).json('error logging in');
    }
})

app.post('/register', (req, res) => {
    const { email, name, password} = req.body;
    db('users').insert({
        email: email,
        name: name,
        joined: new Date()
    }).then(console.log)
    res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        }
    })
    if (!found) {
        res.status(404).json('not found');
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if (!found) {
        res.status(404).json('not found');
    }
})




app.listen(3000, () => {
    console.log('api is run on port 3000');
})


/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/
