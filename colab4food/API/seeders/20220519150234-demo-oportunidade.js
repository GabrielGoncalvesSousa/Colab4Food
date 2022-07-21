'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('oportunidade', [
      {
        id_interacao: 1,
        id_stage: 1,
        id_lossReason: 1,
        id_source: 1,
        id_tipoServico: 1,
        'project/quotation': 1,
        budget: 1,
        totalExpenses: 1,
        adjudicacao: 1,
        recebidoAteData: 1,
        probability: 'Probabilidade 1',
        scheduledFinishDate: new Date(),
        finishDate: new Date(),
        clientSurvey: 'clientSurvey',
        notes: 'notes 1',
      },
      {
        id_interacao: 2,
        id_stage: 2,
        id_lossReason: 2,
        id_source: 2,
        id_tipoServico: 2,
        'project/quotation': 2,
        budget: 2,
        totalExpenses: 2,
        adjudicacao: 2,
        recebidoAteData: 2,
        probability: 'Probabilidade 2',
        scheduledFinishDate: new Date(),
        finishDate: new Date(),
        clientSurvey: 'clientSurvey',
        notes: 'notes 2',
      },
      {
        id_interacao: 3,
        id_stage: 3,
        id_lossReason: 3,
        id_source: 3,
        id_tipoServico: 3,
        'project/quotation': 3,
        budget: 3,
        totalExpenses: 3,
        adjudicacao: 3,
        recebidoAteData: 32,
        probability: 'Probabilidade 3',
        scheduledFinishDate: new Date(),
        finishDate: new Date(),
        clientSurvey: 'clientSurvey',
        notes: 'notes 3',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('oportunidade', null, { truncate: true, cascade: true });
  },
};
