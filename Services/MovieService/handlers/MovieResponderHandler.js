const movieBusinessHandler = require('./MovieBusinessHandler')
const coteResponder = require('../utils/coteResponder')
module.exports = {
    setListener: () => {
        // Lắng nghe Requester lấy danh sách các bộ phim
        coteResponder.movieService.on("requestGetMovies", (response) => {
            movieBusinessHandler.getMovies((moviesData) => {
                response(moviesData)
            })
        })

        // Lắng nghe Requester lấy thông tin của một bộ phim
        coteResponder.movieService.on("requestGetMovieInfo", (movieID, response) => {
            movieBusinessHandler.getMovieInfoByID(movieID, (movieInfoData) => {
                response(movieInfoData)
            })
        })
    }
}