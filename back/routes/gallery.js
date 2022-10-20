const express = require("express");
const router = express.Router();
const {Board} = require("../models");
const {isLoggedIn,isNotLoggedIn} = require("./middlewares");
const { QueryTypes } = require('sequelize');
const { sequelize } = require("../models");
router.get("/",async (req,res,next)=>{
    try{
        const data = await Board.findOne({raw:true,where:{name:decodeURI(req.query.name)}});
        if (!data){
            res.send({code:400})
        }
        else{
            const query = `select * from posts inner join boards on posts.boardId = boards.id where boards.name="${decodeURI(req.query.name)}" `;
            const data = await sequelize.query(query,{type:QueryTypes.SELECT});
            res.send({code:200,cnt:data.length});
        }
    }
    catch(err){
        next(err);
    }
    
});
router.get("/list",async(req,res)=>{
    try{
        const query = `select * from posts inner join boards on posts.boardId = boards.id where boards.name="${decodeURI(req.query.name)}" LIMIT 10 OFFSET ${(req.query.page-1)*10}`;
        const data = await sequelize.query(query,{type:QueryTypes.SELECT});
        res.send({code:200,list:data});
    }
    catch(err){
        next(err);
    }
});

module.exports=router;