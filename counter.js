// récupération de l'élément Id
const button = document.getElementById('counter');

//Déclaration de la variable count
let count = 0;

//Ajout d'un écouteur d'événement qui permet d'incrémenter count, dès que l'utilisateur clique sur le bouton
button.addEventListener('click', () => {

    count++;
    button.textContent = `${count} clics !`; // Modification du texte du bouton

 });

