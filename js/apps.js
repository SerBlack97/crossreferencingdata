const typeChart = {
  fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
  water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
  electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
  grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

//  reference HTML
const attackSelect = document.getElementById("attackType");
const defenseSelect = document.getElementById("defenseType");
const resultsDiv = document.querySelector(".results");

//  effectivness calculator
function calcEffective() {
  const attack = attackSelect.value;
  const defend = defenseSelect.value;
  
  const attackData = typeChart[attack];
  let text = "";

//   determine attack and defense effectiveness
  if (attackData.strongAgainst.includes(defend)) {
    text = "Super effective! (2x)";
  } else if (attackData.weakAgainst.includes(defend)) {
    text = "Not very effective... (0.5x)";
  } else {
    text = "Effective (1x)";
  }

  //    calculation results
  resultsDiv.innerHTML = `<h2>Effectiveness: <strong>${text}</strong></h2>`;
};

//  listen for attack and defense selections
attackSelect.addEventListener("change", calcEffective);
defenseSelect.addEventListener("change", calcEffective);

calcEffective();