const sequelize = require('./models/indexModels');
const indexController = require('./controllers/indexController').mainIndexController(sequelize.models);
const app = require('./routes/indexRoute')(indexController);

module.exports = {
  app,
  sequelize,
};
