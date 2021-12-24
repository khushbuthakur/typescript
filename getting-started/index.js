// ! denotes that this will never be null
var button = document.querySelector("button");
// as HTMLInputElement enables to take .value from this object
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var add = function (num1, num2) {
    return num1 + num2;
};

button.addEventListener("click", function () {
    // +num converts string to integer
    console.log(add(+num1.value, +num2.value));
});