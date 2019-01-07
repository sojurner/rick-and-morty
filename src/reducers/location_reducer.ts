let initialState: any[] = [];

export const locationReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_LOCATIONS':
      state.push(action.payload);
      return initialState;
    default:
      return state;
  }
};
