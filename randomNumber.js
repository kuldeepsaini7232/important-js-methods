//this method is used when we need to genrate a random number between two number

const randomNumber=(lower,upper)=>{   //here lower means small upper means big 
return  Math.floor(Math.random()*(upper-lower+1))+lower;
}

console.log(randomNumber(1000,2000));
console.log(randomNumber(1000,2000));
console.log(randomNumber(1000,2000));
console.log(randomNumber(1000,2000));

