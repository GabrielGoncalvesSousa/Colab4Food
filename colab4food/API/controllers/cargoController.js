let mainFunction = (db) => {
  let getAllCargos = async (req, res) => {
    //res.send(await db.cargo.findAll());
    res.send(await db.user.findAll());
  };

  let funcaoxpto = async (req, res) => {};

  return {
    getAllCargos,
  };
};

module.exports = {
  mainFunction,
};
