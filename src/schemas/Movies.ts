import { ObjectID, Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from 'typeorm';

interface IGenres {
  id: number;
  name: string;
}

interface IProductionCompanies {
  id: number;
  name: string;
  logoPath: string | null;
  originCountry: string;
}

interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguages {
  iso_639_1: string;
  name: string;
}

@Entity('Movies')
class Movies {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    unique: true,
  })
  movieId: number;

  @Column()
  adult: boolean;

  @Column()
  backdropPath: string | null;

  @Column()
  belongsToCollection: null | Record<string, unknown>;

  @Column()
  budget: number;

  @Column()
  genres: IGenres[];

  @Column()
  homepage: string | null;

  @Column({
    length: 9,
  })
  imdbId: string | null;

  @Column()
  originalLanguage: string;

  @Column()
  originalTitle: string;

  @Column()
  overview: string | null;

  @Column()
  popularity: number;

  @Column()
  posterPath: string | null;

  @Column()
  productionCompanies: IProductionCompanies[];

  @Column()
  productionCountries: IProductionCountries[];

  @Column()
  releaseDate: Date;

  @Column()
  revenue: number;

  @Column()
  runtime: number | null;

  @Column()
  spokenLanguage: ISpokenLanguages[];

  @Column()
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';

  @Column()
  tagline: string | null;

  @Column()
  title: string;

  @Column()
  video: boolean;

  @Column()
  voteAverage: number;

  @Column()
  voteCount: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;
}

export default Movies;