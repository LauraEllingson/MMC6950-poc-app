const axios = require('axios');

// Function to search for books
async function searchBooks(keyword) {
    try {
        const API_URL = 'https://www.googleapis.com/books/v1/volumes';
        const response = await axios.get(API_URL, {
            params: {
                q: keyword, // Search keyword
                maxResults: 5, // Number of results to fetch
            },
        });

        const books = response.data.items;
        if (books) {
            console.log(`Books matching "${keyword}":`);
            books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.volumeInfo.title} by ${book.volumeInfo.authors?.join(', ')}`);
            });
        } else {
            console.log('No books found!');
        }
    } catch (error) {
        console.error('Error fetching data from Google Books API:', error.message);
    }
}

// Example usage
const keyword = 'JavaScript'; // Change this to any keyword
searchBooks(keyword);
