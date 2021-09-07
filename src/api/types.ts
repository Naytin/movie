export type MoviesType = {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    media_type: string
    original_language: string
    original_title: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type ResponseType<D = MoviesType> = {
    page: number
    results: Array<D>
    total_pages: number
    total_results: number
}

export type TrailerType = {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}

export type TrailersType = {
    id: number
    results: TrailerType[]
}
