export interface Product {
    id: string;
    name: string;
    price: number; // in cents
    image: string;
}

// Mock products data
const mockProducts: Product[] = [
    { id: "1", name: "Wireless Headphones", price: 7999, image: "https://picsum.photos/seed/1/200" },
    { id: "2", name: "USB-C Hub", price: 4999, image: "https://picsum.photos/seed/2/200" },
    { id: "3", name: "Mechanical Keyboard", price: 12999, image: "https://picsum.photos/seed/3/200" },
    { id: "4", name: "Mouse Pad XL", price: 2499, image: "https://picsum.photos/seed/4/200" },
    { id: "5", name: "Webcam HD", price: 8999, image: "https://picsum.photos/seed/5/200" }
];

// Simulates network delay
export async function fetchProducts(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts;
}
