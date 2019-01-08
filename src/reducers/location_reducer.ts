let initialState = {};

export const locationReducer = (
  state = initialState,
  action: { type: string; payload: any; page: number }
) => {
  switch (action.type) {
    case 'ADD_INITIAL_LOCATIONS':
      state[action.page] = action.payload;
      return state;
    case 'ADD_LOCATION_SET':
      state[action.page] = action.payload;
      return state;
    default:
      return state;
  }
};
