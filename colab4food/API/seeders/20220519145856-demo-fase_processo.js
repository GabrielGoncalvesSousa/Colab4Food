'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fase_processo', [
      { nomeFase: '1' },
      { nomeFase: '2' },
      { nomeFase: '3' },
      { nomeFase: '4' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fase_processo', null, {});
  },
};
