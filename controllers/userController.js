const User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const validator = require('../utils/validator');
var jwt = require('jsonwebtoken');

exports.index = (req, res) => {
    res.json({ "message": "Hello World." });
};

exports.create = async (req, res) => {
    const val = new validator(req.body, {
        name: "required|string",
        email: "required|email|unique:User,email",
        password: "required|string",
    });
    const passed = await val.check();
    if (passed) {
        const request = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, saltRounds)
        };
        User.create(request).then((user) => {
            const response = {
                _id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            };
            res.json({
                message: "User created successfully.",
                user: response,
                token: jwt.sign(response , process.env.APP_KEY)
            });
        })
            .catch(error => {
                res.status(422).json({
                    message: "Unable to insert data.",
                    error: error.message
                });
            });
    }
    else {
        res.status(422).json(val.errors);
    }
};

exports.login = async (req, res) => {
    const val = new validator(req.body, {
        email: "required|email",
        password: "required|string"
    });
    let matched = await val.check();
    if (matched) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        const response = {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            createdAt: user.createdAt,
                            updatedAt: user.updatedAt,
                        };
                        res.json({
                            message: "Logged in successfully.",
                            user: response,
                            token: jwt.sign(response , process.env.APP_KEY)
                        });
                    } else {
                        res.status(422).json({ error: "Invalid password." });
                    }
                }
                else {
                    res.status(422).json({ error: "We can't find such account." });
                }
            }).catch(e => {
                res.status(e.status || 500).json({ error: e.message });
            });
    }
    else {
        res.status(422).json(val.errors);
    }
};

exports.profile = (req , res) => {
    res.json({user: req.user});
};