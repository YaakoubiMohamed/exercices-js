// Déclaration d'une variable globale pour stocker l'entrée actuelle de la calculatrice
let currentInput = '';

// Fonction pour ajouter un chiffre à l'entrée actuelle et mettre à jour le résultat
function appendNumber(number) {
  currentInput += number;
  updateResult();
}

// Fonction pour effectuer une opération en ajoutant l'opérateur à l'entrée actuelle et mettre à jour le résultat
function performOperation(operator) {
  currentInput += ` ${operator} `;
  updateResult();
}

// Fonction pour effacer complètement l'entrée actuelle et mettre à jour le résultat
function clearInput() {
  currentInput = '';
  updateResult();
}

// Fonction pour calculer le résultat en utilisant la fonction eval(), gérer les erreurs, puis mettre à jour le résultat
function calculateResult() {
  try {
    // Utilisation de eval() pour évaluer l'expression mathématique
    const result = eval(currentInput);
    // Conversion du résultat en chaîne de caractères et mise à jour du résultat
    currentInput = result.toString();
    updateResult();
  } catch (error) {
    // En cas d'erreur (par exemple, division par zéro), affichage d'une erreur et mise à jour du résultat
    currentInput = 'Erreur';
    updateResult();
  }
}

// Fonction pour mettre à jour l'élément d'affichage du résultat dans le document HTML
function updateResult() {
  document.getElementById('result').value = currentInput;
}