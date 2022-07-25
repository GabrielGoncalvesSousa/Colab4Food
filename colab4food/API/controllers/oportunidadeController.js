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

 return {
  getAllOportunidades,
  getAllInfoOportunidades,
  getOportunidadeById
 };
};

module.exports = {
 mainFunction,
};
