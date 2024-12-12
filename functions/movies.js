const movies = require('../data/movies.json');

exports.handler = async(event)=>{
    
    return {
        statusCode: 200,
        body: JSON.stringify(movies)
    }
}