document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var num1 = parseFloat(document.getElementById('Slot1').value);
    var num2 = parseFloat(document.getElementById('Slot2').value);

    var sum = num1 + num2;
    
    alert('A soma é: ' + sum);
});