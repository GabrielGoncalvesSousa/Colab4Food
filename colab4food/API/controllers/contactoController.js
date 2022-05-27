let mainFunction = (db) => {
  let getAllContactos = async (req, res) => {
    res.send(await db.contacto.findAll());
  };

  return {
    getAllContactos,
  };
};

module.exports = {
  mainFunction,
};
