const express = require('express')
const app = express()
const cors = require('cors')
// const body_parser = require('body-parser')
const db_connect = require('./utils/db')
db_connect()


// app.use(body_parser.json())
app.use(express.json())

if (process.env.mode === 'production') {
    app.use(cors())
} else {
    app.use(cors({
        origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:3001"]
    }))
}
// CORS stands for Cross-Origin Resource Sharing.
// CORS is a way to control which websites/origin can make requests to your server, improving security for your API.


// const dotenv = require('dotenv')
// dotenv.config();
//or
require('dotenv').config()
const port = process.env.port

app.use('/',require('./routes/authRoutes'))
app.use('/',require('./routes/newsRoutes'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`server is listening on port ${port}!`))