var x = Math.random() * 12 | 1;
var y = Math.random() * 12 | 1;
var score = parseInt(localStorage.getItem("score"));
if (!score) {
    score = 0
}
document.querySelector('.score').innerText = 'score: ' + String(score)

document.querySelector('.question').innerText = 'what is ' + String(x) + ' multiply ' + String(y) + ' ?'

function verify() {
    var input_ans = parseInt(document.querySelector("input[type ='text']").value)
    if (x * y === input_ans) {
        score += 1
        updateLocalStorage()
    }
    else {
        if (x * y != input_ans) {
            score -= 1
            if (score < 0) {
                score = 0
            }
            updateLocalStorage()


        }
    }
    document.querySelector('.score').innerText = 'score: ' + String(score)

    document.querySelector("input[type ='button']").disabled = true;
}

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}