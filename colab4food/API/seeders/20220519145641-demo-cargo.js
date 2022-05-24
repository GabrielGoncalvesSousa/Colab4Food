'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cargo', [
      {
        nomeCargo: 'Applied Research & Technology',
      },
      {
        nomeCargo: 'CEO',
      },
      {
        nomeCargo: 'Director',
      },
      {
        nomeCargo: 'I&D Manager',
      },
      {
        nomeCargo: 'Innov. Mngr.',
      },
      {
        nomeCargo: 'Quality Director',
      },
      {
        nomeCargo: 'Quality Mngr.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cargo', null, { truncate: true, cascade: true });
  },
};
