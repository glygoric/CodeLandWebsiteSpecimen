document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const centerImg = document.getElementById("center-img");
    const leftImg = document.getElementById("left-img");
    const rightImg = document.getElementById("right-img");
    const activePartnerText = document.getElementById("active-partner-text");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 1;

    function updateSlider() {
        centerImg.src = `partners/${currentIndex}.webp`;
        leftImg.src = `partners/${(currentIndex - 1 < 1 ? 8 : currentIndex - 1)}.webp`;
        rightImg.src = `partners/${(currentIndex + 1 > 8 ? 1 : currentIndex + 1)}.webp`;

        switch(currentIndex){
            case 1: activePartnerText.innerHTML="Delta Planet"; break;
            case 2: activePartnerText.innerHTML="Invenit Solutions"; break;
            case 3: activePartnerText.innerHTML="Lenka Keleman Studio"; break;
            case 4: activePartnerText.innerHTML="Manja"; break;
            case 5: activePartnerText.innerHTML="Prirodno Matematički Fakultet Banja Luka"; break;
            case 6: activePartnerText.innerHTML="Vrtić Sreća"; break;
            case 7: activePartnerText.innerHTML="Fondacija - Za Porodicu"; break;
            case 8: activePartnerText.innerHTML="Vrtić Zvjezdica"; break;
        }

        dots.forEach((dot, index) => {
            dot.style.backgroundColor = (index + 1 === currentIndex) ? "#6610f2" : "#fafafa";
        });
    }

    leftArrow.addEventListener("click", function () {
        currentIndex = currentIndex - 1 < 1 ? 8 : currentIndex - 1;
        updateSlider();
    });

    rightArrow.addEventListener("click", function () {
        currentIndex = currentIndex + 1 > 8 ? 1 : currentIndex + 1;
        updateSlider();
    });
 
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            currentIndex = index + 1;  
            updateSlider();
        });
    });

    updateSlider();
});



