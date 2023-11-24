const knex = require("../database/knex");

class NotesController {
  async create(req, res) {
    const { user_id } = req.params;
    const { title, description, rating, tags } = req.body;

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    });



    const tagsInsert = tags.map( name => {
      return {
        name, 
        note_id,
        user_id
      }
    });
    
    await knex("tags").insert(tagsInsert)

    return res.status(201).json({"message": "tag created"});
  }

  async index(req, res) {
    const { user_id } = req.query;
    
    const notes = await knex("movie_notes").where({ user_id }).orderBy("id");
    const tags = await knex("tags").where({ user_id }).orderBy("name");

    const userMoviesNotes = notes.map(note => {
      const movieTags = tags.filter(tag => tag.note_id === note.id).map(tag => tag.name);

      return {
        ...note,
        tags: movieTags
      }
    });

    return res.json({ userMoviesNotes });
  }
}

module.exports = NotesController;
