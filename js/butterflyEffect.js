function butterflyChoice(choice) {
  let result = "";

  if (choice === "help") {
    result = "10 years later, that person helped you build a company.";
  } else {
    result = "Years later, you wonder what could have been.";
  }

  document.getElementById("butterflyResult").innerText = result;
}
