const router = require('express').Router();

let oportunidadeRouter = (oportunidadeController) => {
 let getAllOportunidades = oportunidadeController.getAllOportunidades;
 router.get('/getAllOportunidades', getAllOportunidades);

 let getAllInfoOportunidades = oportunidadeController.getAllInfoOportunidades;
 router.get('/getAllInfoOportunidades', getAllInfoOportunidades);

 let getOportunidadeById = oportunidadeController.getOportunidadeById;
 router.post('/getOportunidadeById', getOportunidadeById);

 let createOportunidade = oportunidadeController.createOportunidade;
 router.post('/createOportunidade', createOportunidade);

 let updateOportunidade = oportunidadeController.updateOportunidade;
 router.post('/updateOportunidade', updateOportunidade);

 let removeOportunidade = oportunidadeController.removeOportunidade;
 router.post('/removeOportunidade', removeOportunidade);

 return router;

};

module.exports = oportunidadeRouter;
