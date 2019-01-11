import * as scrape from './scrapers';

export const fetchData = async (str: string) => {
  let url: string;
  switch (str) {
    case 'characters':
      url = 'https://rickandmortyapi.com/api/character/';
      return scrape.characters(await (await fetch(url)).json());
    case 'episodes':
      url = 'https://rickandmortyapi.com/api/episode/';
      return scrape.episodes(await (await fetch(url)).json());
    case 'locations':
      url = 'https://rickandmortyapi.com/api/location/';
      return scrape.locations(await (await fetch(url)).json());
    default:
      return;
  }
};

export const fetchNextPage = async (str: string, page: number) => {
  const endpoint: string = str.substring(0, str.length - 1);
  const url: string = `https://rickandmortyapi.com/api/${endpoint}/?page=${page}`;
  switch (str) {
    case 'characters':
      return scrape.characters(await (await fetch(url)).json());
    case 'locations':
      return scrape.locations(await (await fetch(url)).json());
    case 'episodes':
      return scrape.episodes(await (await fetch(url)).json());
    default:
      return;
  }
};
