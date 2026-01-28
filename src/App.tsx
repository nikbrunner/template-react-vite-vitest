import styles from "./App.module.css";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

export function App() {
    return (
        <main className={styles.app}>
            <h1>Shopping Cart</h1>
            <ShoppingCart />
        </main>
    );
}
