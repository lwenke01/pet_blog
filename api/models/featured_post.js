
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var dogSchema = Schema({
  dog_id: {
    type: Schema.Types.ObjectId,
    index: true
  },
  dog_name: {type: String, required: true },
  dog_breed: { type: String, required:true },
  dog_owner: [{type: Schema.Types.ObjectId, ref: 'Owner'}],
  dog_bio: {type: String, required: true},
  dog_age: { type: Number, required: true },
  dog_photo: { data: Buffer, contentType: String },

});

var ownerSchema = Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    index: true
  },
  owner_name: {
    first: {type: String, required: true },
    last: {type: String, required: true },
  owner_bio:  {type: String, required: true },
  city: {type: String, required: true },
  state: {type: String, required: true },
  email: {type: String, required: true },
  phone: {type: Number, required: false },
  social_media: {
    instagram: {type: String, required: false},
    twitter: {type: String, required: false},
    facebook: {type:String, required: false},
    snapchat: {type: String, required: false},
    youtube: {type: String, required: false},
    other: {type: String, required: false},
    personal: {type: String, required: false}
  },
  owner_image: {data: Buffer, contentType: String},
  dogs: [{type: Schema.Types.ObjectId, ref: 'Dog'}]

});

var Post = mongoose.model('Post', postSchema);
