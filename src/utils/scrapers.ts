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
    previous: data.info.prev || null,
    next: data.info.next,
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
    previous: data.info.prev || null,
    next: data.info.next || null,
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
    previous: data.info.prev,
    next: data.info.next,
    locations: locationDetails
  };
};
