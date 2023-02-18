export type State = {
  loadingHeadlines: boolean;
  loadingPopularHeadlines: boolean;
  loadingLatestNews: boolean;
  loadingEntertainmentNews: boolean;
};

export type Action =
  | { type: 'SET_LOADING_HEADLINES'; loading: boolean }
  | { type: 'SET_LOADING_POPULARHEADLINES'; loading: boolean }
  | { type: 'SET_LOADING_LATESTNEWS'; loading: boolean }
  | { type: 'SET_LOADING_ENTERTAINMENTNEWS'; loading: boolean };

export const initialState: State = {
  loadingHeadlines: false,
  loadingPopularHeadlines: false,
  loadingLatestNews: false,
  loadingEntertainmentNews: false,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_LOADING_HEADLINES':
      return { ...state, loadingHeadlines: action.loading };
    case 'SET_LOADING_POPULARHEADLINES':
      return { ...state, loadingPopularHeadlines: action.loading };
    case 'SET_LOADING_LATESTNEWS':
      return { ...state, loadingLatestNews: action.loading };
    case 'SET_LOADING_ENTERTAINMENTNEWS':
      return { ...state, loadingEntertainmentNews: action.loading };
    default:
      return state;
  }
};
