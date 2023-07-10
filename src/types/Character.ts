export type Character = {
  name: string;
  origin: Location;
  image: string;
  episode: Episode[];
}

export type Location = {
  name: string;
  type: string;
  dimension: string
}

export type Episode = {
  name: string;
  air_date: string;
  episode: string;
}

export type Characters = {
  [T: string]: {  
    info: {
      count: number;
    },
    results: Character[];
  }
}

export type Filter = {
  name: string;
}
