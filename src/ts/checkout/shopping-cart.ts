// Typ för en produkt
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Typ för varukorgen
interface ShoppingCart {
  items: Product[];
  total: number;
}

// Funktion för att lägga till en produkt i varukorgen
function addToCart(cart: ShoppingCart, product: Product): ShoppingCart {
  const existingItem = cart.items.find(item => item.id === product.id);

  if (existingItem) {
    // Om produkten redan finns i varukorgen, öka bara kvantiteten
    existingItem.quantity += 1;
  } else {
    // Om produkten inte finns, lägg till den i varukorgen
    cart.items.push({ ...product, quantity: 1 });
  }

  // Uppdatera den totala kostnaden
  cart.total = calculateTotal(cart.items);

  return cart;
}

// Funktion för att beräkna den totala kostnaden baserat på varukorgens innehåll
function calculateTotal(items: Product[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Exempel på hur du kan använda funktionen för att lägga till en produkt i varukorgen
const initialCart: ShoppingCart = { items: [], total: 0 };

const exampleProduct: Product = {
  id: '1',
  name: 'Example Product',
  price: 19.99,
  quantity: 1,
};

const updatedCart = addToCart(initialCart, exampleProduct);

console.log(updatedCart);
