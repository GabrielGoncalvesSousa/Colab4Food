let mainFunction = (db) => {
  let getAllCargos = async (req, res) => {
    res.send(await db.user.findAll());
  };

  return {
    getAllCargos,
  };
};

module.exports = {
  mainFunction,
};
