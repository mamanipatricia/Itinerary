'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    name: DataTypes.STRING
  }, {});
  Place.associate = function (models) {
    // associations can be defined here
    Place.hasMany(models.Itinerary, { as: 'PlaceArrive', foreignKey: 'arriveId'});
    Place.hasMany(models.Itinerary, { as: 'PlaceDepart', foreignKey: 'departId'});

  };

  return Place;
};