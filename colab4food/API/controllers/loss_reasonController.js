let mainFunction = (db) => {
  let getAllLossReasons = async (req, res) => {
    res.send(await db.loss_reason.findAll());
  };

  return {
    getAllLossReasons,
  };
};

module.exports = {
  mainFunction,
};
