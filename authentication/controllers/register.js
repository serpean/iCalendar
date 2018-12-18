const User = require("../models/user");
const { sendEmail } = require("./emailConfig");

/**
 * Register a telegram user by ID and email
 *
 * @param {User telegram ID} telegramId
 * @param {User email} email
 */
const register = (telegramId, email) => {
  return new Promise((resolve, reject) => {
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
      .select("_id confirmed email confirmationToken tokenExpirationDate")
      .exec((err, res) => {
        if (res) {
          if (res.confirmed) return resolve("Tu cuenta ya está confirmado");
          else if (res.email === email) {
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
            "Usario " + telegramId + " con email: " + email + " fue creado\nComprueba tu bandeja de entrada para confirmar tu correo"
          );
        });
      });
  });
};

/**
 * Confirm a user give a token
 *
 * @param {Telegram User ID} telegramId
 * @param {Confirm token} token
 */
const confirmUser = (telegramId, token) => {
  return new Promise((resolve, reject) => {
    User.findOne({ telegramId: telegramId }).exec((err, user) => {
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

/**
 * Change User email give the Telegram ID
 *
 * @param {Telegram User ID} telegramId
 * @param {Telegram user new email} email
 */
const changeEmail = (telegramId, email) => {
  return new Promise((resolve, reject) => {
    User.findOne({ telegramId: telegramId }).exec((err, user) => {
      if (err) return reject("No te has registrado todavía");
      if (email === user.email) {
      } else {
        const expirationdate = new Date();
        expirationdate.setDate(expirationdate.getDate() + 1);
        const confirmationToken =
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15);
        if (user.confirmed) {
          User.updateOne(
            { _id: user.id },
            {
              $set: {
                confirmed: false,
                email: email,
                confirmationToken: confirmationToken,
                expirationDate: expirationdate
              }
            },
            err => {
              if (err) return reject("Error al actualizar");
              sendEmail(email, confirmationToken);
              return resolve(`Se acaba de cambiar tu email a ${email}`);
            }
          );
        } else {
          User.updateOne(
            { _id: user.id },
            {
              $set: {
                email: email,
                confirmationToken: confirmationToken,
                expirationDate: expirationdate
              }
            },
            err => {
              if (err) return reject("Error al actualizar");
              sendEmail(email, confirmationToken);
              return resolve(`Se acaba de cambiar tu email a ${email}`);
            }
          );
        }
      }
    });
  });
};

/**
 * Get the email when the user is authenticated
 *
 * @param {Telegram User ID} telegramId
 */
const isAuth = telegramId => {
  return new Promise((resolve, reject) => {
    User.findOne({ telegramId: telegramId })
      .select("email confirmed")
      .exec((err, res) => {
        if (err) return reject("No tienes permisos");
        if (!res) return reject("No tienes permisos");
        if (res.confirmed) {
          return resolve(res.email);
        } else {
          reject("No tienes permisos");
        }
      });
  });
};

module.exports = {
  register,
  confirmUser,
  isAuth,
  changeEmail
};
