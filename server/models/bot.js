import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Bot = new Schema({
  name: { type: 'String', required: true },
  status: { type: 'String', required: true },
  created: { type: 'Date', default: Date.now, required: true },
  users: [],
});

export default mongoose.model('Bot', Bot);
