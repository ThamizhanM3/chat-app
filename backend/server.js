const express = require('express')
const cookieParser = require('cookie-parser');
require('dotenv').config()

const authRoutes = require('./routes/auth.routes')
const connectToMongoDB = require('./db/connectToMongoDB');
const messageRoutes = require('./routes/message.routes');
const userRoutes = require('./routes/user.routes');


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, async () => {
    console.log('Starting Server');
    await connectToMongoDB();
    console.log('Server is up and running on port : ' + PORT)
})