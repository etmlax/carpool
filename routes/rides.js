var db = require('../models')

exports.load = function(req,res,id,next) {
  db.Ride.find(id).complete(function(err,ride) {
    if(err) return next(err)
    if(!ride) return res.send(404)
    req.ride = ride;
    next();
  });
}

exports.findAll = function(req, res, next) {
  db.Ride.findAll().complete(function(err,entities) {
    if(err) return next(err);
    res.json(entities)
  })
}

exports.find = function(req, res, next) {
  res.json(req.ride);
}

exports.create = function(req, res, next) {
  console.log(req.body)
  db.Ride.create(req.body).complete(function(err,entity) {
    if(err) console.log( err);//return next(err);
    res.statusCode = 201
    res.json(entity)
  })
}

exports.update = function(req, res,next) {
  req.ride.updateAttributes(req.body).complete(function(err,entity) {
    if(err) return next(err);
    res.json(entity)
  })
}

exports.destroy = function(req, res,next) {
  req.ride.destroy().complete(function(err) {
    if(err) return next(err);
    res.end()
  })
}
