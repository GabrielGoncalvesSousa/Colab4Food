'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('distrito', [
      {
        nomeDistrito: 'Aveiro',
      },
      {
        nomeDistrito: 'Beja',
      },
      {
        nomeDistrito: 'Bragança',
      },
      {
        nomeDistrito: 'Castelo Branco',
      },
      {
        nomeDistrito: 'Coimbra',
      },
      {
        nomeDistrito: 'Évora',
      },
      {
        nomeDistrito: 'Faro',
      },
      {
        nomeDistrito: 'Guarda',
      },
      {
        nomeDistrito: 'Leiria',
      },
      {
        nomeDistrito: 'Lisboa',
      },
      {
        nomeDistrito: 'Portalegre',
      },
      {
        nomeDistrito: 'Porto',
      },
      {
        nomeDistrito: 'Região Autónoma da Madeira',
      },
      {
        nomeDistrito: 'Região Autónoma dos Açores',
      },
      {
        nomeDistrito: 'Santarém',
      },
      {
        nomeDistrito: 'Setúbal',
      },
      {
        nomeDistrito: 'Viana do Castelo',
      },
      {
        nomeDistrito: 'Vila Real',
      },
      {
        nomeDistrito: 'Viseu',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('distrito', null, { truncate: true, cascade: true });
  },
};
