'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipo_servico', [
      {
        nomeTipoServico: 'Associate',
      },
      {
        nomeTipoServico: 'Costumer',
      },
      {
        nomeTipoServico: 'Supplier',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipo_servico', null, { truncate: true, cascade: true });
  },
};
