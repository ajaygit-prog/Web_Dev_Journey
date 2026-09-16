import {app } from './src/app.js'

import {connectDB} from'./src/dataBase/db.js'

connectDB() ;


app.listen(3000 , ()=> console.log("hello i am server and i am running now ......")) // to listen we use this line and provide a door to server to listen request and send responses .