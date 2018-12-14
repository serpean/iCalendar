const User = require("../models/user");
const { sendEmail } = require("./emailConfig");

const register = (telegramId, email) => {
  let TempUser = new User();
  const expirationdate = new Date();
  expirationdate.setDate(expirationdate.getDate() + 1);
  TempUser.email = email;
  TempUser.telegramId = telegramId;
  TempUser.confirmationToken =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);
  TempUser.confirm = false;
  TempUser.tokenExpirationDate = expirationdate;

  // Search the email
  User.findOne({ email: email })
    .select("telegramId")
    .exec((err, res) => {
      // If we receive a different id, the email is in use
      if (res) {
        if (res.telegramId != telegramId)
          return reject("Este email ya está en uso");
        // If we receive the same account, you are registered
        else if (res.telegramId == telegramId)
          return reject("Ya estás registrado");
      }
    });

  User.findOne({ telegramId: telegramId })
    .select("_id confirm email confirmationToken tokenExpirationDate")
    .exec((err, res) => {
      new Promise((resolve, reject) => {
        if (res) {
          if (res.confirm) return resolve("Tu cuenta ya está confirmado");
          else if (res.email == email) {
            const now = new Date();
            if (res.tokenExpirationDate < now) {
              sendEmail(email, res.confirmationToken);
            } else {
              const expirationDate = now.getDate() + 1;
              const confirmationToken =
                Math.random()
                  .toString(36)
                  .substring(2, 15) +
                Math.random()
                  .toString(36)
                  .substring(2, 15);
              User.updateOne(
                { _id: res.id },
                {
                  $set: {
                    tokenExpirationDate: expirationDate,
                    confirmationToken: confirmationToken
                  }
                },
                (err, token) => {
                  if (err) reject("Error al actualizar");
                  sendEmail(email, confirmationToken);
                  return resolve(
                    "Estás registrado pero no confirmado, te hemos mandado un email a " +
                      email
                  );
                }
              );
            }
          }
        }
        TempUser.save(err => {
          if (err) return reject("El email: " + email + " ya está en uso");
          sendEmail(email, TempUser.confirmationToken);
          return resolve(
            "Usario " + telegramId + " con email: " + email + " fue creado"
          );
        });
      });
    });
};

// Confirma a un usuario dado un tokens
const confirmUser = (telegramId, token) => {
  User.findOne({ telegramId: telegramId }).exec((err, user) => {
    new Promise((resolve, reject) => {
      if (!user)
        return reject("Primero debes registrarte (/ register <email>)");
      else if (user.confirmed)
        return reject("Tu cuenta está registrada y confirmada");
      else if (user.tokenExpirationDate < new Date())
        return reject(
          "Tu token ha expirado, vuelve a registrate con el mismo email"
        );
      else if (user.confirmationToken === token) {
        User.updateOne(
          { _id: user.id },
          {
            $set: {
              confirmed: true
            }
          },
          err => {
            if (err) return reject("Error al actualizar");
            return resolve(`Se acaba de confirmar tu email (${user.email})`);
          }
        );
      } else {
        return reject("El token introducido es no es correcto");
      }
    });
  });
};

const changeEmail = email => {
  // TBD
};

// TODO: this user can be used
const isAuth = telegramId => {
  new Promise((resolve, reject) => {
    User.findOne({ telegramId: telegramId })
      .select("email confirmed")
      .exec((err, res) => {
        if (err) return reject(false);
        console.log(res);
        if (!res) return reject(false);
        if (res.confirmed) {
          return resolve(res.email);
        } else {
          reject(false);
        }
      });
  });
};

module.exports = {
  register,
  confirmUser,
  isAuth
};
