const queries = {
    getUserByEmail: `
        SELECT *
        FROM users
        WHERE email = $1`,
    createUser: `
        INSERT INTO users(name,surname,email,favs) 
        VALUES ($1,$2,$3,$4)
    `,
    updateUser: `
    UPDATE users
      SET
          name=$1, 
          surname=$2, 
          email=$3, 
          favs=$4
      WHERE 
          email = $5
    `,
    deleteUser: `DELETE
      FROM users
      WHERE email = $1
    `,
};
module.exports = queries;