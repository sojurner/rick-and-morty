let initialState: any[] = [];

export const characterReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_CHARACTER_SET':
      state.push(action.payload);
      return initialState;
    default:
      return state;
  }
};
