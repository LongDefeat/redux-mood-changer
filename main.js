// set up redux store variable
const store = Redux.createStore(moodReducer);

// subscribe renderFace to face changes
const face = document.getElementById("face");

// listners for buttons
document.getElementById("happy").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_HAPPY", payload: "٩(◕‿◕｡)۶" });
});

document.getElementById("cringe").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_CRINGE", payload: "( >︹<)" });
});

document.getElementById("confused").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_CONFUSED", payload: "ↂ_ↂ" });
});

document.getElementById("laughing").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_LAUGHING", payload: "(^○^)" });
});

function renderFace() {
  face.innerHTML = store.getState().face;
}

renderFace();
store.subscribe(renderFace);
