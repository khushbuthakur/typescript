function add(n1: number, n2: number, doubleResult: boolean, phrase: string): number {
    const sum = n1 + n2;
    console.log(phrase);

    return doubleResult ? sum * 2 : sum;
}

/*
    TypeScript would be able to infer the type 
    (and hence you should omit ":number") but here, we actually also have an explicit type assignment.
*/
const n1: number = 5;
const n2 = 2.8;

/* since we are just initializing the variable and 
   not assigning anything, we should add type here
*/
let n: number;

// boolean takes only 2 values - true and false
const printResult: boolean = true;

const result = add(n1, n2, printResult, "Result is -> ");
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

const person = {
    name: "Khushbu",
    age: 27
};

/*
    since we assigned the type here
    now when you hover on car -> it does not infer and shows the key types

    const car: object

    but in this case we lose on all javasript object properties
*/

const car: object = {
    name: "Accord",
    model: "XL"
};

// Property 'name' does not exist on type 'object'
// below line will give error
// console.log(car.name);

const validCar: {
    name: string,
    model: string
} = {
    name: "Camri",
    model: "Sports"
};

console.log(validCar.name);

// ARRAYS

// takes an array only of strings
const names: string[] = ["Khushbu", "John", "Janice"];

// takes an array of both numbers and strings
const playersInTeam: (string | number)[] = ["India", 1];

const hobbies: string[] = ["Cooking", "Reading", "Coding"];

for (const hobby of hobbies) {
    console.log(hobby.toUpperCase());
}

/*
    COOKING
    READING
    CODING
*/

// TUPLE
/*
    TUPLE IS FIXED LENGTH AND FIXED TYPE ARRAY
*/

const address: [string, number] = ["Main Road", 123];
address[0] = "New Road";

// below line will give error
// address[1] = "4";

// this works and is bug in typescript
address.push(100);

console.log(address);

// ENUM

enum ROLE {
    ADMIN,
    READ_ONLY_USER,
    GATEKEEPER
}

enum ROLES {A = 9, B, C};

const visitor = {
    name: "Khushbu",
    role: ROLE.READ_ONLY_USER
};