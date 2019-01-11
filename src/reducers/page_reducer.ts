type initial = {
  characters: number;
  episodes: number;
  locations: number;
};

let initialState: initial = {
  characters: 1,
  episodes: 1,
  locations: 1
};

export const pageReducer = (
  state = initialState,
  action: { type: string; page: number }
) => {
  switch (action.type) {
    case 'CHARACTER_PAGE':
      state.characters = action.page;
      return state;

    case 'EPISODE_PAGE':
      state.episodes = action.page;
      return state;

    case 'LOCATION_PAGE':
      state.locations = action.page;
      return state;

    case 'RESET_ALL_PAGES':
      return {
        characters: 1,
        episodes: 1,
        locations: 1
      };

    default:
      return state;
  }
};

export const pageCountReducer = (
  state = {},
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case 'SET_CHARACTER_PAGECOUNT':
      state['characters'] = action.payload;
      return state;

    case 'SET_EPISODE_PAGECOUNT':
      state['episodes'] = action.payload;
      return state;

    case 'SET_LOCATION_PAGECOUNT':
      state['location'] = action.payload;
      return state;
    default:
      return state;
  }
};
