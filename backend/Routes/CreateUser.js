const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Custom requirements for password
const passwordValidator = (value) => {
    if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(value)) {
        throw new Error('Password must be at least 6 characters long and contain at least 1 uppercase letter and 1 number');
    }
    return true;
};

router.post('/createuser',
    [
        body('email','The email you entered is not recognized').isEmail(),
        body('password').custom(passwordValidator)
    ],
    async (req, res) => {
        
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
        try {

            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location

            }).then(res.json({ success: true }))

        } catch (error) {
            console.log(error);
            res.json({ success: false});
        }
    }
);

module.exports = router;
