// const { response } = require('express');
// const express = require('express');

// console.log('ERPIGFJEROIGHJ');
// console.log(Object.entries(sequelize));
const { app, sequelize } = require('./mainIndex');
// const queryInterface = sequelize.getQueryInterface();
// app.use(express.json());
// console.log(sequelize.models.user.associations);
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

  console.log('SEQUELIZE DENTRO DE APP.JS');
  // console.log(sequelize);

  await sequelize.sync({ alert: true, logging: false });

  console.log('SEQUELIZE DEPOIS DO SYNC');
  // console.log(sequelize);

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
