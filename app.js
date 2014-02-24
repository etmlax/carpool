var express = require('express')

  , users = require('./routes/users')
  , rides = require('./routes/rides')
  , locations = require('./routes/locations')
  , usersrides = require('./routes/usersrides')
  , http    = require('http')
  , path    = require('path')
  , db      = require('./models')

var app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler())
}


app.get('/carpool/users', users.findAll)
app.get('/carpool/users/:userId', users.find)
app.post('/carpool/users', users.create)
app.put('/carpool/users/:userId', users.update)
app.del('/carpool/users/:userId', users.destroy)
app.param('userId',users.load)

app.get('/carpool/rides', rides.findAll)
app.get('/carpool/rides/:rideId', rides.find)
app.post('/carpool/rides', rides.create)
app.put('/carpool/rides/:rideId', rides.update)
app.del('/carpool/rides/:rideId', rides.destroy)
app.param('rideId',rides.load)

app.get('/carpool/locations', locations.findAll)
app.get('/carpool/locations/:locationId', locations.find)
app.post('/carpool/locations', locations.create)
app.put('/carpool/locations/:locationId', locations.update)
app.del('/carpool/locations/:locationId', locations.destroy)
app.param('locationId',locations.load)

app.get('/carpool/usersrides', usersrides.findAll)
app.get('/carpool/usersrides/:usersRidesId', usersrides.find)
app.post('/carpool/usersrides', usersrides.create)
app.put('/carpool/usersrides/:usersRidesId', usersrides.update)
app.del('/carpool/usersrides/:usersRidesId', usersrides.destroy)
app.param('usersRidesId',usersrides.load)


db
  .sequelize
  .sync()
  .complete(function(err) {
    if (err) {
      throw err
    } else {
      http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'))
      })
    }
  })
