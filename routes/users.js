var db = require('../models')

exports.load = function(req,res,id,next) {
  db.User.find(id).complete(function(err,user) {
    if(err) return next(err)
    if(!user) return res.send(404)
    req.user = user;
    next();
  });
}

exports.findAll = function(req, res, next) {
  db.User.findAll().complete(function(err,entities) {
    if(err) return next(err);
    res.json(entities)
  })
}

exports.find = function(req, res,next) {
  res.json(req.user);
}

exports.create = function(req, res, next) {
  console.log(req.body);
  db.User.create(req.body).complete(function(err,user) {
    if(err) console.log(err);//return next(err);
    res.statusCode = 201
    res.json(user)
  })
}

exports.update = function(req, res, next) {
  req.user.updateAttributes(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.json(entity)
  })
}

exports.destroy = function(req, res, next) {
  req.user.destroy().complete(function(err) {
    if(err) return next(err);
    res.end()
  })
}
