//const express = require('express');
//const router = express.Router();
//CRUD -- you can create read update delete
//same as lines 1-2
const router = require('express').Router()
const Pie =  require('../db').import('../models/pie');
// GET REQUEST
router.get('/', (req,res) => {
    Pie.findAll()
        .then(pies => res.status(200).json({
            pies: pies
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})
// POST REQUEST
router.post('/', (req,res) => {
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating
    }
    Pie.create(pieFromRequest)
        .then(pie => res.status(200).json({
            pie: pie
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//QUERY PIE BY NAME name and /:name need to match. FindOne will find the first one to match
router.get('/:name', (req,res) => {
    Pie.findOne({
        where: {
            nameOfPie: req.params.name
        }
    })
    .then(pie => res.status(200).json({
        pie: pie
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//UPDATE METHOD --put
router.put('/:id', (req, res) => {
    Pie.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(pie => res.status(200).json({
        pie: pie
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})
//DELETE METHOD 
router.delete('/:id', (req,res) => {
    Pie.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(pie => res.status(200).json({
        pie: pie
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;
