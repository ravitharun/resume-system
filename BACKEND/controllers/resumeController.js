const Resume = require('../models/Resume');

// Create resume
exports.createResume = async (req, res) => {
 try{
    console.log('Working the api')

 }
 catch(err){
    console.log(err.message)
 }
};

// Get resume by ID
exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
