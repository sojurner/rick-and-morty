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
