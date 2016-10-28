
var mongoose = require('mongoose');

module.exports = mongoose.model('Comments', {
  comments_id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true
  },
  date: { type: Date, default: Date.now },
  author: { type: String, required: true },
  body:   String, required: true
}




});
