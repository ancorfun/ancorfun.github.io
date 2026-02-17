function simulateCareer() {
  const position = document.getElementById("position").value;
  const goals = Math.floor(Math.random() * 300);
  const trophies = Math.floor(Math.random() * 20);

  document.getElementById("careerResult").innerHTML = `
    <p>Position: ${position}</p>
    <p>Goals scored: ${goals}</p>
    <p>Trophies won: ${trophies}</p>
    <p>Retired as a legend.</p>
  `;
}
