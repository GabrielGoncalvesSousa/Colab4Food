let mainFunction = (db) => {
  let getAllInteracoes = async (req, res) => {
    res.send(await db.interacao.findAll());
  };

  return {
    getAllInteracoes,
  };
};

module.exports = {
  mainFunction,
};
