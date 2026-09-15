import express from 'express'


const app = express() // creating server instance
app.use(express.json()) // middelwear
app.post('/notes',(req,res)=>{
    console.log(req.body) ;
})

export {app} ;



