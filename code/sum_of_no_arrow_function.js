//sun of all numbers in an array

let num = [1,2,3,4,5,6,7,8,9];
let sum =0;
const sumNumber = (val) =>
{   
        sum = sum+val;
        console.log(sum);
}

for (let i=0; i<num.length; i++)
{
sumNumber(num[i]);
}
