const express = require('express')
const userRouter = require('./route/user')
const app = express()
const port = 5000
const connectToMongo = require('./db');

connectToMongo()
app.use(express.json());
app.use(userRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))