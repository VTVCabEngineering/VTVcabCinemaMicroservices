const cote = require('cote');
class CoteResponder {
    constructor() {
        this.movieService = new cote.Responder({name: 'Movie Service', namespace: 'movie'});
    }
}

module.exports = new CoteResponder()