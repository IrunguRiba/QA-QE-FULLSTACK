const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const allowedOrigins = ["http://localhost:8080", "http://localhost:5173"]; 

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));

// MIDDLEWARE FOR JSON
app.use(express.json());

const filePath = path.join(__dirname, 'server.json');
let books = JSON.parse(fs.readFileSync(filePath, 'utf8')).books;

// tHIS MIDDLEWARE HANDLES ERRORS
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
};

app.get('/api/books', (req, res, next) => {
    try {
        let { genre, year, pages, search, sort, page, limit } = req.query;
        let filteredBooks = [...books];
        
        if (genre) {
            filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
        }
        if (year) {
            filteredBooks = filteredBooks.filter(book => book.year == year);
        }
        if (pages) {
            filteredBooks = filteredBooks.filter(book => book.pages >= parseInt(pages));
        }
        if (search) {
            const searchLower = search.toLowerCase();
            filteredBooks = filteredBooks.filter(book =>
                book.title.toLowerCase().includes(searchLower) ||
                book.author.toLowerCase().includes(searchLower)
            );
        }
        if (sort) {
            const sortOptions = {
                "year_asc": (a, b) => a.year - b.year,
                "year_desc": (a, b) => b.year - a.year,
                "pages": (a, b) => a.pages - b.pages,
                "price_asc": (a, b) => a.price - b.price,
                "price_desc": (a, b) => b.price - a.price,
                "title_asc": (a, b) => a.title.localeCompare(b.title),
                "title_desc": (a, b) => b.title.localeCompare(a.title)
            };
            if (sortOptions[sort]) {
                filteredBooks.sort(sortOptions[sort]);
            }
        }

        if (!page || !limit) {
            return res.json({ books: filteredBooks });
        }

     //FILTER BY PAGES
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        const totalBooks = filteredBooks.length;
        const totalPages = Math.ceil(totalBooks / limit);
        const startIndex = (page - 1) * limit;
        const paginatedBooks = filteredBooks.slice(startIndex, startIndex + limit);

        res.json({
            totalBooks,
            totalPages,
            page,
            limit,
            books: paginatedBooks,
        });
    } catch (error) {
        next(error);
    }
});
app.use(errorHandler);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
SQL 101 on Backend.....

TO POST (tO Add a new book)
app.post('/api/books', async (req, res, next) => {
    try {
        const { title, author, genre, year, pages, price } = req.body;
        const result = await pool.query(
            'INSERT INTO books (title, author, genre, year, pages, price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, author, genre, year, pages, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
});

TO PUT IS TO Update a book completely
app.put('/api/books/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, author, genre, year, pages, price } = req.body;
        const result = await pool.query(
            'UPDATE books SET title = $1, author = $2, genre = $3, year = $4, pages = $5, price = $6 WHERE id = $7 RETURNING *',
            [title, author, genre, year, pages, price, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
});

tO PATCH IS Update specific fields of a book
app.patch('/api/books/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const fields = Object.keys(updates).map((key, i) => `${key} = $${i + 1}`).join(', ');
        const values = Object.values(updates);
        values.push(id);
        const result = await pool.query(
            `UPDATE books SET ${fields} WHERE id = $${values.length} RETURNING *`,
            values
        );
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
});

TO DELETE IS TO Remove a book
app.delete('/api/books/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM books WHERE id = $1', [id]);
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        next(error);
    }
});



*/