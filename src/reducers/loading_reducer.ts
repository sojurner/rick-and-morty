export const loadingReducer = (
  state: boolean = false,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.payload;
    case 'HAS_LOADED':
      return action.payload;
    default:
      return state;
  }
};
