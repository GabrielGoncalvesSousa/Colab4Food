'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fase_processo', [
      { nomeFase: '0' },
      { nomeFase: '1' },
      { nomeFase: '2' },
      { nomeFase: '3' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fase_processo', null, {});
  },
};
