
// Récupérer le panier depuis le localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartItemsDiv = document.getElementById('cartItems');
let totalPriceDiv = document.getElementById('totalPrice');

// Afficher les produits dans le panier
cart.forEach(function (item, index) {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('annonce'); // Ajouter la classe 'annonce' pour chaque produit
    itemDiv.innerHTML = `
        <div class="image-tableau">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="details">
            <h1 class="titre">${item.name}</h1>
            <p class="prix">${item.price}€</p>
            <button onclick="removeFromCart(${index})">Supprimer</button>
        </div>`;
    cartItemsDiv.appendChild(itemDiv);
});

// Calculer le prix total
let totalPrice = cart.reduce((total, item) => total + item.price, 0);
totalPriceDiv.innerHTML = `<p>Total: ${totalPrice}€</p>`;

// Fonction pour supprimer un article du panier
function removeFromCart(index) {
    cart.splice(index, 1); // Supprimer l'article du tableau
    localStorage.setItem('cart', JSON.stringify(cart)); // Mettre à jour le localStorage
    location.reload(); // Recharger la page pour mettre à jour l'affichage du panier
}
