'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipo_organizacao', [
      {
        nomeTipoORganizacao: 'Associate',
      },

      {
        nomeTipoORganizacao: 'Customer',
      },

      {
        nomeTipoORganizacao: 'Partner',
      },

      {
        nomeTipoORganizacao: 'Supplier',
      },

      {
        nomeTipoORganizacao: 'Other',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipo_organizacao', null, {});
  },
};
