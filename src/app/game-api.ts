export interface iGameApi{
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    metacritic_platforms: [];
    release: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: [];
    added: number;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievement_count: number;
    genres: any[]
}

export interface IAllGames{
    count: number;
    next: string;
    previous: string;
    results: iGameApi[];
}

export interface Iscreenshots{
    image: string;
    hidden: boolean;
}