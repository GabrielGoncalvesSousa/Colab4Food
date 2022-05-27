let mainFunction = (db) => {
  let getAllSources = async (req, res) => {
    res.send(await db.source.findAll());
  };

  return {
    getAllSources,
  };
};

module.exports = {
  mainFunction,
};
