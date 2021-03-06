'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tipo_organizacao',
      [
        {
          nomeTipoORganizacao: 'OrganizacaoTipo0',
        },
      ],
      [
        {
          nomeTipoORganizacao: 'OrganizacaoTipo1',
        },
      ],
      [
        {
          nomeTipoORganizacao: 'OrganizacaoTipo2',
        },
      ],
      [
        {
          nomeTipoORganizacao: 'OrganizacaoTipo3',
        },
      ],
      [
        {
          nomeTipoORganizacao: 'OrganizacaoTipo4',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipo_organizacao', null, {});
  },
};
