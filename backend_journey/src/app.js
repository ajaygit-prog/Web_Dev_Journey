import express from 'express'


import nooteModel from './models/note.model'

const app = express() // creating server instance
app.use(express.json()) // middelwear

const note = [] ;
app.post('/notes',(req,res)=>{
    note.push(req.body)
    res.status(201).json({message :"note added successfully"}) ;
})


app.get('/notes' , (req,res)=>{
    res.status(200).json({
        message : " Notes fetched successfully" ,
        note : note
    })
})
//'/notes/:index' : (colon is used to tell express that after this all are dynamic in nature)
app.delete('/notes/:index', (req,res) =>{
    const idx = req.params.index ;
    delete note[idx] ;
    res.status(200).json({
        message : "deleted successfully"
    })
})


app.patch('/notes/:index',(req,res)=>{
    const idx = req.params.index ;
    const description = req.body.Description ;

    note[idx].Description = description ;
    res.status(200).json({
        message : "updated successfully "
    })
})


export {app} ;



