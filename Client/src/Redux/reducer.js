const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => {
          return fav.id !== action.payload;
        }),
      };
    case "FILTER":
      const allCharactersfilter = state.allCharactersFav.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersfilter,
      };
    case "ORDER":
      const allCharactersFavcopy = action.payload === "A"
      ? state.allCharactersFav.sort((a, b) => a.id - b.id)
      : state.allCharactersFav.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites:allCharactersFavcopy
      }
    default:
      return { ...state };
  }
};

export default reducer;
