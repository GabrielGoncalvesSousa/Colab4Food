let mainFunction = (db) => {
  let getAllTiposOrganizacao = async (req, res) => {
    res.send(await db.tipos_organizacao.findAll());
  };

  return {
    getAllTiposOrganizacao,
  };
};

module.exports = {
  mainFunction,
};
