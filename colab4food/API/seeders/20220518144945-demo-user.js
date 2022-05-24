'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        id_tipoUser: 0,
        nomeUser: 'Viewer Filipe',
        email: 'ViewerFilipe@gmail.com',
        username: 'ViewerFilipe',
        password: '1243',
      },
      {
        id_tipoUser: 1,
        nomeUser: 'Collaborator Andreia',
        email: 'Collaborator Andreia@gmail.com',
        username: 'CollaboratorAndreia',
        password: '1243',
      },
      {
        id_tipoUser: 2,
        nomeUser: 'Manager Maneu',
        email: 'Manager Maneu@gmail.com',
        username: 'ManagerManeu',
        password: '1243',
      },
      {
        id_tipoUser: 3,
        nomeUser: 'Gabriel Sousa',
        email: 'gabmin@gmail.com',
        username: 'Gabmin',
        password: '1243',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, { truncate: true, cascade: true });
  },
};
