'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // product.hasOne(models.storeProduct, {
      // });

      // product.hasMany(models.productCategory, {
      // });

      // product.hasMany(models.wishlist, {
      // });
    }
  };
  product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    size: { 
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: null,
      validate: {
        notNull: false,
        notEmpty: false,
      },
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: null,
      validate: {
        notNull: false,
        notEmpty: false,
      },
    },
    imageDefault: { 
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate: {
        notNull: false,
        notEmpty: false,
      },
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: false,
        notEmpty: false,
      },
    },
    priceDiscount: { 
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      validate: {
        notNull: false,
        notEmpty: false,
      },
    },
    isPromo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      validate: {
        notNull: false,
        notEmpty: false,
      },
    }
  },{
    sequelize,
    modelName: 'product',
  });
  return product;
};