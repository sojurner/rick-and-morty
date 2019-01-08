let initialState = {};

export const episodeReducer = (
  state = initialState,
  action: { type: string; payload: any; page: number }
) => {
  switch (action.type) {
    case 'ADD_INITIAL_EPISODES':
      state[action.page] = action.payload;
      return state;
    case 'ADD_EPISODE_SET':
      state[action.page] = action.payload;
      return state;
    default:
      return state;
  }
};
