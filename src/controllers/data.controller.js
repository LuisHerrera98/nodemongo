const dataCtrl = {};

const Data = require('../models/Data');

//ADD DATA

dataCtrl.addData = async (req, res)=>{
    
    const { event, type, details } = req.body;
    const newData = new Data({event, type, details});
    await newData.save();
    res.redirect('/api/v1/all-data');
};

//GET ALL DATA

dataCtrl.renderData = async (req, res)=>{
    const data =  await Data.find().lean();
    res.render('data/all-data', {data});
}

module.exports = dataCtrl;