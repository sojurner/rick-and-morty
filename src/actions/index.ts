export const fetchData = (query: string) => {
  switch (query) {
    case 'characters':
      return actionObj(`FETCH_${query.toUpperCase()}`);
    default:
      return actionObj(`FETCH_CHARACTERS`);
  }
};

const actionObj = (type: string) => ({
  type
});
