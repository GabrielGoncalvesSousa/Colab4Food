const router = require('express').Router();

let organizacaoRouter = (organizacaoController) => {
 let getAllOrganizacoes = organizacaoController.getAllOrganizacoes;
 router.get('/organizacao', getAllOrganizacoes);

 let getAllOrgsWithPriority = organizacaoController.getAllOrganizacoesWithPriority;
 router.get('/getAllOrgsWithPriority', getAllOrgsWithPriority)

 let getOneOrgsInfo = organizacaoController.getOneOrgInfo;
 router.post('/getOneOrgInfo', getOneOrgsInfo);

 let createOrg = organizacaoController.createOrg;
 router.post('/createOrg', createOrg);

 let updateOrg = organizacaoController.updateOrg;
 router.post('/updateOrg', updateOrg);

 let removeOrg = organizacaoController.removeOrg;
 router.post('/removeOrg', removeOrg);

 return router;
};

module.exports = organizacaoRouter;




