const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },              // Full name
  email: { type: String, required: true },             // Email
  phone: { type: String, required: true },             // Phone number
  education: { type: String, required: true },         // Education details
  skills: [{ type: String, required: true }],         // Array of skills
  // projects: [
  //   {
  //     title: { type: String, required: false },        // Project title
  //     description: { type: String },                  // Project description
  //     link: { type: String }                           // Project link (optional)
  //   }
  // ],
  achievements: [{ type: String }],                   // Array of achievements
  summary: { type: String },                          // Optional auto-generated summary
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
