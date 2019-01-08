export const characters = data => {
  const characterDetails = data.results.map(result => {
    const { id, name, origin, image, species, episode } = result;
    return {
      id,
      name,
      origin,
      image,
      species,
      episode
    };
  });

  return {
    pageCount: data.info.pages,
    characters: characterDetails
  };
};

export const episodes = data => {
  const episodeDetails = data.results.map(item => {
    const { id, name, air_date, episode, characters } = item;
    return {
      id,
      name,
      air_date,
      episode,
      characters
    };
  });
  return {
    pageCount: data.info.pages,
    episodes: episodeDetails
  };
};

export const locations = data => {
  const locationDetails = data.results.map(item => {
    const { id, name, type, dimension, residents } = item;
    return {
      id,
      name,
      type,
      dimension,
      residents
    };
  });
  return {
    pageCount: data.info.pages,
    locations: locationDetails
  };
};
