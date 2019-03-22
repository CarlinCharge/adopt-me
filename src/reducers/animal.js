export default function animalnReducer(state = "", action) {
  if (action.type === "SET_ANIMAL") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    return "";
  } else {
    return state;
  }
}
