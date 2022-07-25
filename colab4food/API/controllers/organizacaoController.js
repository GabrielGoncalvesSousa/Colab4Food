const organizacao = require("../models/organizacao");

let mainFunction = (db) => {
 let getAllOrganizacoes = async (req, res) => {
  res.send(await db.organizacao.findAll());
 };

 let getAllOrganizacoesWithPriority = async (req, res) => {
  db.organizacao.findAll({
   include: [db.prioridade, db.distrito, db.tipo_organizacao, db.contacto]
  }).then((response) => {
   res.send(response)
  })
 }

 let getOneOrgInfo = async (req, res) => {
  db.organizacao.findByPk(req.body.id, {
   include: [db.prioridade, db.distrito, db.tipo_organizacao, db.contacto, db.user]
  })
   .then((response) => {
    res.send(response)
   })


  // include: [db.prioridade, db.distrito, db.tipo_organizacao]

  // .then((response) => {
  //   console.log(response);
  //   db.contacto.findAll({
  //     // where: {
  //     //   id_organizacao: response.id_organizacao
  //     // }
  //   }).then((secondRes) => {
  //     console.log(secondRes);

  //   })
  //   res.send(response)
  // })
 }

 let createOrg = async (req, res) => {
  //Vou ter que criar uma organizacao
  //id_organizacao , id_tipoOrganizacao, id_prioridade, id_user, id_distrito, nomeOrganizacao, cidade, codigo-postal,rua, 
  const org = await organizacao.create({ id_organizacao })

 }


 return {
  getAllOrganizacoes,
  getAllOrganizacoesWithPriority,
  getAllOrgInfo: getOneOrgInfo
 };
};

module.exports = {
 mainFunction,
};
