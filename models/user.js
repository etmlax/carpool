module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
  
    first: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
  
      },
      
    },
  
    last: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        
      },
      
    },
  
    email: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
      
      },
      
    },
  
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        
      },
      
    },
  
    phone: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,

        
      },
      
    },
  
    numRidesTaken: {
      type: DataTypes.INTEGER,
      validate: {
        // notNull: false,
        
        
        
      },
      
    },
  
    numRidesGiven: {
      type: DataTypes.INTEGER,
      validate: {
        // notNull: false,
        
        
        
      },
      
    }
  
  },
  {
    classMethods:{
      associate:function(models) {
        User.hasMany(models.Ride,{through:"usersRides"})
      }
    }
  })


  return User
}
