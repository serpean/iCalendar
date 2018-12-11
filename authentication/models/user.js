const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true, dropDups: true },
  telegramId: { type: String, unique: true, required: true, dropDups: true },
  // envio un token, lo guardo en la base de datos. Si /confirmAccount token === token enviado por email. Confirmas la cuenta
  confirmationToken: String,
  tokenExpirationDate: Date,
  confirmed: { type: Boolean, default: false }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
