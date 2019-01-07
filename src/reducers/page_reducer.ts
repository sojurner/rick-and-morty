export const pageReducer = (state: number = 0, action: { type: string }) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return (state += 1);
    case 'PREV_PAGE':
      return (state -= 1);
    default:
      return state;
  }
};
