
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var PetSchema = new Schema({
  pet_id: {type: Schema.Types.ObjectId,index: true},
  pet_name: {type: String, required: true },
  pet_breed: { type: String, required:true },
  pet_owner: [{type: Schema.Types.ObjectId, ref: 'Owner'}],
  pet_bio: {type: String, required: true},
  pet_age: { type: Number, required: true },
  pet_photo: { data: Buffer, contentType: String },
});

var Pet = mongoose.model('Pet', PetSchema);
module.exports = {
  Pet: Pet
};
