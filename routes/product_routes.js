const router = require('express').Router();
const mongoose = require('mongoose');

const Products = require('./../models/product');
const Categories = require('./../models/category').model;
const helper = require('../helpers/helper');

router.get('/list', /*helper.verifyToken,*/ async(req, res, next) => {
    const { limit } = req.query || 0;
    const { skip } = req.query || 0;
    const result = await Products.getList(1, 0, '', '')
    console.log(result);
    res.send('ok');
    /*
    Products.find().populate({path:'category'}).exec((err, data)=>{
        if (err) {
            return next(err)
        }
        console.log('res:', data)
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send({
            success: true,
            data
        });
    });
    */
});

module.exports = router;