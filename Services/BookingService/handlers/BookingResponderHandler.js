const bookingBusinessHandler = require('./BookingBusinessHandler')
const coteResponder = require('../utils/coteResponder')
module.exports = {
    setListener: () => {
        // Lắng nghe Requester thực hiện đặt vé 
        coteResponder.bookingService.on("bookingNewMovie", (response) => {
            bookingBusinessHandler.bookTicket((bookingStatusData) => {
                response(bookingStatusData)
            })
        })
    }
}