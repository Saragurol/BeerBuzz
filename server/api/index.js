'use strict'

const router = require('express').Router()
const {Beer, Brewery} = require('../db')

router.get('/beers', async (req, res, next) => {
  try {
    const allBeers = await Beer.findAll({
      include: [Brewery]
    })
    res.json(allBeers)
  } catch (error) {
      next(error)
  }
})

router.get('/beers/:id', async (req, res, next) => {
  try {
    const BeerById = await Beer.findById(req.params.id)
    if (BeerById){
      res.json(BeerById)
    }
    else {
      res.status(404).json({})
    }
  } catch (error) {
      next(error)
  }
})

router.post('/beers',  async (req, res, next) => {
  try {
      let newBody = req.body
      if (newBody !== undefined){
          const newBeers = await Beer.create(newBody)
          res.json(newBeers)
      }
      else {
          res.status(500)
      }
    } catch (error) {
        next(error)
    }
})
//the res.status (500) isint necessary here bc in the middleware they are already saying that if there is an error send the 500 status. as long as we place everything in a try catch. this will be enough for this project. 
router.delete('/beers/:id', async (req, res, next) => {
  try {
    await Beer.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).json({})
  } catch (error) {
    next(error)
  }
})

router.put('/beers/:id', async (req, res, next) => {
  try {
    const findBeers = await Beer.findById(req.params.id)
    if (findBeers){
      const updatedBeers = await Beer.update(req.body, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      })
      res.json(updatedBeers)
    }
    else {
      res.status(500)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/breweries', async (req, res, next) => {
  try {
    const allBreweries = await Brewery.findAll()
    res.json(allBreweries)
  } catch (error) {
      next(error)
  }
})

router.get('/breweries/:id/beers', async (req, res, next) => {
  try {
    const breweryId = req.params.id
    const Beers = await Beer.findAll({ where: {breweryId} })
    res.json(Beers)
  } catch (error) {
    next(error)
  }
})

router.get('/breweries/:id', async (req, res, next) => {
  try {
    const BreweryById = await Brewery.findById(req.params.id, {include: [Beer]})
    if (BreweryById){
      res.json(BreweryById)
    }
    else {
      res.status(404)
    }
  } catch (error) {
      next(error)
  }
})

router.post('/breweries',  async (req, res, next) => {
  try {
      let newBody = req.body
      if (newBody !== undefined){
          const newBrewery = await Brewery.create(newBody)
          res.json(newBrewery)
      }
      else {
          res.status(500)
      }
    } catch (error) {
        next(error)
    }
})

router.delete('/breweries/:id', async (req, res, next) => {
  try {
    await Brewery.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).json({})
  } catch (error) {
    next(error)
  }
})

router.put('/breweries/:id', async (req, res, next) => {
  try {
    const findBrewery = await Brewery.findById(req.params.id)
    if (findBrewery){
      const updatedBrewery = await Brewery.update(req.body, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      })
      res.json(updatedBrewery)
    }
    else {
      res.status(500)
    }
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
