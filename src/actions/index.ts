export const fetchData = (query: string) => {
  return actionObj(`FETCH_INITIAL`);
};

export const addPage = (category: string, page: string) => ({
  type: 'FETCH_PAGE',
  category,
  page
});

const actionObj = (type: string) => ({
  type
});
