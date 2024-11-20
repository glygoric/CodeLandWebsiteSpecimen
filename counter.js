function counter(id, max, time) {
    const elementToCount = document.getElementById(id);
    let startNum = 0;
    const increment = max / (time / 10);

    function updateCounter() {
        startNum += increment;
        if (startNum >= max) {
            elementToCount.textContent = max;
        } else {
            elementToCount.innerHTML = Math.floor(startNum);
            setTimeout(updateCounter, 10);
        }
    }

    updateCounter();
}

const numbersContainer = document.querySelector('.numbers-container');
let hasCounted = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
            hasCounted = true; 
            setTimeout(() => {
                counter("first", 500, 2000);
                counter("second", 15, 1000);
                counter("third", 64, 2000);
                counter("fourth", 4, 1500);
                counter("fifth", 90, 1200);
            }, 100); 
        }
    });
}, { threshold: 0.5 });

observer.observe(numbersContainer);

