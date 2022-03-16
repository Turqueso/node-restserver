const jsonwebtoken = require("jsonwebtoken");

const jwt = require("jsonwebtoken");

const generarJWT = (uid = "") => {
  console.log(uid);
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRETKEY,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};
