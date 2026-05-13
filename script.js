document.getElementById('mainSearch').addEventListener('keyup', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    let cards = document.querySelectorAll('.category-card');

    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        let description = card.querySelector('p').innerText.toLowerCase();
        
        if(title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Adding a click event for future expansion
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        alert("Opening directory for: " + card.querySelector('h3').innerText);
        // In the next step, we will link these to specific pages
    });
});
