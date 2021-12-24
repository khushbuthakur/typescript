// ! denotes that this will never be null
const button = document.querySelector("button")!;
// as HTMLInputElement enables to take .value from this object
const num1 = document.getElementById("number1")! as HTMLInputElement;
const num2 = document.getElementById("number2")! as HTMLInputElement;

const addNums = (num1: number, num2: number): number => num1 + num2;

button.addEventListener("click", () => {
  // +num converts string to integer
  console.log(addNums(+num1.value, +num2.value));
});
