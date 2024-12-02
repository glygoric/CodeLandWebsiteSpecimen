document.querySelectorAll('.read-more').forEach((button, index) => {
    button.onclick = () => {
        const textElement = document.querySelectorAll('.text')[index+1];
        const computedStyle = window.getComputedStyle(textElement);
        if (computedStyle.display === "none") {
            textElement.style.display = "block";  
        } else {
            textElement.style.display = "none";   
        }
    };
});

window.addEventListener('load', function () {
    const blogContainer = document.querySelector('.blog-container'); // Selektovanje blog kontejnera
    const cards = blogContainer.querySelectorAll('.card'); // Selektovanje kartica unutar blog kontejnera
    let maxHeight = 0;

    cards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }
    });

    cards.forEach(card => {
        card.style.height = maxHeight + 'px';
    });
});

