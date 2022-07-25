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

 return {
  getAllProcessosContacto,
  getAllInfoProcessosContacto,
  getOneInfoProcessoContacto
 };
};

module.exports = {
 mainFunction,
};
