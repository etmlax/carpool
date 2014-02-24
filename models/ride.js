
module.exports = function(sequelize, DataTypes) {
  var Ride = sequelize.define('Ride', {
  
    numSeats: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: false,
        
        
        
      },
      
    },
  
    price: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        
        
        
      },
      
    },
  
    dt: {
      type: DataTypes.DATE,
      validate: {
        notNull: true,
        
        
        
      },
      get: function() {
        var value = this.getDataValue('dt')
        return value ? value.toISOString().substring(0, 10) : value
      }
    },
    toId:{
      type:DataTypes.INTEGER
    },
    fromId:{
      type:DataTypes.INTEGER
    },
    driverId:{
      type:DataTypes.INTEGER
    }
  
  },
  {
    classMethods:{
      associate:function(models) {
        Ride.hasOne(models.Location,{as:'to',foreignKey:"toId"})
        Ride.hasOne(models.Location,{as:'from',foreignKey:"fromId"})
        Ride.hasOne(models.User,{as:'driver',foreignKey:"driverId"})
        Ride.hasMany(models.User,{through:"usersRides"})
      }
    }
  })

  


  return Ride
}
