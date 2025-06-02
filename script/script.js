function genererChampsEmployes() {
  const container = document.getElementById("salaire-employes-container");
  const nb = parseInt(document.getElementById("nb_employes").value);
  container.innerHTML = ""; // Vide les anciens champs

  if (isNaN(nb) || nb <= 0) return;

  for (let i = 1; i <= nb; i++) {
    const label = document.createElement("label");
    label.textContent = `Salaire de l'employé ${i} (DH):`;

    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "ex: 2500";
    input.classList.add("salaire-employe");
    input.dataset.index = i;

    container.appendChild(label);
    container.appendChild(input);
  }
}

function calculerBenefice() {
  const essence = parseFloat(document.getElementById("essence").value) || 0;
  const marchandise = parseFloat(document.getElementById("marchandise").value) || 0;
  const revente = parseFloat(document.getElementById("revente").value) || 0;

  // Additionner tous les salaires saisis
  const salaires = document.querySelectorAll(".salaire-employe");
  let totalSalaire = 0;
  salaires.forEach(input => {
    const salaire = parseFloat(input.value) || 0;
    totalSalaire += salaire;
  });

  const depenses = totalSalaire + essence + marchandise;
  const beneficeMAD = revente - depenses;
  const tauxConversion = 0.091; // 1 MAD ≈ 0.091 €
  const beneficeEUR = beneficeMAD * tauxConversion;

  const resultat = document.getElementById("resultat");
  resultat.innerHTML = `
    <span>🇲🇦 Bénéfice : <strong>${beneficeMAD.toFixed(2)} DH</strong></span><br>
    <span>🇪🇺 Équivalent : <strong>${beneficeEUR.toFixed(2)} €</strong> 🐣💵</span>
  `;
}
