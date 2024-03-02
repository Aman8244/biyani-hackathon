// models/Complaint.js
import { Schema,model } from 'mongoose';
const mongoose = require('mongoose');

const ComplaintSchema = new Schema({
  name:String,
  image: String,
  contactNumber: String,
  details: String,
  status: { type: Boolean, default: true },
  email:String
});
module.exports = mongoose.models.CampusComplaint || model('CampusComplaint', ComplaintSchema);
