let greeting : string = "Hello";
console.log(greeting);

// num1 & num2 is of type number
// : number denotes return type of function
const addNumbers = (num1 : number, num2 : number) : number => num1 + num2;
console.log(addNumbers(10,12));

interface User{
    id : string;
    name : string;
    age : number;
    email : string;
};

// it validates of return type is of interface User
const getUserById = (id : string) : User => ({
    id,
    name : "John Doe",
    age : 22,
    email : "john@gmai.com"
});

const user = getUserById("uuid-01");

const saveUser = (user : User) => console.log(`Saving user :`, {user});
saveUser(user);
