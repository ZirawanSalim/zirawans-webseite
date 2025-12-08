export const initialSearchState = {
  query: "",
  results: [],
};

export default function searchReducer(draft, action) {
  switch (action.type) {
    case "updateSearchQuery":
      draft.query = action.payload;
      return;

    case "setResults":
      draft.results = action.payload;
      return;

    case "cancelSearch":
      draft.query = "";
      draft.results = [];
      return;

    case "resetState":
      draft.query = "";
      draft.results = [];
      return;

    default:
      return draft;
  }
}
