
function addToCart(productName, price, imageSrc) {
    // Récupérer le panier depuis le localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Ajouter le produit au panier avec le nom, le prix et le chemin d'accès à l'image
    cart.push({ name: productName, price: price, image: imageSrc });

    // Mettre à jour le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
