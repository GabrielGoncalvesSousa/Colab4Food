let mainFunction = (db) => {
  let getAllDistritos = async (req, res) => {
    res.send(await db.distrito.findAll());
  };

  

  return {
    getAllDistritos,
  };
};

module.exports = {
  mainFunction,
};
