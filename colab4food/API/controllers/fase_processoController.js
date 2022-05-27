let mainFunction = (db) => {
  let getAllFasesProcesso = async (req, res) => {
    res.send(await db.fase_processo.findAll());
  };

  return {
    getAllFasesProcesso,
  };
};

module.exports = {
  mainFunction,
};
