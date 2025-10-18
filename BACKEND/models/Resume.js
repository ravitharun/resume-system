const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  education: { type: String },
  skills: [String],
  projects: [{ title: String, description: String, link: String }],
  summary: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
