let initialState: any[] = [];

export const episodeReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_EPISODES':
      state.push(action.payload);
      return initialState;
    default:
      return state;
  }
};
