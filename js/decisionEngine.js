function makeDecision(type) {
  let result = "";

  if (type === "risk") {
    result = "You built a startup and became wealthy.";
  } else {
    result = "You lived a peaceful and stable life.";
  }

  document.getElementById("decisionResult").innerText = result;
}
