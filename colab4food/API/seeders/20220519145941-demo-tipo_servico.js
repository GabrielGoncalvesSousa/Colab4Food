'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipo_servico', [
      {
        nomeTipoServico: 'Art Review',
      },
      {
        nomeTipoServico: 'Troubleshooting & technical consultancy',
      },
      {
        nomeTipoServico: 'Development & optimization of food formulations',
      },
      {
        nomeTipoServico: 'Proof of concept for new technologies',
      },
      {
        nomeTipoServico: 'Schience4Food- acess & review of articles & conferences',
      },
      {
        nomeTipoServico: 'Academy4Food - internships for students',
      },
      {
        nomeTipoServico: 'Business intelligence',
      },
      {
        nomeTipoServico: 'Market & consumre trend analaysis',
      },
      {
        nomeTipoServico: 'Supplier identification',
      },
      {
        nomeTipoServico: 'Development of technical & scientific roadmaps',
      },
      {
        nomeTipoServico: 'Consultancy for RSD funding',
      },
      {
        nomeTipoServico: 'Support in the process of tax incentives SIFIDE & patent box',
      },
      {
        nomeTipoServico: 'Training4Food- specialzed & personalized technical courses',
      },
      {
        nomeTipoServico: 'Product design & database structuring services in information technology',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipo_servico', null, { truncate: true, cascade: true });
  },
};
