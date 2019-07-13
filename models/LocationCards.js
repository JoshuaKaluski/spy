const mongoose = require('mongoose');

const LocationCardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  locations: [
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String
      }
    }
  ],
  genre: {
    type: String,
    required: true
  },
});

module.exports = LocationCards = mongoose.model('locationCards', LocationCardsSchema);