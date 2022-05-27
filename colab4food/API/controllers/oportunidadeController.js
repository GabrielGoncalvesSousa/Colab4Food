let mainFunction = (db) => {
  let getAllOportunidades = async (req, res) => {
    res.send(await db.oportunidade.findAll());
  };

  return {
    getAllOportunidades,
  };
};

module.exports = {
  mainFunction,
};
