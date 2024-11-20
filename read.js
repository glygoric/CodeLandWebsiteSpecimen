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
