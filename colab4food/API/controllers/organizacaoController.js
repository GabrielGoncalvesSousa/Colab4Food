let mainFunction = (db) => {
  let getAllOrganizacoes = async (req, res) => {
    res.send(await db.organizacao.findAll());
  };

  return {
    getAllOrganizacoes,
  };
};

module.exports = {
  mainFunction,
};
