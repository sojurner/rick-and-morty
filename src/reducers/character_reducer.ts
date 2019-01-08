export const characterReducer = (
  state = {},
  action: { type: string; payload: any; page: number }
) => {
  switch (action.type) {
    case 'ADD_INITIAL_CHARACTERS':
      state[action.page] = action.payload;
      return state;
    case 'ADD_CHARACTER_SET':
      state[action.page] = action.payload;
      return state;
    default:
      return state;
  }
};
