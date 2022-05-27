let mainFunction = (db) => {
  let getAllPrioridades = async (req, res) => {
    res.send(await db.prioridade.findAll());
  };

  return {
    getAllPrioridades,
  };
};

module.exports = {
  mainFunction,
};
