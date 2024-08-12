const  express = require('express')
const  dotenv = require ('dotenv')
const  mongoose = require ('mongoose')
const  cors = require('cors')
// const  cookieParser = require ('cookie-parser')
const  authRoute = require ('./routes/auth.js')
const  classroomRoute = require ('./routes/classroom.js')


dotenv.config()
const app = express()
const port = process.env.PORT || 5000


const connect = async()=>
{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Assignment");
        console.log('MongoDb connection successful')
    } catch (err) {
        console.log('MongoDb connection failed')
    }
}

// middleware
app.use(express.json())
app.use(cors( { origin: 'http://localhost:3000',credentials: true,}))
// app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/classrooms', classroomRoute)

app.listen(port, ()=>
    {
        connect();
        console.log('server is listening on port ',port)
    })