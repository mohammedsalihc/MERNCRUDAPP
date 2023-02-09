const express = require('express');
const Users = require('../Models/userSchema');
const router = express.Router()



// router.get('/', (req, res) => {
//     console.log('connected')
// })

router.post('/register', async (req, res) => {
    const { name, email, job, number } = req.body;
    if (!name || !email || !job || !number) {
        res.status(404).send('please fill the data')
    }
    try {
        const preuser = await Users.findOne({ email: email })
        if (preuser) {
            res.status(404).send('this user already exist')
        } else {
            const adduser = new Users({
                name, email, job, number
            })
            await adduser.save()
            res.status(201).json(adduser)
            console.log(adduser)
        }

    } catch (error) {
        res.status(404).json(error)
    }
})

//get Allusers data

router.get('/getdata', async (req, res) => {
    try {
        const userData = await Users.find()
        res.status(200).json(userData)
    } catch (error) {
        res.status(404).json(error)
    }
})

//get user data
router.get('/getuser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.findById({ _id: id })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
})


//update user
router.patch('/updateuser/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updateduser = await Users.findByIdAndUpdate(id, req.body, {
            new: true
        })
        console.log(updateduser)
        res.status(201).json(updateduser)
    } catch (error) {
        res.status(422).json(error)
    }
})

//delete user

router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteuser = await Users.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteuser)
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router