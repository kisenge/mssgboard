require('dotenv').config();



const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.REACT_APP_DB_USERNAME,
  host: "localhost",
  database: process.env.REACT_APP_DB_NAME,
  password:  process.env.REACT_APP_REACT_APP_DB_PASSWORD,
  port:  parseInt(process.env.REACT_APP_REACT_APP_DB_PORT,10),
});

console.log("screw you")

console.log(pool)

//get all merchants our database
const getMessages = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM messages", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};
//create a new merchant record in the databsse
const createMessage = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, message } = body;
    pool.query(
      "INSERT INTO messages (name, message) VALUES ($1, $2) RETURNING *",
      [name, message ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new message has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
//delete a merchant
const deleteMessage = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM merchants WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Message deleted with ID: ${id}`);
      }
    );
  });
};
//update a merchant record
const updateMessage = (id, body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      "UPDATE merchants SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, message, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getMessages,
  createMessage,
  deleteMessage,
  updateMessage
};
