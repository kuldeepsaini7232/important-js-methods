//find index is used when we want to check in a array that data is present or not
//it return the index where data is find in array

//lets see an example
const array=[10,20,30,100];
const value=100;

const output=array.findIndex(data=>data==value);
console.log(output);