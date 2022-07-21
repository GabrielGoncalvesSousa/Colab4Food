'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage', [
      {
        nomeStage: 'LoU',
      },
      {
        nomeStage: 'Proposal Submmitted',
      },
      {
        nomeStage: 'Ongoing',
      },
      {
        nomeStage: 'Closed',
      },
      {
        nomeStage: 'On Hold',
      },
      {
        nomeStage: 'Abandoned',
      },
      {
        nomeStage: 'Lost',
      },
      {
        nomeStage: 'Demo/Internal',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage', null, { truncate: true, cascade: true });
  },
};
