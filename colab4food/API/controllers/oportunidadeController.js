let mainFunction = (db) => {
 let getAllOportunidades = async (req, res) => {
  res.send(await db.oportunidade.findAll());
 };

 let getAllInfoOportunidades = async (req, res) => {
  db.oportunidade.findAll({
   include: [db.interacao, db.stage, db.loss_reason, db.tipo_servico, db.source]
  }).then((response) => {
   res.send(response)
  })
 }

 let getOportunidadeById = async (req, res) => {
  try {
   const oportunidade = await db.oportunidade.findByPk(req.body.id, {
    include: [db.interacao, db.stage, db.loss_reason, db.tipo_servico, db.source]
   })
   res.send(oportunidade)
  } catch (error) {
   res.send(error.message);
  }
 }

 let createOportunidade = async (req, res) => {
  try {
   await db.oportunidade.create({
    id_interacao: req.body.id_interacao,
    id_stage: req.body.id_stage,
    id_lossReason: req.body.id_lossReason,
    id_source: req.body.id_source,
    id_tipoServico: req.body.id_tipoServico,
    'project/quote': req.body['project/quote'],
    budget: req.body.budget,
    totalExpenses: req.body.totalExpenses,
    adjudicacao: req.body.adjudicacao,
    recebidoAte: req.body.recebidoAte,
    probability: req.body.probability,
    scheduledFinishDate: req.body.scheduledFinishDate,
    finishDate: req.body.finishDate,
    clientSurvey: req.body.clientSurvey,
    notes: req.body.notes,
   })
   return res.send('Oportunidade criada com sucesso')
  } catch (err) {
   return res.send(`Erro ao criar a oportunidade ${err}`)
  }
 }


 let updateOportunidade = async (req, res) => {
  try {
   await db.oportunidade.update({
    id_interacao: req.body.id_interacao,
    id_stage: req.body.id_stage,
    id_lossReason: req.body.id_lossReason,
    id_source: req.body.id_source,
    id_tipoServico: req.body.id_tipoServico,
    'project/quotation': req.body['project/quotation'],
    budget: req.body.budget,
    totalExpenses: req.body.totalExpenses,
    adjudicacao: req.body.adjudicacao,
    recebidoAte: req.body.recebidoAte,
    probability: req.body.probability,
    scheduledFinishDate: req.body.scheduledFinishDate,
    finishDate: req.body.finishDate,
    clientSurvey: req.body.clientSurvey,
    notes: req.body.notes,
   }, {
    where: {
     id_oportunidade: req.body.id_oportunidade
    }
   })
   return res.send('Oportunidade atualizada com sucesso')
  } catch (err) {
   return res.send(`Erro ao atualizar a oportunidade ${err}`)
  }
 }

 let removeOportunidade = async (req, res) => {
  try {
   await db.oportunidade.destroy({
    where: {
     id_oportunidade: req.body.id_oportunidade
    }
   })
   return res.send('Oportunidade removida com sucesso')
  } catch (err) {
   return res.send(`Erro ao remover a oportunidade ${err}`)
  }
 }

 return {
  getAllOportunidades,
  getAllInfoOportunidades,
  getOportunidadeById,
  createOportunidade,
  updateOportunidade,
  removeOportunidade
 };
};

module.exports = {
 mainFunction,
};
