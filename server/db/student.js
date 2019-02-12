'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

const Student = db.define('student', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'http://4.bp.blogspot.com/-3JeIxWBU7bY/UKjIt8lVpCI/AAAAAAAABx8/YM8piSOwczs/s1600/Schipperke-Puppy.jpg'
    },
    gpa: {
      type: Sequelize.DECIMAL,
      validate: {
        isDecimal: true,
        min: 0.0,
        max: 4.0
      }
    }
  })

module.exports = Student;

