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
