var db = require('../models')

exports.load = function(req,res,id,next) {
  db.Location.find(id).complete(function(err,location) {
    if(err) return next(err)
    if(!location) return res.send(404)
    req.location = location;
    next();
  });
}

exports.findAll = function(req, res, next) {
  db.Location.findAll().complete(function(err,entities) {
    if(err) return next(err);
    res.json(entities)
  })
}

exports.find = function(req, res) {
  res.json(req.location);
}

exports.create = function(req, res) {
  db.Location.create(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.statusCode = 201
    res.json(entity)
  })
}

exports.update = function(req, res) {
  req.location.updateAttributes(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.json(entity)
  })
}

exports.destroy = function(req, res) {
  req.location.destroy().complete(function(err) {
    if(err) return next(err);
    res.end()
  })
}
