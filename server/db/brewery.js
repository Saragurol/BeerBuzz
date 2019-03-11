'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

const Brewery = db.define('brewery', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://static.vinepair.com/wp-content/uploads/2018/01/hands-internal.jpg'
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: Sequelize.TEXT
    }
  })

module.exports = Brewery;
