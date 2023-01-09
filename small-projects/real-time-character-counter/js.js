input_text = document.querySelector('input[type="text"]')
input_text.addEventListener('input', function () {
    var char_num = input_text.value.length
    document.getElementById('total-num').innerText = String(char_num)
    document.getElementById('remaining-num').innerText = String(50 - char_num)

})