export type Character = {
  name: string;
  origin: Location;
  image: string;
  episode: Episode;
}

type Location = {
  name: string;
  type: string;
  dimension: string
}

type Episode = {
  name: string;
  air_date: string;
  episode: string;
}

export type Characters = {
  characters: {  
    info: {
      count: number;
    },
    results: Character[];
  }
}

export type Filter = {
  name: string;
}
