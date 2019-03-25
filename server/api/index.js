'use strict'

const router = require('express').Router()
const {Beer, Brewery} = require('../db')

router.get('/beers', async (req, res, next) => {
  try {
    const allBeers = await Beer.findAll()
    res.json(allBeers)
  } catch (error) {
      next(error)
  }
})

router.get('/beers/:id', async (req, res, next) => {
  try {
    const oneBeer = await Beer.findById(req.params.id, {include: [Brewery]})
    // res.json(oneBeer)
    if (oneBeer){
      res.json(oneBeer)
    }
    else {
      res.sendStatus(404).json({})
    }
  } catch (error) {
      next(error)
  }
})

router.post('/beers',  async (req, res, next) => {
  try {
    const newBeer = await Beer.create(req.params)
    res.json(newBeer)
    } catch (error) {
      console.log("ERROR", error)
        next(error)
    }
})

router.delete('/beers/:id', async (req, res, next) => {
  try {
    await Beer.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204).json({})
  } catch (error) {
    next(error)
  }
})

router.put('/beers/:id', async (req, res, next) => {
  try {
    const findBeer = await Beer.findById(req.params.id)
    if (findBeer){
      const updatedBeer = await Beer.update(req.body, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      })
      res.json(updatedBeer[1])
    }
    else {
      res.sendStatus(500).json({})
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
      res.sendStatus(404).json({})
    }
  } catch (error) {
      next(error)
  }
})

router.post('/breweries',  async (req, res, next) => {
  try {
      // let newBody = req.body
      // if (newBody !== undefined){
          const newBrewery = await Brewery.create(req.body)
          console.log("REACHES SERVER SIDE BREWERY POST ROUTE")
          res.json(newBrewery)
      // }
      // else {
      //     res.sendStatus(500).json({})
      // }
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
    res.sendStatus(204).json({})
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
      res.json(updatedBrewery[1])
    }
    else {
      res.sendStatus(500).json({})
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
