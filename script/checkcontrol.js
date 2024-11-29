document.getElementById('prijavi-dugme').addEventListener('click', function(event) {

    var checkboxes = document.querySelectorAll('.course-checkbox');
    var checked = false;

    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checked = true;
      }
    });
    if (!checked) {
      event.preventDefault();
      alert('Morate označiti barem jedan kurs.');
    }
  });

