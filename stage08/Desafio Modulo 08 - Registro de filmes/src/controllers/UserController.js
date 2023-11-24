const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require("../database/knex");


class UserController {
  async create (req, res) {
    const  { name, email, password } = req.body;
    const [checkUserExists] = await knex("users").where("email", email).select("*");
    
    console.log(checkUserExists);

    if(checkUserExists) throw new AppError("User already registered.");
    
    if(!name || !email || !password) throw new AppError("Please provide your name, email and password to proceed. Thank you!");

    const hashedPassword = await hash(password, 8);    

    await knex("users").insert({
      name,
      email,
      password: hashedPassword } 
    );

    return res.json({"message":"User Created"});
  }

  async show(req, res) {
    const { id } = req.params;
    const { password } = req.body;

 
    const user = await knex("users").where("id", id).select("*") //database.get("SELECT * FROM users WHERE id = (?)", [id]);
    
    if(!password) throw new AppError("Please provide your password.")

    const validateUser = await compare(password, user.password);
    
    if(!validateUser) throw new AppError("Wrong Password");
    
    const userView = await knex("user_view").where("email", user.email).select("*");
    
    return res.json(userView);
  }

  async update(req, res) {
    const { name, password, new_password, avatar, email } = req.body;
    const { id } = req.params;

    const user = await knex("users").where("id", id).select("*").first(); 

    if(!user) throw new AppError("User not found");
    
    console.log(user)
    
    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.avatar = avatar ?? user.avatar;
   
    const userEmailAlreadyUse = await knex("users").where("email", user.email).select("*").first();

    if(userEmailAlreadyUse && userEmailAlreadyUse.id !== user.id) throw new AppError("Email already in use.");

    if(new_password && !password) throw new AppError("Please provide your password")

    if(new_password && password) {
      const checkPassword = await compare(password, user.password);
      const checkNewPassword = await compare(new_password, user.password);

      if(!checkPassword) throw new AppError("Passwords does not match.");
      if(checkNewPassword) throw new AppError("The current password cannot be the same as the new password.");

      user.password = await hash(new_password, 8);
    }

    await knex("users")
      .where("id", id)
      .update({
        name: user.name,
        email: user.email,
        password: user.password,
        avatar: user.avatar,
        updated_at: knex.fn.now()
      });

    return res.json({"message": "User updated."});
  }
}

module.exports = UserController;