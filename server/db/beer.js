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
      defaultValue: 'https://www.pngkey.com/png/detail/442-4423751_github-octocat-png-github-inspectocat-896-github-hack.png'
    },
    description: {
      type: Sequelize.TEXT
    },
    volume: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

module.exports = Beer;

//eventually want to add stuff for comments rating
