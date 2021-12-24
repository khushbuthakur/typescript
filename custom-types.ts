type NumberOrString = number | string;

/* 
    here instead of repeating the number | string union type 
    we use a alias / custom type i.e. NumberOrString  
*/

const addOperation = (
  input1: NumberOrString,
  input2: NumberOrString,
  operation: string
) => {
  if (operation == "as-number") {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

type Rounding = "round-up" | "round-down";

const subtract = (num1: number, num2: number, rounding: Rounding): number => {
  if (rounding === "round-up") {
    return Math.ceil(num1 - num2);
  } else {
    return Math.floor(num1 - num2);
  }
};

console.log(subtract(10.01, 2.99, "round-up")); // 8
console.log(subtract(15.33, 9.87, "round-down")); // 5

type Product = { title: string; price: number };
// below line will throw error as isListed in not present in Product
// const p1: Product = { title: "A Book", price: 12.99, isListed: true };

// UserType can be an object with name or just string, both works
type UserType = { name: string } | string;
let u1: UserType = { name: "Max" };

console.log(u1); // {name: 'Max'}

u1 = "Michael";

console.log(u1); // 'Michael'