var db = require('../models')

exports.load = function(req,res,id,next) {
  db.UsersRides.find(id).complete(function(err,usersRides) {
    if(err) return next(err)
    if(!usersRides) return res.send(404)
    req.usersRides = usersRides;
    next();
  });
}

exports.findAll = function(req, res, next) {
  db.UsersRides.findAll().complete(function(err,entities) {
    if(err) return next(err);
    res.json(entities)
  })
}

exports.find = function(req, res) {
  res.json(req.usersRides);
}

exports.create = function(req, res) {
  db.UsersRides.create(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.statusCode = 201
    res.json(entity)
  })
}

exports.update = function(req, res) {
  req.usersRides.updateAttributes(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.json(entity)
  })
}

exports.destroy = function(req, res) {
  req.usersRides.destroy().complete(function(err) {
    if(err) return next(err);
    res.end()
  })
}
