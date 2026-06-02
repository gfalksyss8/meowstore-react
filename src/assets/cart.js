// Get current localStorage data
export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Returns quantity of all items
export function getCartTotalQuantity() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Updates cart count in the navbar
function updateCartCount() {
    window.dispatchEvent(new Event("cartUpdated"))
}

// Save into localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Adding new item to cart logic
export default function addToCart(breed) {
    const cart = getCart();

    const existing = cart.find(item => item.id === breed.id);

    if (existing) {
        existing.quantity += 1;
    } 
    else 
    {
        cart.push({
            id: breed.id,
            name: breed.name,
            quantity: 1,
            price: 500,
            reference_image_id: breed.reference_image_id
        });
    }

    saveCart(cart);
    updateCartCount();
}