'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('loss_reason', [
      {
        nomeLossReason: 'Price',
      },
      {
        nomeLossReason: 'Not fit',
      },
      {
        nomeLossReason: 'Competitor',
      },
      {
        nomeLossReason: 'Complaint',
      },
      {
        nomeLossReason: 'Other',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('loss_reason', null, { truncate: true, cascade: true });
  },
};
