const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '6ff7b21cb2c390036679c369f8c2fba2',
    imageBaseUrl: 'https://image.tmdb.org/t/p',
    urlSuffix: `api_key=6ff7b21cb2c390036679c369f8c2fba2&language=en-US`,
    posterSizes: {
        small: 'w342',
        medium: 'w500',
        large: 'w780',
        original: 'original'
    },
    backdropSizes: {
        small: 'w300',
        medium: 'w780',
        large: 'w1280',
        original: 'original'
    },
    movieType: {
        popular: 'popular',
        top_rated: 'top_rated',
        upcoming: 'upcoming'
    },
    tvSeriesType: {
        on_the_air: 'on_the_air',
        popular: 'popular',
        top_rated: 'top_rated'
    },
    genres: {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance', 
        878: 'Science Fiction',
        10770: 'Tv Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
        10759: 'Action & Adventure',
        10762: 'Kids',
        10763: 'News',
        10764: 'Reality',
        10765: 'Sci-Fi & Fantasy',
        10766: 'Soap',
        10767: 'Talk',
        10768: 'War & Politics',
    }
};

export default apiConfig;