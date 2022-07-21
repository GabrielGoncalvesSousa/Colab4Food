const { app, sequelize } = require('./mainIndex');

app.listen(3000, async () => {
  console.log('Server running');
  let format = 'YYYY-MM-DD hh:mm:ss ';
  let todayDate = new Date();
  let year = todayDate.getFullYear();
  let month = todayDate.getUTCMonth() + 1;
  let day = todayDate.getDate();
  let hours = todayDate.getHours();
  let minutes = todayDate.getMinutes();
  let seconds = todayDate.getSeconds();

  let jesusChrist = `'${year}-${month}-${day} ${hours}:${minutes}:${seconds}'`;

  await sequelize.sync({ banana: true, logging: true }).then(() => {
    console.log(`Database synced`);
  });

  //Example of a migration constraint
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
