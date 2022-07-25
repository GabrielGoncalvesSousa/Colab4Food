const router = require('express').Router();

let oportunidadeRouter = (oportunidadeController) => {
 let getAllOportunidades = oportunidadeController.getAllOportunidades;
 router.get('/getAllOportunidades', getAllOportunidades);

 let getAllInfoOportunidades = oportunidadeController.getAllInfoOportunidades;
 router.get('/getAllInfoOportunidades', getAllInfoOportunidades);

 let getOportunidadeById = oportunidadeController.getOportunidadeById;
 router.post('/getOportunidadeById', getOportunidadeById);
 return router;

};

module.exports = oportunidadeRouter;
