let mainFunction = (db) => {
 let getAllContactos = async (req, res) => {
  res.send(await db.contacto.findAll());
 };


 let getAllInfoContactos = async (req, res) => {

  db.organizacao.findAll({
   include: []
  })
  res.send(await db.contacto.findAll());
 };






 return {
  getAllContactos,
 };
};

module.exports = {
 mainFunction,
};
