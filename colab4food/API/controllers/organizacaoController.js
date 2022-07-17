let mainFunction = (db) => {
  let getAllOrganizacoes = async (req, res) => {
    res.send(await db.organizacao.findAll());
  };

  let getAllOrganizacoesWithPriority = async (req, res) => {
    db.organizacao.findAll({
      include: [db.prioridade, db.distrito, db.tipo_organizacao]
    }).then((response) => {
      res.send(response)
    })
  }

  return {
    getAllOrganizacoes,
    getAllOrganizacoesWithPriority,
  };
};

module.exports = {
  mainFunction,
};
