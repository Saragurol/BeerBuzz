'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

const Beer = db.define('beer', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://dwa5x7aod66zk.cloudfront.net/assets/labtocat-be5eee0434960a8f73e54910df8e87b8a5a3b2d651c0b301670c04a9cc26a70f.png'
    },
    description: {
      type: Sequelize.TEXT
    },
    volume: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  })

module.exports = Beer;

//eventually want to add stuff for comments rating
