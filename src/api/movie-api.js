const request = require('sync-request')
const qs = require('querystring')

const API_URL = 'http://www.omdbapi.com/?';
const KEY = '4c00edb3';


const formatOptions = async (filter) => {
  let options = {
    s: filter,
    apikey: KEY
  }
  return options
}

const addRating = async(movies) => {
  let result = []
  movies.forEach(async (movie) => {
    let rating = await getRating(movie.imdbID)
    result.push({
      Title: movie.Title,
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Rating: rating
    })
  })

  return result
}

export async function getMovies(filter){

  let options = await formatOptions(filter);
  let server_url = API_URL + qs.stringify(options)

  let res = await request('GET', server_url);
  let json_res = JSON.parse(res.getBody());
  if (json_res.Response) return await addRating(json_res.Search)

  return []
}

const getOptionsById = async (imdbID) => {
  let options = {
    i: imdbID,
    apikey: KEY
  }
  return options
}

export async function getRating(imdbID) {

  let options = await getOptionsById(imdbID);
  let server_url = API_URL + qs.stringify(options)

  let res = await request('GET', server_url);
  let json_res = JSON.parse(res.getBody());
  if (json_res.imdbRating) return json_res.imdbRating

  return 0
}

export async function getMovieById(imdbID) {

  let options = await getOptionsById(imdbID);
  let server_url = API_URL + qs.stringify(options)

  let res = await request('GET', server_url);
  let json_res = JSON.parse(res.getBody());
  return json_res
}