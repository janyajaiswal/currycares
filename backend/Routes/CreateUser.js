const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');//we generate this during login
const bcrypt = require("bcryptjs");
const { JsonWebTokenError } = require('jsonwebtoken');
const jwtSecret = "Apple3Tree7Carrot2Mountain" //random string chosen


// Custom requirements for password
const passwordValidator = (value) => {
    if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(value)) {
        throw new Error('Password must be at least 6 characters long and contain at least 1 uppercase letter and 1 number');
    }
    return true;
};

router.post('/createuser',
    [
        body('email', 'The email you entered is not recognized').isEmail(),
        body('password').custom(passwordValidator),
        body('name').notEmpty(),
        body('location').notEmpty()
    ],
    async (req, res) => {
        
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)//to secure data obtained from frontend
            try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            });

            res.json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
);

router.post('/loginuser',
    [
    body('email', 'The email you entered is not recognized').isEmail(),
    body('password').custom(passwordValidator),
    ],
    async (req, res) => {

        const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
        
    let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: [{ msg: "Email not found" }] });
            }
            //compare the hashed value with entered password
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

            if (!pwdCompare) {
                return res.status(400).json({ errors: [{ msg: "Incorrect Password" }] });
            }
            //now along with success true we also send an authorization token
            const data = {              //data must be an object
                user: {
                    id:userData.id
                }
            }

            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success:true, authToken:authToken });

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
);


module.exports = router;
