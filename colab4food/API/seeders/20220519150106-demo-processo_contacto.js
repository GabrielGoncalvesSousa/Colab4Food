'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('processo_contacto', [
      {
        id_user: 1,
        id_organizacao: 1,
        id_faseProcesso: 1,
        dataInicio: new Date(),
        dataFim: new Date(),
        objetivo: 'Objetivo processo contacto 1',
        observacoes: 'Observacoes processo contacto 1',
      },
      {
        id_user: 2,
        id_organizacao: 2,
        id_faseProcesso: 2,
        dataInicio: new Date(),
        dataFim: new Date(),
        objetivo: 'Objetivo processo contacto 2',
        observacoes: 'Observacoes processo contacto 2',
      },
      {
        id_user: 3,
        id_organizacao: 3,
        id_faseProcesso: 3,
        dataInicio: new Date(),
        dataFim: new Date(),
        objetivo: 'Objetivo processo contacto 3',
        observacoes: 'Observacoes processo contacto 3',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('processo_contacto', null, { truncate: true, cascade: true });
  },
};
