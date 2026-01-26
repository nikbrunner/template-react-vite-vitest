export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

// Mock users data
const mockUsers: User[] = [
    { id: "1", name: "John Doe", email: "john@example.com", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: "3", name: "Bob Wilson", email: "bob@example.com", avatar: "https://i.pravatar.cc/150?u=3" },
    { id: "4", name: "Alice Brown", email: "alice@example.com", avatar: "https://i.pravatar.cc/150?u=4" },
    { id: "5", name: "Charlie Davis", email: "charlie@example.com", avatar: "https://i.pravatar.cc/150?u=5" }
];

// Simulates network delay
export async function fetchUsers(): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUsers;
}
