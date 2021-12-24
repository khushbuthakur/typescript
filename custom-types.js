/*
    here instead of repeating the number | string union type
    we use a alias / custom type i.e. NumberOrString
*/
var addOperation = function (input1, input2, operation) {
    if (operation == "as-number") {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
var subtract = function (num1, num2, rounding) {
    if (rounding === "round-up") {
        return Math.ceil(num1 - num2);
    }
    else {
        return Math.floor(num1 - num2);
    }
};
console.log(subtract(10.01, 2.99, "round-up")); // 8
console.log(subtract(15.33, 9.87, "round-down")); // 5
var u1 = { name: "Max" };
console.log(u1);
u1 = "Michael";
console.log(u1);
