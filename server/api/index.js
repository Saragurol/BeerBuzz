'use strict'

const router = require('express').Router()
const {Student, Campus} = require('../db')
// const Student = require('../db/student')
// const Campus = require('../db/campus')

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.get('/students', async (req, res, next) => {
  try {
    const AllStudents = await Student.findAll()
    res.json(AllStudents)
  } catch (error) {
    next(error)
  }
})
router.get('/campuses', async (req, res, next) => {
  try {
    const AllCampuses = await Campus.findAll()
    res.json(AllCampuses)
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






//SAMPLE SYNTAX!!!!!!

// const Article = require('../models/article');

// router.get('/articles',  async (req,res,next) =>{
//     try {
//         const allArticles = await Article.findAll()
//         res.json(allArticles)
//     } catch (error) {
//         next(error)
//     }
// })

// router.get('/articles/:id',  async (req,res,next) =>{
//     try {
//         const articleByID = await Article.findById(req.params.id)
//         if(articleByID){
//             res.json(articleByID)
//         }
//         else{
//             res.status(404).json()
//         }
//     } catch (error) {
//         next(error)
//     }
// })

// router.post('/articles',  async (req,res,next) =>{
//     try {
//         let newBody = req.body
//         if(newBody !== undefined){
//             const newArticle = await Article.create(newBody)
//             res.json({message:'Created successfully', article: newArticle})
//             //didnt construct the below object. missed this step: 
//             //{
//             //  message: 'Created successfully',
//             // article: <the created article instance>
//             //  }
//         }
//         else{
//             res.status(500)
//         }
//     } catch (error) {
//         next(error)
//     }
// })

// router.put('/articles/:id',  async (req,res,next) =>{
//     try {
//         const findArticle = await Article.findById(req.params.id)

//         if(findArticle){
//         const newUpdate = await Article.update(req.body, {
//             // req.body contains the info we need to update
//             where: {id: req.params.id},
//             returning: true,
//             plain: true
//         })
//             res.json({message:'Updated successfully', article: newUpdate[1]})
//             //didnt construct the below object. missed this step: 
//             //{
//             //  message: 'Created successfully',
//             // article: <the updated article instance>
//             //  }
//             // .Update takes two parameters: the first parameter contains the info you want to update. The second parameter contains the query for which instances to update. Thats why we need to put the [1]. if you console.log newUpdate; you see an array. the first element is undefined. The second element is the updated instance
//         }
//         else{
//             res.status(500)
//         }
//     } catch (error) {
//         next(error)
//     }
// })

// module.exports = router;
