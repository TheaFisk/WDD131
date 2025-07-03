document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe-list');
    
    recipes.forEach(recipe => {
        const title = recipe.querySelector('h2').textContent.toLowerCase();
        const description = recipe.querySelector('p').textContent.toLowerCase();
        
        // If the search term matches either the title or description, show the recipe
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
});
