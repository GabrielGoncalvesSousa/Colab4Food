let mainFunction = (db) => {
  let getAllCargos = async (req, res) => {
    res.send(await db.user.findAll());
  };

  let getCargoById = async (req, res) => {
    db.cargo
      .findOne({
        where: {
          id_cargo: req.params.id,
        },
      })
      .then((response) => {
        res.send(response);
      });
  };
  

  return {
    getAllCargos,
    getCargoById,
  };
};

module.exports = {
  mainFunction,
};
