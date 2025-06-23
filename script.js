// import-menu.js

// Sélectionne l'élément où insérer le menu
const header = document.getElementById('header');

// Charge le fichier menu.html
fetch('/html/header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }
    return response.text();
  })
  .then(data => {
    header.innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur :', error);
  });