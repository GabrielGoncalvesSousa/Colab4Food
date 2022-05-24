'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prioridade', [
      {
        nomePrioridade: 'A+',
      },
      {
        nomePrioridade: 'A',
      },
      {
        nomePrioridade: 'C',
      },
      {
        nomePrioridade: 'D',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prioridade', null, { truncate: true, cascade: true });
  },
};
