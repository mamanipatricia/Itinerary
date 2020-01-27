const Itinerary = require('../models').Itinerary;
const Place = require('../models').Place;

module.exports = {

    async list(req, res) {
        let itineraries;
        try {
            itineraries = await Itinerary.findAll({
                include: [
                    { model: Place, as: 'PlaceDepart' },
                    { model: Place, as: 'PlaceArrive' }
                ]
            });
        }
        catch (e) {
            console.log('error--->', e)
        }
        return res.status(200).send(itineraries);
    }

}

