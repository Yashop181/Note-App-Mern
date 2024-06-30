const Note = require('../models/Note');

const getNotes = async (req,res)=>{
    try {
        const notes = await Note.find()
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createNotes = async (req,res) =>{
    const {title,content} = req.body;
    try {
        const newNote = new Note({
            title,
            content,
        })
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const deleteNote = async (req,res) =>{
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note)
            {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.json({ message: 'Note removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports ={
    getNotes,
    createNotes,
    deleteNote,
}