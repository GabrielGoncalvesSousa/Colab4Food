'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('organizacao', [
      {
        id_tipoOrganizacao: '1',
        id_prioridade: '1',
        id_user: '1',
        id_distrito: '1',
        nomeOrganizacao: 'Organizacao Nome 1',
        cidade: 'Cidade 1',
        'codigo-postal': '1111-111',
        rua: 'Rua dos 1',
      },
      {
        id_tipoOrganizacao: '2',
        id_prioridade: '2',
        id_user: '2',
        id_distrito: '2',
        nomeOrganizacao: 'Organizacao Nome 2',
        cidade: 'Cidade 2',
        'codigo-postal': '2222-222',
        rua: 'Rua dos 2',
      },
      {
        id_tipoOrganizacao: '3',
        id_prioridade: '3',
        id_user: '3',
        id_distrito: '3',
        nomeOrganizacao: 'Organizacao Nome 3',
        cidade: 'Cidade 3',
        'codigo-postal': '3333-333',
        rua: 'Rua dos 3',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('organizacao', null, { truncate: true, cascade: true });
  },
};
