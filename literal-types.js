var operations = function (input1, input2, 
/* this is literal type
  it will allow only 2 values mentioned below
*/
operationType) {
    var result;
    if (operationType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
// if 3rd parameter is anything other than mentioned above, it will throw error
console.log(operations("Hello", "World", "as-text")); // HelloWorld
console.log(operations(10, 20, "as-number")); // 30
console.log(operations(10, 20, "as-text")); // 1020
