let mainFunction = (db) => {
  let getAllTiposServico = async (req, res) => {
    res.send(await db.tipo_servico.findAll());
  };

  return {
    getAllTiposServico,
  };
};

module.exports = {
  mainFunction,
};
