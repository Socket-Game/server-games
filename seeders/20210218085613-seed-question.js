'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const question = [
      {
        exercise: "Kota ini identik dengan suasana yang romantis?",
        answer: "PARIS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Negara ini identik dengan makanan khas yang berbentuk lingkaran dengan anekaragam topping di atasanya?",
        answer: "ITALIA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Pulau ini memiliki airport bernama Gan International Airport?",
        answer: "MALDIVES",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Kota ini terkenal dengan Gedung tertingi di dunia saat ini?",
        answer: "DUBAI",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Kota ini Identik dengan banjir tahunan?",
        answer: "JAKARTA",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Questions', question, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
