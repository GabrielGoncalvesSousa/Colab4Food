const router = require('express').Router();

let processo_contactoRouter = (processo_contactoController) => {
 let getAllProcessosContacto = processo_contactoController.getAllProcessosContacto;
 router.get('/getAllProcessosContacto', getAllProcessosContacto);

 let getAllInfoProcessosContacto = processo_contactoController.getAllInfoProcessosContacto;
 router.get('/getAllInfoProcessosContacto', getAllInfoProcessosContacto);

 let getOneInfoProcessoContacto = processo_contactoController.getOneInfoProcessoContacto;
 router.post('/getOneInfoProcessoContacto', getOneInfoProcessoContacto);

 return router;
};

module.exports = processo_contactoRouter;
