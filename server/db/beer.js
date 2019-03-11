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
      defaultValue: 'http://4.bp.blogspot.com/-3JeIxWBU7bY/UKjIt8lVpCI/AAAAAAAABx8/YM8piSOwczs/s1600/Schipperke-Puppy.jpg'
    },
    discription: {
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
