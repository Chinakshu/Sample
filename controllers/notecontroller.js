const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get all notes" });
});

const getNote = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `${req.params.id}` });
});

const createNote = asyncHandler(async (req, res) => {
    console.log("the request body is:", req.body);
    res.status(200).json({ message: "add a note" });
});

const updateNote = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "update note" });
});

const deleteNote = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "delete note" });
});

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };