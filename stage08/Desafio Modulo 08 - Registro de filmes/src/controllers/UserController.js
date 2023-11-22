const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UserController {
  async create (req, res) {
    const  { name, email, password } = req.body;
    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(checkUserExists) throw new AppError("User already registered.");
    
    if(!name || !email || !password) throw new AppError("Please provide your name, email and password to proceed. Thank you!");

    const hashedPassword = await hash(password, 8);    

    await database.run(`INSERT INTO users (name, email, password) VALUES(?, ?, ?)`,
      [name, email, hashedPassword]
    );

    return res.json({"message":"User Created"});
  }

  async show(req, res) {
    const { id } = req.params;
    const { password } = req.body;

    const database = await sqliteConnection();
 
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);
    
    if(!password) throw new AppError("Please provide your password.")

    const validateUser = await compare(password, user.password);
    
    if(!validateUser) throw new AppError("Wrong Password");
    
    const userView = await database.get("SELECT * FROM user_view WHERE email = (?)", [user.email]);
    
    return res.json(userView);
  }

  async update(req, res) {
    const { name, password, new_password, avatar, email } = req.body;
    const { id } = req.params;

    const database = await sqliteConnection();

    const user = await database.get("SELECT * from users WHERE id = (?)", [id]);

    if(!user) throw new AppError("User not found");
    
    const userEmailAlreadyUse = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(userEmailAlreadyUse && userEmailAlreadyUse.id !== user.id) throw new AppError("Email already in use.");

    if(new_password && !password) throw new AppError("Please provide your password")

    if(new_password && password) {
      const checkPassword = await compare(password, user.password);
      const checkNewPassword = await compare(new_password, user.password);

      if(!checkPassword) throw new AppError("Passwords does not match.");
      if(checkNewPassword) throw new AppError("The current password cannot be the same as the new password.");

      user.password = await hash(new_password, 8);
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.avatar = avatar ?? user.avatar;

    await database.run(`
      UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        avatar = ?,
        updated_at = DATETIME('now')
      WHERE id = ?`, 
      [user.name, user.email, user.password, user.avatar, id]);

    return res.json({"message": "User updated."});
  }
}

module.exports = UserController;