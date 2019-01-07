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
