// const C = document.getElementById("C")
// const plus = document.getElementById("plus")
// const minus = document.getElementById("minus")
// const nine = document.getElementById("nine")
// const eight = document.getElementById("eight")
// const seven = document.getElementById("seven")
// const six = document.getElementById("six")
// const fight = document.getElementById("five")
// const four = document.getElementById("four")
// const three = document.getElementById("three")
// const two = document.getElementById("two")
// const one = document.getElementById("one")
// const doublezero = document.getElementById("doublezero")
// const zero = document.getElementById("zero")
// const sao = document.getElementById("sao")
// const equal = document.getElementById("equal")
// const dot = document.getElementById("dot")
// const DEL = document.getElementById("DEL")
// const rong = document.getElementById("rong")
// const divide = document.getElementById("divide")
const input = document.getElementById("inputtext")
const buttons = document.querySelectorAll("button")


function calculate(exp) {
    console.log(exp);
    console.log(typeof(exp));
    try {
        return new Function('return ' + exp)();

    } catch (error) {
        return 'undefault';
    }

}
function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        
        input.value += buttonValue;
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});