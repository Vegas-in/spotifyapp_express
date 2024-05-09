const user = require('../models/user.model.js'); // Importar el modelo de la BBDD

// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getUser = async (req, res) => {
    let users;
    users = await user.getUserByEmail(req.query.email);
    res.status(200).json(users); // [] con las entries encontradas
}


// Crear entry por email
const createUser = async (req, res) => {
    const newUser = req.body; // {title,content,email,category}
    const response = await user.createUser(newUser);
    res.status(201).json({
        "items_created": response,
        data: newUser
        },
        {
            message: `usuario creado: ${req.query.email}`
        });
}


const updateUser = async (req, res) => {
    const modifiedUser = req.body; // {title,content,date,category,email,old_title}
    const response = await user.updateUser(modifiedUser);
    res.status(200).json({
        "items_updated": response,
        data: modifiedUser
    },{
        message: `usuario creado: ${req.query.email}`
    });
}

const deleteUser = async (req, res) => {
    let users;
    if (req.params.title) {
        users = await user.getUserByEmail(req.params.email);
        if (users.length > 0) {
            deleted = await user.deleteUser(req.params.email); 
            res.status(200).json({message: `Se ha borrado ${req.params.email}`})
        }else{
            res.status(404).json("No se ha encontrado el User")
        }
    }
    else {
        res.status(404).json("No se ha encontrado el User")
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}