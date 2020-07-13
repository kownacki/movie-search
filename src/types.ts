export interface Movie {
  imdbID: string,
  Poster: string | null, // null means no poster available
  Title: string,
  Year: string,
}
