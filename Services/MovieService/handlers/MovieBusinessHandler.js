class MovieBusinessHandler {
   constructor() {
       this.listMovies = [
           {
               "id" : 1,
               "name" : "Home alone 1",
               "ticketPrice" : "100000",
               "type" : "2D",
           },
           {
                "id" : 2,
                "name" : "Fast and Furious",
                "ticketPrice" : "70000",
                "type" : "3D"
            }
       ]
   }
   getMovies() {
       return new Promise((resolve) => {
           resolve(this.listMovies)
       })
   }

   getMovieInfoByID(movieID) {
       return new Promise((resolve) => {
         let movieInfo = this.listMovies.find(x => x.id === movieID)
         resolve(movieInfo)
       })
   }
}

module.exports = new MovieBusinessHandler()