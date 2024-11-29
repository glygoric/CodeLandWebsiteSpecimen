// Selektovanje svih radio dugmadi sa istim imenom
var radios = document.querySelectorAll('input[type="radio"][name="cooperation-category"]');

// Dodavanje event listener-a na svako radio dugme
radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        var otherInput = document.getElementById('other-input-text');
        if (document.getElementById('other-radio').checked) {
            otherInput.style.display = 'block';  // Prikazivanje inputa kada je 'other-radio' označen
        } else {
            otherInput.style.display = 'none';   // Sakrivanje inputa kad bilo koji drugi radio dugme bude označeno
        }
    });
});
