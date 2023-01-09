const DEFAULT_STATE = {
  face: "┐( ˘_˘ )┌",
};

function moodReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "MOOD_HAPPY":
      return { ...state, face: action.payload };
    case "MOOD_CONFUSED":
      return { ...state, face: action.payload };
    case "MOOD_CRINGE":
      return { ...state, face: action.payload };
    case "MOOD_LAUGHING":
      return { ...state, face: action.payload };
  }
}
