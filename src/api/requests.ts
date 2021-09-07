const API_KEY = '275dab6d7573605e85ec2cb8b3fc7b22'

export default {
    fetchTrending: {
        title: 'Trending',
        url: `trending/all/week?api_key=${API_KEY}&language="ru-RU"`
    },
    fetchPopular: {
        title: 'Popular',
        url: `movie/popular?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: 'Western',
        url: `discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchWar: {
        title: 'War',
        url: `discover/movie?api_key=${API_KEY}&with_genres=10752`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: {
        title: 'TV Movie',
        url: `discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchAll: {
        title: 'All',
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    }
}
