'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipo_user', [
      {
        nomeTipoUser: 'Viewer',
      },
      {
        nomeTipoUser: 'Collaborator',
      },
      {
        nomeTipoUser: 'Manager',
      },
      {
        nomeTipoUser: 'Admin',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipo_user', null, { truncate: true, cascade: true });
  },
};
