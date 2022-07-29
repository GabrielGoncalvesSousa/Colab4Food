let mainFunction = (db) => {
 let getAllProcessosContacto = async (req, res) => {
  res.send(await db.processo_contacto.findAll());
 };

 let getAllInfoProcessosContacto = async (req, res) => {
  db.organizacao.findAll({
   include: [db.processo_contacto, db.user, db.contacto]
  }).then((response) => {
   res.send(response)
  })
 }

 let getOneInfoProcessoContacto = async (req, res) => {
  db.organizacao.findByPk(req.body.id, {
   include: [db.processo_contacto, db.user, db.contacto]
  }).then((response) => {
   res.send(response)
  })
 }

 let createProcessoContacto = async (req, res) => {
  try {
   await db.processo_contacto.create({
    id_user: req.body.id_user,
    id_organizacao: req.body.id_organizacao,
    id_faseProcesso: req.body.id_faseProcesso,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim,
    objetivo: req.body.objetivo,
    observacoes: req.body.observacoes,
   })
   return res.send('Processo de contacto criado com sucesso')
  } catch (err) {
   return res.send(`Erro ao criar o processo de contacto ${err}`)
  }
 }

 let updateProcessoContacto = async (req, res) => {
  try {
   await db.processo_contacto.update({
    id_user: req.body.id_user,
    id_organizacao: req.body.id_organizacao,
    id_faseProcesso: req.body.id_faseProcesso,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim,
    objetivo: req.body.objetivo,
    observacoes: req.body.observacoes,
   }, {
    where: {
     id_processoContacto: req.body.id_processoContacto
    }
   })
   return res.send('Processo de contacto atualizado com sucesso')
  } catch (err) {
   return res.send(`Erro ao atualizar o processo de contacto ${err}`)
  }
 }

 let removeProcessoContacto = async (req, res) => {
  try {
   await db.processo_contacto.destroy({
    where: {
     id_processoContacto: req.body.id_processoContacto
    }
   })
   return res.send('Processo de contacto removido com sucesso')
  } catch (err) {
   return res.send(`Erro ao remover o processo de contacto ${err}`)
  }
 }

 return {
  getAllProcessosContacto,
  getAllInfoProcessosContacto,
  getOneInfoProcessoContacto,
  createProcessoContacto,
  updateProcessoContacto,
  removeProcessoContacto
 };
};

module.exports = {
 mainFunction,
};
