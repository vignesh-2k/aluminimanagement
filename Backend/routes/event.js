const express = require('express');
const { createEvents, getAllEvents, getEventById, deleteEvent, updateEvent, getAllEventType } = require('../controllers/eventController');
const router = express.Router();
const upload = require('../middlewares/upload');

router.get('/eventtype' , getAllEventType);
router.post('/createevent' , 
    upload.fields([
        {name: 'eventImg' , maxCount : 1},
        {name : 'ticketImg' , maxCount : 1},
    ]),
    createEvents);
router.get('/' , getAllEvents);
router.get('/:eventId' , getEventById);
router.delete('/:eventId' , deleteEvent);
router.put('/:eventId' , updateEvent);


module.exports = router;