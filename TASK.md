# Shopping Cart

**Time Limit:** 60 minutes
**Focus Areas:** State management, calculations with reduce, async data

## Core Requirements

Build a shopping cart with products fetched from an API.

### Functional (Must Have)

- [ ] Fetch products from API on mount
- [ ] Display product list with name and price
- [ ] "Add to Cart" button on each product
- [ ] Cart shows added items with quantities
- [ ] Increment/decrement quantity in cart
- [ ] Remove item from cart (or decrement to 0)
- [ ] Calculate and display subtotal
- [ ] Show empty cart state

### Data Structures

```tsx
interface Product {
    id: string;
    name: string;
    price: number; // in cents
    image: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}
```

### Visual (Must Have)

- Product list with prices
- Cart section showing items and quantities
- Quantity controls (+/- buttons)
- Subtotal displayed
- Prices formatted as currency (e.g., "$19.99")

## Core Tests (Must Have)

Create `ShoppingCart.test.tsx`:

- [ ] Shows loading state while fetching products
- [ ] Renders products after fetch
- [ ] Can add product to cart
- [ ] Can increment/decrement quantity
- [ ] Calculates subtotal correctly
- [ ] Shows empty cart message when empty

## Optional (If Time Permits)

### Features

- [ ] Display product images
- [ ] Tax calculation (8% of subtotal)
- [ ] Total (subtotal + tax)
- [ ] Visual feedback when adding to cart
- [ ] Product grid layout

### Extra Tests

- [ ] Can remove item from cart
- [ ] Tax and total calculate correctly

### Bonus Challenges

1. Add quantity input (not just +/- buttons)
2. Persist cart to localStorage
3. Add "Save for later" functionality
4. Implement promo code discount

## File Structure

```
src/
├── components/
│   └── ShoppingCart/
│       ├── ShoppingCart.tsx
│       ├── ShoppingCart.module.css
│       ├── ShoppingCart.test.tsx
│       ├── ProductList.tsx (optional)
│       └── Cart.tsx (optional)
├── api/
│   └── products.ts (provided in branch)
```

## Evaluation Criteria

| Criterion     | Weight | What We're Looking For                   |
| ------------- | ------ | ---------------------------------------- |
| Functionality | 30%    | Cart operations and calculations correct |
| Test Coverage | 30%    | Tests cover interactions                 |
| Code Quality  | 20%    | Clean state management                   |
| CSS/Styling   | 20%    | Usable shopping experience               |

## Hints (Reveal if Stuck)

<details>
<summary>Hint 1: Cart state structure</summary>

```tsx
const [cartItems, setCartItems] = useState<CartItem[]>([]);

const addToCart = (product: Product) => {
    setCartItems(prev => {
        const existing = prev.find(item => item.product.id === product.id);
        if (existing) {
            return prev.map(item => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        }
        return [...prev, { product, quantity: 1 }];
    });
};
```

</details>

<details>
<summary>Hint 2: Calculate subtotal with reduce</summary>

```tsx
const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}, [cartItems]);
```

</details>

<details>
<summary>Hint 3: Format currency</summary>

```tsx
const formatPrice = (cents: number): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(cents / 100);
};

// Usage: formatPrice(1999) → "$19.99"
```

</details>

<details>
<summary>Hint 4: Testing cart interactions</summary>

```tsx
test("can add product to cart", async () => {
    const user = userEvent.setup();
    render(
        <QueryClientProvider client={createTestQueryClient()}>
            <ShoppingCart />
        </QueryClientProvider>
    );

    // Wait for products to load
    const addButton = await screen.findByRole("button", { name: /add to cart/i });
    await user.click(addButton);

    // Verify item appears in cart
    expect(screen.getByText(/1/)).toBeInTheDocument(); // quantity
});
```

</details>

<details>
<summary>Hint 5: Quantity controls</summary>

```tsx
const updateQuantity = (productId: string, delta: number) => {
    setCartItems(
        prev =>
            prev
                .map(item =>
                    item.product.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
                )
                .filter(item => item.quantity > 0) // Remove if quantity is 0
    );
};
```

</details>
