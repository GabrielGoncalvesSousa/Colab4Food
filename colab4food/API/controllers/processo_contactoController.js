let mainFunction = (db) => {
  let getAllProcessosContacto = async (req, res) => {
    res.send(await db.processo_contacto.findAll());
  };

  return {
    getAllProcessosContacto,
  };
};

module.exports = {
  mainFunction,
};
