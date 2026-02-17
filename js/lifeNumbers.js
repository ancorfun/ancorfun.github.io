function calculateLife() {
  const age = parseInt(document.getElementById("ageInput").value);
  if (!age) return;

  const days = age * 365;
  const minutes = days * 24 * 60;
  const breaths = minutes * 16;
  const heartbeats = minutes * 70;

  document.getElementById("lifeResults").innerHTML = `
    <p>Days lived: ${days.toLocaleString()}</p>
    <p>Breaths taken: ${breaths.toLocaleString()}</p>
    <p>Heartbeats: ${heartbeats.toLocaleString()}</p>
  `;
}
