'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg'
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

module.exports = Campus;
