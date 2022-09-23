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
        original: 'orignial'
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
    }
};

export default apiConfig;