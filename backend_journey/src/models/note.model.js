import mongoose from 'mongoose'


const noteSchema = new mongoose.Schema({
    title : String ,
    description : String,
})


const noteModel = mongoose.model("noteModel", noteSchema)

export {noteModel}