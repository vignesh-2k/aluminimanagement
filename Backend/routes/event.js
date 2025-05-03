const express = require('express');
const { createEvents, getAllEvents, getEventById, deleteEvent, updateEvent } = require('../controllers/eventController');
const router = express.Router();


router.post('/createevent' , createEvents);
router.get('/' , getAllEvents);
router.get('/:eventId' , getEventById);
router.delete('/:eventId' , deleteEvent);
router.put('/:eventId' , updateEvent);

module.exports = router;