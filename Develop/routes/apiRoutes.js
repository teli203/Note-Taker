//dependencies//
const noteData = require("../db/db.json");

//router with api GET request//
module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });
}

// GET "/api/notes" responds with all notes from the database
app.post("/api/notes", (req, res) => {
  store, noteData.push(req.body)
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
app.delete("/app/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;