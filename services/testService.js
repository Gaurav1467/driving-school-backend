const GetDbConnection = require("../database/connection");
const Question = require("../models/questionsSchema");
const UserTests = require("../models/userTests");
const {Types} = require("mongoose");
const mongoose = require("mongoose");


async function GetQuestions() {
    // let connection = GetDbConnection()
    try {
        let questions = await Question.aggregate([{$sample: {size: 10}}]).exec();
        if (questions == null) {
            throw new Error("Something went wrong")
        }
        console.log(questions)
        let responseDataList = []
        for (let i = 0; i < questions.length; i++) {
            let responseData = {};
            responseData._id = questions[i]._id.toString()
            responseData.label =[questions[i].option_one, questions[i].option_two, questions[i].option_three, questions[i].option_four]
            responseData.question_data = questions[i].question_data
            responseData.option_one = questions[i].option_one
            responseData.option_two = questions[i].option_two
            responseData.option_three = questions[i].option_three
            responseData.option_four = questions[i].option_four
            responseDataList.push(responseData)
        }
        return responseDataList
    } catch (error) {
        console.error('Error:', error);
        return error
    } finally {
        // await connection.close()
    }
}

async function StartUserTest(userId, questionIds, timeStamp) {
    // let connection = GetDbConnection()
    try {
        let existingTest = await UserTests.find({user_id: userId, is_completed: 0})
        if (existingTest == null) {
            throw new Error("You have an existing on going test")
        }
        let questionIdsObj = []
        for (let i = 0; i < questionIds.length; i++) {
            questionIdsObj.push(new mongoose.Types.ObjectId(questionIds[i]))
        }
        const newUserTest = new UserTests({
            user_id: new mongoose.Types.ObjectId(userId),
            question_bank: questionIdsObj,
            score: 0,
            start_time: timeStamp,
            is_completed: false,

        });
        let newTest = await newUserTest.save();
        return newTest._id.toString();
    } catch (error) {
        console.error('Error:', error);
        return error
    } finally {
        // await connection.close()
    }
}

async function EndUserTest(userId, userTestId, timeStamp, questionIdAnswersMap) {
    // let connection = GetDbConnection()
    try {
        let existingTest = await UserTests.findOne({_id: userTestId, user_id: userId, is_completed: 0})
        if (existingTest == null) {
            throw new Error("You have no existing test going on")
        }
        if ((timeStamp - existingTest.start_time) / 60000  > 10) {
            existingTest.end_time = timeStamp
            existingTest.is_completed = true
            existingTest.correct_questions = []
            existingTest.wrong_questions = []
            existingTest.save()
            return 0
        }
        let questionIdsStrList = Object.keys(questionIdAnswersMap)
        // set diff of existingTest question_bank and questionIdsStrList must be 0
        let questionsIds = []
        for (let i = 0; i < questionIdsStrList.length; i++) {
            questionsIds.push(new mongoose.Types.ObjectId(questionIdsStrList[i]))
        }

        let questions = await Question.find({_id: { $in: questionsIds }})
        if (questions == null && questions.length !== 10) {

        }
        correctQuestionsIds = []
        wrongQuestionsIds = []


        for(let i=0; i<questions.length; i++) {
            questionIdStr = questions[i]._id.toString()
            console.log(questionIdStr)
            if (questionIdAnswersMap[questionIdStr] !== null){
                if (questionIdAnswersMap[questionIdStr] === questions[i].answer_key) {
                    correctQuestionsIds.push(questions[i]._id)
                } else {
                    wrongQuestionsIds.push(questions[i]._id)
                }
            } else {
                wrongQuestionsIds.push(questions[i]._id)
            }
        }


        existingTest.end_time = timeStamp
        existingTest.score = correctQuestionsIds.length
        existingTest.is_completed = true
        existingTest.correct_questions = correctQuestionsIds
        existingTest.wrong_questions = wrongQuestionsIds
        await existingTest.save({})
        console.log(correctQuestionsIds.length)
        return correctQuestionsIds.length

    } catch (error) {
        console.error('Error:', error);
        return error
    } finally {
        // await connection.close()
    }
}

function GetPastUserTests(userId) {
    // two objects, one a list of user test and the other is the performance analysis

}

module.exports = {GetQuestions, StartUserTest, EndUserTest}
