export const fetchData = (query: string) => {
  return actionObj(`FETCH_INITIAL`);
};

export const addPage = (category: string, page: string) => ({
  type: 'FETCH_PAGE',
  category,
  page
});

export const changePage = (
  category: string,
  page: number
): { type: string; page: number } => {
  switch (category) {
    case 'characters':
      return { type: 'CHARACTER_PAGE', page };
    case 'episodes':
      return { type: 'EPISODE_PAGE', page };
    case 'location':
      return { type: 'LOCATION_PAGE', page };
    case 'reset':
      return { type: 'RESET_ALL_PAGES', page };
    default:
      return { type: 'RESET_ALL_PAGES', page };
  }
};

const actionObj = (type: string) => ({
  type
});
