const catchError = require('../utils/catchError');
const  Userform = require('../models/Userform');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const userforms = await Userform.findAll();
    return res.json(userforms)
});

const create = catchError(async(req, res) => {
    // Operaciones...
    const { email, password, first_name, last_name, birthday } = req.body;
    const userforms = await Userform.create({
       email, 
       password,
       first_name,
       last_name, 
       birthday 
    
    });

    return res.status(201).json(userforms); /* valor a retornar */
});

// /userform/:id
const getOne = catchError(async(req, res) => {
    const { id } = req.params;  // conectar o obtener el id con la url //
    const userform =await Userform.findByPk(id); // 
    return res.json(userform);

});

// /userform /id
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Userform.destroy({ where: { id: id } }); //eliminado id  , observacion tambie se puede eliminar por  caracteristica//
    return res.sendStatus(204);

});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { email, password, first_name, last_name, birthday } = req.body;
    const userf = await Userform.update(
      { email, password, first_name, last_name, birthday},
      { where: { id: id}, returning: true  }
    );

    return res.json(userf [1][0]);


})


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}