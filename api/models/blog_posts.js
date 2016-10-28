
var mongoose = require('mongoose').
Schema = mongoose.Schema;


var postSchema = new Schema({
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true
  },
  title: String,
  category: {
    type: String,
    default: 'dog'
  },
  author: {
    type: String,
    default: 'Lauren Farricker Curtis' },
  body:  {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  post_img: {
    data: Buffer,
    contentType: String
  },
  tags: {
    t_1: String,
    t_2: String,
    t_3: String,
    t_4: String
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comments'
    }
  ]
});

var Post = mongoose.model('Post', PostSchema);

module.exports = {
  Post: Post
};
