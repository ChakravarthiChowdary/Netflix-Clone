export interface MovieType {
  id: string;
  title: string;
  imageURL: string;
  description: string;
}

class Movie {
  constructor(
    public id: string,
    public title: string,
    public imageURL: string,
    public description: string
  ) {}
}

export default Movie;
