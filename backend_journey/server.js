import {app } from './src/app.js' 

import dotenv from 'dotenv' ;

dotenv.config() ;

import {connectDB} from'./src/dataBase/db.js'

connectDB() ;

const PORT = process.env.PORT ;
app.listen(PORT, ()=> console.log("hello i am server and i am running now ......")) // to listen we use this line and provide a door to server to listen request and send responses .