// const app = require('./index');
// or
// req.app.get in req,res fn's when we need db

// var app = require('./index');
// const db = app.get('db');

const axios = require('axios');
const config = require('./config.js')




module.exports = {

    getAboutInfo: function(req, res){
        req.app.get('db').getAboutInfo().then(function (aboutInfo){
            return res.status(200).json(aboutInfo);
        })
    },

    getNowInfo: function(req, res){
        req.app.get('db').getNowInfo().then(function (nowInfo){
            return res.status(200).json(nowInfo);
        })
    },

    getWritingInfo: function(req, res) {
        req.app.get('db').getWritingInfo().then(function (writingInfo){
            return res.status(200).json(writingInfo);
        })  
    },

    putAboutinfo: function(req, res){
        const newInfo = req.body.test

        req.app.get('db').putAboutInfo(newInfo).then(function (aboutInfo){
            return res.status(200).json(aboutInfo);
        })
    },

    putNowInfo: function(req, res){
        const newInfo = req.body.test
        
        req.app.get('db').putNowInfo(newInfo).then(function (nowInfo){
            return res.status(200).json(nowInfo);
        })
    },

    // putNavPics: function(req, res){
    //     const newpic = req.body.test, page = req.body.page;
        
    //     req.app.get('db').putNavPics(newPic).then(function (navPics){
    //         return res.status(200).json(navPics);
    //     })
    // },

    postWritingInfo: function (req, res) {
        const title = req.body.title, hyperlink = req.body.hyperlink;

        req.app.get('db').postWritingInfo(title, hyperlink).then(function (writingInfo){
            return res.status(200).json(writingInfo);
        })
    },

    deleteWritingInfo: function (req, res) {
        const deleteIndex = req.body.index;

        req.app.get('db').deleteWritingInfo(index).then(function (writingInfo){
            return res.status(200).json(writingInfo);
        })
    },

    passCheck: function (req, res) {
        const pass = req.body.pass;

        req.app.get('db').passCheck(pass).then(function (passResults){
            return res.status(200).json({pass: passResults[0].case==='1'});
        })
    }

}
