import express from 'express'
import {noteModel} from './models/note.model.js'

const app = express() // creating server instance
app.use(express.json()) // middelwear
app.post('/notes',async(req,res)=>{
    const data = req.body
    noteModel.create({
    title : data.title ,
    description : data.description 
    })

    res.status(201).json({message :"note added successfully"}) ;
})

app.get("/notes", async (req, res) => {
  
    const note  = await noteModel.find() ; // find method return an array and all the notes whatever written in database all note will stored in notes
    // similarly noteModel.findOne({title:"abc"}) then it will return only that node whose title is abc  return single object only .
  res.status(201).json({ message: "note added successfully",notes : note });
});
app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message:"notes deleted successfully"
    })
})
app.patch("/notes/:id", async(req,res) =>{
    const id = req.params.id ;
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id : id} , {description : description})
    res.status(200).json({
        message:"updated successfully "
    })

})

export {app} ;



