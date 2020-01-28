'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define('Itinerary', {
    // departId: DataTypes.STRING,
    // arriveId: DataTypes.STRING, // no hay que definir why?
    date: DataTypes.DATE,
    total: DataTypes.INTEGER,
    reserve: DataTypes.INTEGER
  }, {});
  Itinerary.associate = function(models) {
  Itinerary.belongsTo(models.Place, { as: 'PlaceArrive', foreignKey: 'arriveId'});
   Itinerary.belongsTo(models.Place, { as: 'PlaceDepart', foreignKey: 'departId'});
  };
  return Itinerary;
};
