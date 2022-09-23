import apiConfig from "./tmdb-api.config";
const { baseUrl, apiKey, imageBaseUrl, urlSuffix } = apiConfig;

class TMDBApi { 

    getMovies(type = 'popular') {
    
        return fetch(`${baseUrl}/movie/${type}?${urlSuffix}`);

    }

    getTvSeries(type = 'popular') {

        return fetch(`${baseUrl}/tv/${type}?${urlSuffix}`);

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