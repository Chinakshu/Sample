const express = require("express");
const { getNotes,
getNote,
updateNote,
createNote,
deleteNote } = require("../controllers/notecontroller");
const router = express.Router();

router.route("/").get(getNotes);

router.route("/:id").get(getNote);

router.route("/").post(createNote);

router.route("/").put(updateNote);

router.route("/").delete(deleteNote);

module.exports = router;