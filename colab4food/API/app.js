const { response } = require('express');
const express = require('express');

const { sequelize, Sequelize } = require('./models');
const { options } = require('./routes/tipo_userRouter');
const app = express();
const queryInterface = sequelize.getQueryInterface();
app.use(express.json());

const router = require('./routes/tipo_userRouter');
app.use('/tipo_user', router);

app.get('/users', async (req, res) => {
  res.send(await sequelize.models.user.findAll());
});

app.get('/users/:id_user', async (req, res) => {
  let query;
  try {
    return await sequelize.models.user
      .findAll({
        where: {
          id_user: req.params.id_user,
        },
      })
      .then(response, () => {
        res.send(response.getTipoUser());
        console.log(response.getTipoUser());
      });
    console.log(query.length);
    if (query.length === 0) {
      throw ' No matches';
    } else {
      res.send(query);
    }
  } catch (err) {
    res.send(err);
  }
});

app.listen(3000, async () => {
  console.log('Server running');

  // console.log(tipo_user.hasMany().count(user));

  await sequelize.sync({ force: true });

  // await queryInterface.addConstraint('user', {
  //   fields: [
  //     'id_tipoUser',
  //   ],
  //   type: 'foreign key',
  //   name: 'FK_tipoUser_user',
  //   references: {
  //     table: 'tipo_user',
  //     field: 'id_tipoUser',
  //   },
  //   onDelete: 'cascade',
  //   onUpdate: 'cascade',
  // });

  // await sequelize.sync();
});
