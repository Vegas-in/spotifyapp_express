const pool = require("../config/db_pgsql");
const queries = require("../queries/user.queries"); // Queries SQL

// GET
const getUserByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getUserByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};


// CREATE
const createUser = async (user) => {
  const { name, surname, email, password } = user;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createUser, [
      name,
      surname,
      email,
      password,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//UPDATE
const updateUser = async (user) => {
  const { name, surname, email, password} = user;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.updateUser, [
      name,
      surname,
      email,
      password,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};


const deleteUser = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.deleteUser, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const entries = {
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};

module.exports = entries;