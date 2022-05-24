'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('source', [
      {
        nomeSource: 'Email Campaign',
      },
      {
        nomeSource: 'Networking',
      },
      {
        nomeSource: 'Phone Outreach',
      },
      {
        nomeSource: 'Website',
      },
      {
        nomeSource: 'Other',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('source', null, { truncate: true, cascade: true });
  },
};
