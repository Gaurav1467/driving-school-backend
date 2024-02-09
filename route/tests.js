
const express = require('express');
const auth = require('../middleware/auth')
const {GetQuestions, StartUserTest, EndUserTest} = require("../services/testService");
const router = new express.Router();
router.get('/questions', async (req,res) => {
    let responseData = await GetQuestions()
    res.send(responseData).status(200)
})

router.post('/startTest', async (req,res) => {
    console.log(req.body)
    id =  await StartUserTest(req.body.user, req.body.questionIds, req.body.timestamp)
    res.send(id).status(200)
})

router.post('/endTest', async (req,res) => {
    console.log(req.body)
    x = await EndUserTest('asasa', req.body.userTestId , req.body.timestamp,req.body.TestData)
    res.send(x).status(200)
})

module.exports = router