let mainFunction = (db) => {
  let getAllTiposUser = async (req, res) => {
    res.send(await db.tipo_user.findAll());
  };

  let addTipoUser = async (req, res) => {
    let info = req.body.tipo_user;
    const tipo_user = await db.tipo_user.create(info);
    res.status(200).send(tipo_user);
  };

  const getTipoUserByUserId = async (req, res) => {
    db.user
      .findOne({
        where: {
          id_user: req.params.id_user,
        },
        include: db.tipo_user,
      })
      .then((response) => {
        res.send(response);
      });
    let teste = {};
    for (let i = 0; i < 4; i++) {
      teste[`lol${i}`] = i;
    }
  };
  return {
    getAllTiposUser,
    addTipoUser,
    getTipoUserByUserId,
  };
};

module.exports = {
  mainFunction,
};
