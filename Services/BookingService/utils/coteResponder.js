const cote = require('cote');
class CoteResponder {
    constructor() {
        this.bookingService = new cote.Responder({name: 'Booking Service', namespace: 'booking'});
    }
}

module.exports = new CoteResponder()