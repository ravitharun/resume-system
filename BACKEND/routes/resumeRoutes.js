const express = require('express');
const router = express.Router();
const { createResume, getResume } = require('../controllers/resumeController');

router.get('/new', createResume);
router.get('/:id', getResume);

module.exports = router;
