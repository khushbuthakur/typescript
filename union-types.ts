function combine(input1 : number | string, input2 : number | string){
    let result;
    
    if(typeof input1 === 'number' && typeof input2 === "number"){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

console.log(combine(10, 20)); // 30
console.log(combine("Hello", "World")); // HelloWorld
console.log(combine(10, "10")); // 1010
