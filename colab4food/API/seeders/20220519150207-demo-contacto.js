'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contacto', [
      {
        id_organizacao: 1,
        id_cargo: 1,
        isContactoPrincipal: true,
        nomeContacto: 'Nome contacto 1',
      },
      {
        id_organizacao: 1,
        id_cargo: 2,
        isContactoPrincipal: false,
        nomeContacto: 'Nome contacto 1',
      },
      {
        id_organizacao: 2,
        id_cargo: 2,
        isContactoPrincipal: true,
        nomeContacto: 'Nome contacto 2',
      },
      {
        id_organizacao: 3,
        id_cargo: 3,
        isContactoPrincipal: true,
        nomeContacto: 'Nome contacto 3',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contacto', null, { truncate: true, cascade: true });
  },
};
