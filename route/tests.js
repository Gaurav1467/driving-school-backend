
const express = require('express');
const auth = require('../middleware/auth')
const {GetQuestions, StartUserTest, EndUserTest} = require("../services/testService");
const router = new express.Router();
router.get('/questions', async (req,res) => {
    let responseData = await GetQuestions()
    res.send(responseData).status(200)
})

router.post('/startTest', auth, async (req,res) => {
    return await StartUserTest
})

router.post('/endTest', auth, async (req,res) => {
    return await EndUserTest
})

module.exports = router