let mainFunction = (db) => {
  let getAllOrganizacoes = async (req, res) => {
    res.send(await db.organizacao.findAll());
  };

  let getAllOrganizacoesWithPriority = async (req, res) => {
    db.organizacao.findAll({
      include: [db.prioridade, db.distrito, db.tipo_organizacao, db.contacto]
    }).then((response) => {
      res.send(response)
    })
  }

  let getAllOrgInfo = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    db.organizacao.findByPk(req.body.id, {
      include: [db.prioridade, db.distrito, db.tipo_organizacao, db.contacto]
    })
      .then((response) => {
        res.send(response)
      })

    // include: [db.prioridade, db.distrito, db.tipo_organizacao]

    // .then((response) => {
    //   console.log(response);
    //   db.contacto.findAll({
    //     // where: {
    //     //   id_organizacao: response.id_organizacao
    //     // }
    //   }).then((secondRes) => {
    //     console.log(secondRes);

    //   })
    //   res.send(response)
    // })
  }

  return {
    getAllOrganizacoes,
    getAllOrganizacoesWithPriority,
    getAllOrgInfo
  };
};

module.exports = {
  mainFunction,
};
