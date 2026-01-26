import type { Product } from "../../api/products";

import styles from "./ShoppingCart.module.css";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface ShoppingCartProps {
    // TODO: Define props if needed
}

export function ShoppingCart(props: ShoppingCartProps) {
    // TODO: Implement shopping cart with TanStack Query
    // - Fetch products from API on mount
    // - Display product list with name and price
    // - "Add to Cart" button on each product
    // - Cart shows added items with quantities
    // - Increment/decrement quantity in cart
    // - Calculate and display subtotal
    // - Show empty cart state

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <h2>Products</h2>
                {/* TODO: Add loading state */}
                {/* TODO: Add error state */}
                {/* TODO: Add product list */}
            </div>

            <div className={styles.cart}>
                <h2>Cart</h2>
                {/* TODO: Add cart items */}
                {/* TODO: Add subtotal */}
                {/* TODO: Add empty cart message */}
            </div>
        </div>
    );
}
