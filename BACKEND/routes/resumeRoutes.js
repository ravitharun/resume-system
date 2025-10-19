const express = require('express');
const router = express.Router();
const { createResume, getResume } = require('../controllers/resumeController');

router.post('/new', createResume);
router.get('/:id', getResume);

module.exports = router;
