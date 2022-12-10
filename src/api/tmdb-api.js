import apiConfig from "./tmdb-api.config";
const { baseUrl, apiKey, imageBaseUrl, urlSuffix } = apiConfig;

class TMDBApi { 

    getMovies(type = 'popular', page = 1) {
    
        return fetch(`${baseUrl}/movie/${type}?page=${page}&${urlSuffix}`);

    }

    getSimilar(type, id) {

        return fetch(`${baseUrl}/${type}/${id}/similar?${urlSuffix}`)

    }

    getTvSeries(type = 'popular', page = 1) {

        return fetch(`${baseUrl}/tv/${type}?page=${page}&${urlSuffix}`);

    }

    getDetails(type, id) {

        return fetch(`${baseUrl}/${type}/${id}?${urlSuffix}`);

    }

    getGenre(type) {
        
        return fetch(`${baseUrl}/genre/${type}/list?${urlSuffix}`);

    }

    getByGenre(type, genreIds, page = 1) {

        return fetch(`${apiConfig.baseUrl}/discover/${type}?${apiConfig.urlSuffix}&page=${page}&with_genres=${genreIds}`);

    }

    search(query, category = 'movie', page = 1) {
        
        return fetch(`${baseUrl}/search/${category}?query=${encodeURIComponent(query)}&page=${page}&${urlSuffix}`);

    }

    getCasts(type, id) {
        
        return fetch(`${baseUrl}/${type}/${id}/credits?${urlSuffix}`);
    }

    getMovieVideos(movie_id) {

        return fetch(`${baseUrl}/movie/${movie_id}/videos?${urlSuffix}`);

    }

    getImagePosterUrl(path, size = 'w300') {

        return `${imageBaseUrl}/${size}${path}`;

    }

    getImageBackdropUrl(path, size = 'w1280') {

        return `${imageBaseUrl}/${size}${path}`;

    }

}

export default TMDBApi;