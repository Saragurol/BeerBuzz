'use strict'
const db = require('./database')
const Beer = require('./beer')
const Brewery = require('./brewery')

Beer.belongsTo(Brewery)
Brewery.hasMany(Beer)

module.exports = {
  db, Beer, Brewery
}

