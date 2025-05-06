const { Event , EventType} = require('../models');

exports.createEvents = async (req , res ) => {
    try {
        const newEvents = await Event.create(req.body);
        res.status(201).json({status :'success' , data:newEvents})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports.getAllEvents = async ( req , res ) => {
    try {
        const events = await Event.findAll();
        res.json({status :'success' , data : events})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
}

exports.getEventById = async ( req , res ) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findOne( { where : { eventId }});
        if(!eventId) {
            res.status(400).json( { status : 'error' , message : 'Event Not Found'})
        }
        res.json( { status : 'success' , data : event })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });

    }
}

exports.deleteEvent = async ( req , res ) => {
    try {
        const { eventId } = req.params;
        const deleted = await Event.destroy({ where : { eventId } });
        if(deleted) {
            res.json({ status: 'success', message: 'Event deleted successfully' });
        } else {
          res.status(404).json({ status: 'error', message: 'Event not found' });
        }
        
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });

    }
}


exports.updateEvent = async (req, res) => {
    try {
      const { eventId } = req.params;
      const [updated] = await Event.update(req.body, { where: { eventId } });
      if (updated) {
        const updatedEvent = await Event.findOne({ where: { eventId } });
        res.json({ status: 'success', data: updatedEvent });
      } else {
        res.status(404).json({ status: 'error', message: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  };

  exports.getAllEventType = async ( req, res ) => {
    try {
        const eventType = await EventType.findAll();
        res.json({ status : 'success' , data : eventType})
    } catch (error) {
        res.status(500).json({ status : 'error' , message:error.message})
    }
  }