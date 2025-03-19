export interface Borrower {
    borrower_id?: number;
    user_id: number;
    book_id: number; 
    copy_id: number;
    librarian_id: number;
    status?: "Borrowed" | "Returned";
    borrow_date?: string;
    return_date?: string;
}
