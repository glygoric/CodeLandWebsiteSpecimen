const backLink = document.getElementById('go-back');
backLink.addEventListener('click', (e) => {
    e.preventDefault();
    history.back();
});

