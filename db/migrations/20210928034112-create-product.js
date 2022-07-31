'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { 
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      imageDefault: { 
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      size: { 
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
        defaultValue: null,
        validate: {
          notNull: false,
          notEmpty: false,
        },
      },
      description: { 
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
        defaultValue: null,
        validate: {
          notNull: false,
          notEmpty: false,
        },
      },
      price: {
        type: Sequelize.INTEGER
      },
      imageDefault: {
        type: Sequelize.STRING
      },
      priceDiscount: {
        type: Sequelize.DOUBLE
      },
      isPromo: {
        type: Sequelize.BOOLEAN
      },
      stock: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};