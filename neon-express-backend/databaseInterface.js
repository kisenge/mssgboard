require('dotenv').config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.REACT_APP_DB_USERNAME,
  host: process.env.REACT_APP_DB_HOST, // Update this to the Neon database host
  database: process.env.REACT_APP_DB_NAME,
  password: process.env.REACT_APP_DB_PASSWORD,
  port: parseInt(process.env.REACT_APP_DB_PORT, 10),
});

// Database operations
const getMessages = async () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM messages", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createMessage = (body) => {
  const { name, message } = body;
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO messages (name, message) VALUES ($1, $2) RETURNING *",
      [name, message],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Message added: ${JSON.stringify(results.rows[0])}`);
      }
    );
  });
};

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM messages WHERE id = $1", [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`Message deleted with ID: ${id}`);
    });
  });
};

const updateMessage = (id, body) => {
  const { name, message } = body;
  return new Promise((resolve, reject) => {
    pool.query(
      "UPDATE messages SET name = $1, message = $2 WHERE id = $3 RETURNING *",
      [name, message, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Message updated: ${JSON.stringify(results.rows[0])}`);
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
