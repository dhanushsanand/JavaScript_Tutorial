const express = require('express');
const router = express.Router();

router.route('/').get((req,res)=>{
    res.status(200).json({
        message: "Get all Contacts from route"
    })
});

router.route('/').post((req,res)=>{
    res.status(200).json({
        message: "Create Contacts from route"
    })
});

router.route('/:id').get((req,res)=>{
    res.status(200).json({
        message: `Get contact for ${req.params.id}`
    })
});

router.route('/:id').put((req,res)=>{
    res.status(200).json({
        message: `Updated Contact for ${req.params.id}`
    })
});

router.route('/:id').delete((req,res)=>{
    res.status(200).json({
        message: `Deleted Contact for ${req.params.id}`
    })
});

module.exports = router;