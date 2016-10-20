import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
  bot: {type: Schema.Types.ObjectId, ref: 'Bot'},
  name: {type: String, required: true},
  gender: {type: String, required: true},
  created: {type: 'Date', default: Date.now, required: true}
});

export default mongoose.model('User', User);
