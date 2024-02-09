const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth')
const multer = require('multer');
const sharp = require('sharp');

const router = new express.Router();



router.post('/user', async (req,res) => {


    try {
        const user = await User(req.body);
        const user1 = await User.generateAuthToken(user);
        await user1.save();
        res.status(201).send(user1);
    } catch (error) {
        res.status(400).send(error);
    }

})

router.get('/users/me', auth, async (req,res) => {
    res.send(req.user);
    
})


router.patch('/update', auth,  async( req, res) => {

    const allowedUpdate = ["name", "email", "password", "address", "pin", "state", "mobile"];
    const updates = Object.keys(req.body);
    const isValidUpdate = updates.every((update) => allowedUpdate.includes(update));
  

    if(!isValidUpdate){
        return res.status(400).send({error : "Invaild Updates!"});
    }

    try {
        const user = req.user;
        

        updates.forEach((item) =>{
            user[item] = req.body[item];
        })

        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send(error)
    }
})


router.post('/login', async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findByCreds(email, password);
        const token = await User.generateAuthToken(user);
        res.send({user,token});
    } catch (error) {
        res.status(401).send(error);
    }
})

router.post('/logout', auth,  async (req,res)=> {
   try{
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();


    res.send({success : "Logout successfully!"})
   } catch(error){
    res.status(500).send(error);
   }
}) 

router.post('/logoutAll', auth, async (req,res) => {
    try{
        req.user.tokens = [];
        await req.user.save();

        res.send({success : "Logout from all acoount successfully!"})

    } catch(error){
        res.status(500).send(error);
    }
})

const upload =  multer({
    limits : {
        fileSize : 1000000
    },
    fileFilter (req, file, cb ) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            cb( new Error("Please upload File with jpg, jpeg or png extensions"));
        }

        cb(undefined, true);
    }
})

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req,res) =>{
    const buffer = await sharp(req.file.buffer).resize({width : 300, height : 300 }).png().toBuffer();
    req.user.avatar = buffer;

    await req.user.save();
    res.send();
}, (error, req, res, next ) => {
    res.status(400).send({error : error.message});
})

router.delete('/users/me/avatar/delete', auth, async (req, res) => {

    req.user.avatar = undefined
    await req.user.save();
    res.send();
})

router.get('/users/:id/avatar', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user || !user.avatar){
            throw new Error();
        }

        res.set('Content-Type', 'image/png');
        res.send(user.avatar);
    } catch (e) {
        res.status(404).send();
    }
})

module.exports = router

