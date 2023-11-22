var inputs = document.getElementsByClassName("input");
var spans = document.getElementsByClassName("advice");
 
const urlParams = new URLSearchParams(window.location.search);
    
const name = urlParams.get('name');
const age = urlParams.get('age');
const subject = urlParams.get('subject');


for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        if(this.value > 25 || this.value < 0) {
            this.style.backgroundColor = 'red';
            spans[i].innerHTML = "Type a number beetwen 0 and 25";
        } else {
            this.style.backgroundColor = '#ddd';
            spans[i].innerHTML = "";
        }
    })
}

function onClick() {
    var sum = 0;
    let countErrors = 0;
    for (const input of inputs) {
        if(input.value > 25) {
            countErrors++;
        }
        sum += Number(input.value);
    }
    console.log(name);
    console.log(age);
    console.log(subject);

    console.log(sum);
}

