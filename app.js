function add(n1, n2, doubleResult, phrase) {
    var sum = n1 + n2;
    console.log(phrase);
    return doubleResult ? sum * 2 : sum;
}
/*
    TypeScript would be able to infer the type
    (and hence you should omit ":number") but here, we actually also have an explicit type assignment.
*/
var n1 = 5;
var n2 = 2.8;
/* since we are just initializing the variable and
   not assigning anything, we should add type here
*/
var n;
// boolean takes only 2 values - true and false
var printResult = true;
var result = add(n1, n2, printResult, "Result is -> ");
console.log(result); // 15.6
// OBJECT TYPES
/*
This is object type inferred by typescript
it consists of key type pairs (when hover on person)

    const person: {
        name: string;
        age: number;
    }
*/
var person = {
    name: "Khushbu",
    age: 27
};
/*
    since we assigned the type here
    now when you hover on car -> it does not infer and shows the key types

    const car: object

    but in this case we lose on all javasript object properties
*/
var car = {
    name: "Accord",
    model: "XL"
};
// Property 'name' does not exist on type 'object'
// below line will give error
// console.log(car.name);
var validCar = {
    name: "Camri",
    model: "Sports"
};
console.log(validCar.name);
