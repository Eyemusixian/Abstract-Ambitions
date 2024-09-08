document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Your Store!');
});
app.get('/search', (req, res) => {
    const searchTerm = req.query.search;
    // Query your database for products matching the search term
    // Then render the results page with the found products
});
