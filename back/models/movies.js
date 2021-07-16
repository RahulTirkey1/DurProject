const mongoose = require('mongoose');

var Movies = mongoose.model('Movie', {
    name: { type: String },
    description: { type: String },
    actor: { type: Array }
});

module.exports = { Movies };