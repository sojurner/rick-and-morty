export const fetchData = (query: string) => {
  switch (query) {
    case 'characters':
      return actionObj(`FETCH_${query.toUpperCase()}`);
    default:
      return actionObj(`FETCH_CHARACTERS`);
  }
};

export const setNextPage = () => ({
  type: 'NEXT_PAGE'
});

export const setPreviousPage = () => ({
  type: 'PREV_PAGE'
});

const actionObj = (type: string) => ({
  type
});
