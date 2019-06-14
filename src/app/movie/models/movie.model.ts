export interface Movie {
  id: number;
  name: string;
  image: string;
  genre: string;
  releaseYear: string;
}

export const movies: Movie[] = [{
  id: 1,
  name: "The terminator",
  genre: "Sci-fi",
  releaseYear: '1984',
  image: 'none',
}];