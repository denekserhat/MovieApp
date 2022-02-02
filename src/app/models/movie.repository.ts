import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "Film 1", imageUrl: "1.jpeg", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!" },
            { id: 2, title: "Film 2", imageUrl: "2.jpeg", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!" },
            { id: 3, title: "Film 3", imageUrl: "3.jpeg", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!" },
            { id: 4, title: "Film 4", imageUrl: "4.jpeg", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!" }
        ];
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(id: number): Movie | undefined {
        return this.movies.find(x => x.id == id);
    }
}