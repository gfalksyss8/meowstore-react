// Get current localStorage data
export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Returns quantity of all items
export function getCartTotalQuantity() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Returns total price of all items
export function getCartTotalPrice() {
    const cart = getCart()

    return cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    )
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

// Remove item from cart logic
export function removeFromCart(id) {
    const cart = getCart()

    const item = cart.find(item => item.id === id)

    if(!item) return

    if (item.quantity > 1) {
        item.quantity -= 1
    } else {
        const index = cart.findIndex(item => item.id === id)
        cart.splice(index, 1)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"))
}