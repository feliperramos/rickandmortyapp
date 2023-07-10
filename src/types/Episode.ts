import type { Location } from "./Character";

export type Episodes = {
  [T:string]: {  
    info: {
      count: number;
    },
    results: Episode[];
  }
}

export type Episode = {
  name: string;
  air_date: string;
  episode: string;
  characters: Characters[];
}

type Characters = {
  name: string;
  origin: Location;
  image: string;
}
