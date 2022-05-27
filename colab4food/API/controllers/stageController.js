let mainFunction = (db) => {
  let getAllStages = async (req, res) => {
    res.send(await db.stage.findAll());
  };

  return {
    getAllStages,
  };
};

module.exports = {
  mainFunction,
};
