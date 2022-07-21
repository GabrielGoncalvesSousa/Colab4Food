'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('interacao', [
      {
        id_contacto: 1,
        id_processoContacto: 1,
        id_user: 1,
        dataInteracao: new Date(),
        observacoes: 'Observacoes interacao 1',
        titulo: 'Interacao 1',
        faseInteracao: 1,
        estado: 'Estado hardString',
      },
      {
        id_contacto: 2,
        id_processoContacto: 2,
        id_user: 2,
        dataInteracao: new Date(),
        observacoes: 'Observacoes interacao 2',
        titulo: 'Interacao 2',
        faseInteracao: 2,
        estado: 'Estado hardString',
      },
      {
        id_contacto: 3,
        id_processoContacto: 3,
        id_user: 3,
        dataInteracao: new Date(),
        observacoes: 'Observacoes interacao 3',
        titulo: 'Interacao 3',
        faseInteracao: 3,
        estado: 'Estado hardString',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('interacao', null, { truncate: true, cascade: true });
  },
};
