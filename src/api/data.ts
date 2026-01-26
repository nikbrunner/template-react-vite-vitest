export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user" | "guest";
    status: "active" | "inactive";
}

// Mock users data for the data table
const mockUsers: User[] = [
    { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "admin", status: "active" },
    { id: "2", name: "Bob Smith", email: "bob@example.com", role: "user", status: "active" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com", role: "user", status: "inactive" },
    { id: "4", name: "Diana Prince", email: "diana@example.com", role: "admin", status: "active" },
    { id: "5", name: "Edward Norton", email: "edward@example.com", role: "guest", status: "active" },
    { id: "6", name: "Fiona Apple", email: "fiona@example.com", role: "user", status: "inactive" },
    { id: "7", name: "George Lucas", email: "george@example.com", role: "user", status: "active" },
    { id: "8", name: "Helen Troy", email: "helen@example.com", role: "guest", status: "active" },
    { id: "9", name: "Ivan Petrov", email: "ivan@example.com", role: "user", status: "inactive" },
    { id: "10", name: "Julia Roberts", email: "julia@example.com", role: "admin", status: "active" },
    { id: "11", name: "Kevin Hart", email: "kevin@example.com", role: "user", status: "active" },
    { id: "12", name: "Laura Palmer", email: "laura@example.com", role: "user", status: "inactive" },
    { id: "13", name: "Mike Tyson", email: "mike@example.com", role: "guest", status: "active" },
    { id: "14", name: "Nancy Drew", email: "nancy@example.com", role: "user", status: "active" },
    { id: "15", name: "Oscar Wilde", email: "oscar@example.com", role: "user", status: "inactive" },
    { id: "16", name: "Paula Abdul", email: "paula@example.com", role: "admin", status: "active" },
    { id: "17", name: "Quinn Hughes", email: "quinn@example.com", role: "user", status: "active" },
    { id: "18", name: "Rachel Green", email: "rachel@example.com", role: "guest", status: "inactive" },
    { id: "19", name: "Steve Rogers", email: "steve@example.com", role: "user", status: "active" },
    { id: "20", name: "Tina Turner", email: "tina@example.com", role: "user", status: "active" },
    { id: "21", name: "Uma Thurman", email: "uma@example.com", role: "admin", status: "inactive" },
    { id: "22", name: "Victor Hugo", email: "victor@example.com", role: "user", status: "active" },
    { id: "23", name: "Wendy Darling", email: "wendy@example.com", role: "guest", status: "active" },
    { id: "24", name: "Xavier Charles", email: "xavier@example.com", role: "user", status: "inactive" },
    { id: "25", name: "Yolanda Adams", email: "yolanda@example.com", role: "user", status: "active" }
];

// Simulates network delay
export async function fetchData(): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUsers;
}
