module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
  
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        
        
        
      },
      
    },
  
    geo: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
     
      },
      
    },
  
    numFrom: {
      type: DataTypes.INTEGER,
      validate: {},
      
    },
  
    numTo: {
      type: DataTypes.INTEGER,
      validate: {},
      
    },
  
  })

  return Location
}
