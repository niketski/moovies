import apiConfig from "./tmdb-api.config";
const { baseUrl, apiKey, imageBaseUrl, urlSuffix } = apiConfig;

class TMDBApi { 

    getMovies(type = 'popular') {
    
        return fetch(`${baseUrl}/movie/${type}?${urlSuffix}`);

    }

    getSimilar(type, id) {

        return fetch(`${baseUrl}/${type}/${id}/similar?${urlSuffix}`)

    }

    getTvSeries(type = 'popular') {

        return fetch(`${baseUrl}/tv/${type}?${urlSuffix}`);

    }

    getDetails(type, id) {

        return fetch(`${baseUrl}/${type}/${id}?${urlSuffix}`);

    }

    getGenre(type) {
        
        return fetch(`${baseUrl}/genre/${type}/list?${urlSuffix}`);

    }

    getByGenre(type, genreIds) {

        return fetch(`${apiConfig.baseUrl}/discover/${type}?${apiConfig.urlSuffix}&with_genres=${genreIds}`);

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