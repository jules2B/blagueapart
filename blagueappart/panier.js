
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




/*Intégration de la bibliothèque Apple Pay (exemple) */
<script src="https://applepay.com/apple-pay.js"></script>
  // Configuration d'Apple Pay
  var applePayConfig = {
    merchantId: 'your-merchant-id',
    currencyCode: 'USD',
    countryCode: 'US'
  };

  // Création du bouton Apple Pay
  var applePayButton = ApplePay.createButton(applePayConfig);
  document.getElementById('applePayButton').appendChild(applePayButton);

  // Gestionnaire d'événement pour le formulaire de paiement
  document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Traitement du paiement avec les informations du formulaire
    var cardNumber = document.getElementById('cardNumber').value;
    var expMonth = document.getElementById('expMonth').value;
    var expYear = document.getElementById('expYear').value;
    var cvv = document.getElementById('cvv').value;

    // Envoyer les informations de paiement au serveur pour traitement
    // Implémentez cette partie en fonction de votre backend
    console.log('Numéro de Carte:', cardNumber);
    console.log('Mois d\'Expiration:', expMonth);
    console.log('Année d\'Expiration:', expYear);
    console.log('CVV:', cvv);

    // Réinitialiser le formulaire après le paiement réussi
    document.getElementById('paymentForm').reset();
  });
