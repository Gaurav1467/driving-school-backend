const express = require('express')
const userRouter = require('./route/user')
const testRouter = require('./route/tests')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 4300
const connectToMongo = require('./db');

connectToMongo()
app.use(express.json());
app.use(userRouter);
app.use(testRouter);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))