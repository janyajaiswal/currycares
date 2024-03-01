const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/createuser', async (req, res) => {//this endpoint is hit and data is sent into mongodb
    try {
        await   User.create({
                name: req.body.name,//use the same variable as taken in the async function
                password: req.body.password,
                email: req.body.email,
                location:req.body.location
        })

        res.json({ success: true });

    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

module.exports = router;