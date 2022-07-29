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
 }

 let createOrg = async (req, res) => {
  try {
   await db.organizacao.create({
    id_tipoOrganizacao: req.body.id_tipoOrganizacao,
    id_prioridade: req.body.id_prioridade,
    id_user: req.body.id_user,
    id_distrito: req.body.id_distrito,
    nomeOrganizacao: req.body.nomeOrganizacao,
    cidade: req.body.cidade,
    'codigo-postal': req.body.codigo_postal,
    rua: req.body.rua,
   })
   return res.send('Organização criada com sucesso')
  } catch (err) {
   return res.send(`Erro ao criar a organização ${err}`)
  }
 }

 let updateOrg = async (req, res) => {
  try {
   await db.organizacao.update({
    id_tipoOrganizacao: req.body.id_tipoOrganizacao,
    id_prioridade: req.body.id_prioridade,
    id_user: req.body.id_user,
    id_distrito: req.body.id_distrito,
    nomeOrganizacao: req.body.nomeOrganizacao,
    cidade: req.body.cidade,
    'codigo-postal': req.body.codigo_postal,
    rua: req.body.rua,
   }, {
    where: {
     id_organizacao: req.body.id_organizacao
    }
   })
   return res.send('Organização atualizada com sucesso')
  } catch (err) {
   return res.send(`Erro ao atualizar a organização ${err}`)
  }
 }

 let removeOrg = async (req, res) => {
  try {
   await db.organizacao.destroy({
    where: {
     id_organizacao: req.body.id_organizacao
    }
   })
   return res.send('Organização removida com sucesso')
  } catch (err) {
   return res.send(`Erro ao remover a organização ${err}`)
  }
 }

 return {
  getAllOrganizacoes,
  getAllOrganizacoesWithPriority,
  getOneOrgInfo,
  createOrg,
  updateOrg,
  removeOrg
 };
};

module.exports = {
 mainFunction,
};
