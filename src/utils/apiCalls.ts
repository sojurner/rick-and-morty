import * as scrape from './scrapers';

export const fetchData = async str => {
  let url: string;
  let result: any;
  switch (str) {
    case 'characters':
      url = 'https://rickandmortyapi.com/api/character/';
      result = scrape.characters(await (await fetch(url)).json());
      break;
    case 'episodes':
      url = 'https://rickandmortyapi.com/api/episode/';
      result = scrape.episodes(await (await fetch(url)).json());
      break;
    case 'locations':
      url = 'https://rickandmortyapi.com/api/location/';
      result = scrape.locations(await (await fetch(url)).json());
      break;
    default:
      return;
  }
  return result;
};

export const fetchNextPage = async (str: string, page: number) => {
  const endpoint: string = str.substring(0, str.length - 1);
  const url: string = `https://rickandmortyapi.com/api/${endpoint}/?page=${page}`;
  let result: object;
  switch (str) {
    case 'characters':
      result = scrape.characters(await (await fetch(url)).json());
      break;
    case 'locations':
      result = scrape.locations(await (await fetch(url)).json());
      break;
    case 'episodes':
      result = scrape.episodes(await (await fetch(url)).json());
      break;
    default:
      return;
  }
  return result;
};
