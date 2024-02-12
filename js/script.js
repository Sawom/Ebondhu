document.addEventListener('DOMContentLoaded', function () {
    let mobileInput = document.getElementById('mobileInput');
    let emailInput = document.getElementById('emailInput');
    let mobileRadio = document.getElementById('mobileRadio');
    let emailRadio = document.getElementById('emailRadio');

    mobileRadio.addEventListener('change', function () {
      mobileInput.style.display = 'block';
      emailInput.style.display = 'none';
    });

    emailRadio.addEventListener('change', function () {
      mobileInput.style.display = 'none';
      emailInput.style.display = 'block';
    });
  });