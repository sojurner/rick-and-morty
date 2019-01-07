import * as scrape from './scrapers';

export const fetchCharacters = async () => {
  let url: string = 'https://rickandmortyapi.com/api/character/';

  const result: object = await (await fetch(url)).json();
  return scrape.characters(result);
};
