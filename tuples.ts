// all items in array are of type string
const team: string[] = ['John', 'Jane', 'Mark'];
const [captain, assistant, ...others] = team;
console.log(captain, assistant, others);

// all items in array are either string or number
const players: (string | number)[] = ["India", 50, "Australia", 40, "New Zealand", 30];
console.log("number of players in each team are : ", {
    players
});

// old way to declare an array
const numbers: Array < number > = [1, 2, 3, 4, 5];

// this denotes, 1st element should be string and second element should be a number
const tuple: [string, number] = ["Hello", 10];

// this denotes, 1st element should be number and second element should be a string
const tuple1: [number, string] = [10, "Players"];
console.log(tuple1);