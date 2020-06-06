var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

app.use('/findToy', (req, res) => {
    var searchId = req.query.id;
    Toy.findOne({ id: searchId }, (err, toy) => {
        if (err || !toy) {
            res.type('html').status(200);
            res.json({});
        } else {
            res.json(toy);
        }
    });
});

app.use('/findAnimals', (req, res) => {
    var query = {};

    if (req.query.species) {
        query.species = req.query.species;
    }

    if (req.query.trait) {
        query.traits = req.query.trait;
    }
    
    if (req.query.gender) {
        query.gender = req.query.gender;
    }

    console.log(query);

    if (req.query.species === undefined && req.query.trait === undefined
        && req.query.gender === undefined) {
        res.json({});
    } else {
        Animal.find(query, { traits: 0 }, (err, animals) => {
            console.log(animals);
            if (err || animals.length === 0) {
                res.json({});
            } else {
                res.json(animals);
            }
        });
    }
});

app.use('/', (req, res) => {
	res.json({ msg : 'It works!' });
});


app.listen(3000, () => {
	console.log('Listening on port 3000');
});

// Please do not delete the following line; we need it for testing!
module.exports = app;