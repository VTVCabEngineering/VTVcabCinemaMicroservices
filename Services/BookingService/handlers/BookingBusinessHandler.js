class BookingBusinessHandler {
    // Hàm xử lý việc đặt vé
    bookTicket() {
        return new Promise((resolve) => {
            resolve("Bạn đã mua vé xem phim thành công!")
        })
    }
 }
 
 module.exports = new BookingBusinessHandler()