
function calculerBenefice() {
  const nbEmployes = parseFloat(document.getElementById("nb_employes").value) || 0;
  const salaire = parseFloat(document.getElementById("salaire").value) || 0;
  const essence = parseFloat(document.getElementById("essence").value) || 0;
  const marchandise = parseFloat(document.getElementById("marchandise").value) || 0;
  const revente = parseFloat(document.getElementById("revente").value) || 0;

  const totalSalaire = nbEmployes * salaire;
  const depenses = totalSalaire + essence + marchandise;
  const beneficeMAD = revente - depenses;

  const tauxConversion = 0.091; // 1 MAD ≈ 0.091 EUR (à adapter si besoin)
  const beneficeEUR = beneficeMAD * tauxConversion;

  const resultat = document.getElementById("resultat");
  resultat.innerHTML = `
    <span>🇲🇦 Bénéfice : <strong>${beneficeMAD.toFixed(2)} DH</strong></span><br>
    <span>🇪🇺 Équivalent : <strong>${beneficeEUR.toFixed(2)} €</strong> 🐣💵</span>
  `;
}
