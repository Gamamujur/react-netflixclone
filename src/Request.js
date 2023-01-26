const key = '6cadeec542a555393700651de906e151'

const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=2`,
    requestTop : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestNow: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=2`
}

export default requests