const express = require("express");
const { owner } = require('../models');

const { Router } = express;

const router = new Router();

router.get('/', async (req, res) => {
    const owners = await owner.findAll();
    res.send(owners);
});

router.get('/:id', async (req, res) => {
    const owners = await owner.findAll({where: {
        id: req.params.id
    }});
    if (!owners.length) {
        res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
    }
    res.send(owners[0]);
});

router.post('/', async (req, res) => {
    try {
        const new_owner = await owner.create(req.body);
        res.status(201).send(new_owner);
    }
    catch (error) {
        res.status(400).send(`Validation errors: ${error.errors.map((error) => error.message).join(', ')}`);    
    } 
});

router.patch('/:id', async (req, res, next) => {
    try {
        const target_owner = await owner.findByPk(req.params.id);
        if (!target_owner) {
            res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
        } 
        const updated_owner = await target_owner.update(req.body);
        res.status(200).send(updated_owner);
    }
    catch (error) {
        res.status(400).send(`Validation errors: ${error.errors.map((error) => error.message).join(', ')}`);    
    } 
});

router.delete('/:id', async (req, res, next) => {
    try {
        const target_owner = await owner.findByPk(req.params.id);
        if (!target_owner) {
            res.status(404).send(`Owner with ID ${req.params.id} does not exist`);
        } 
        await target_owner.destroy();
        res.status(200).send('deleted succesfully');
    }
    catch (error) {
        console.log(error);
        next()
    } 
});

module.exports = router;
