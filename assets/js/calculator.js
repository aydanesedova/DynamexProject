
// Calculator cekiye gore hesablanir
document.addEventListener('DOMContentLoaded', function () {
    var calculateBtn = document.querySelector('.calculate');

    calculateBtn.addEventListener('click', function () {
        var widthInput = document.getElementById('width');
        var lengthInput = document.getElementById('length');
        var heightInput = document.getElementById('height');
        var weightInput = document.getElementById('weight');

        var width = parseFloat(widthInput.value);
        var length = parseFloat(lengthInput.value);
        var height = parseFloat(heightInput.value);
        var weight = parseFloat(weightInput.value);

        var volume = width * length * height;

        var shippingCost;

        if (weight <= 0 || volume <= 0) {
            alert("Lütfen geçerli bir ağırlık ve hacim girin.");
            return;
        }

        if (weight <= 1) {
            shippingCost = 5;
        } else {
            shippingCost = 5 + (weight - 1) * 4; 
        }

        document.getElementById('result').textContent =  shippingCost.toFixed(2);
    });
});
