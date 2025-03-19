export interface Book {
    book_id?: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    publisher: string;
    description: string;
    price: number;
    total_copies: number;
    available_copies?: number; // ✅ Add this to fix the issue
}
