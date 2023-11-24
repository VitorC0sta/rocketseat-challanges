
class TagsController {
  async index(req, res) {
    const { user_id } = req.params;

     const tags = await knex("tags").where({user_id});
    
    res.status(201).json(tags);
  }
}

module.exports = TagsController;