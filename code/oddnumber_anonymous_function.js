//print odd number in an array.

let num = [1,2,3,4,5,6,7,8,9]
const oddNumber = function(val){
    if (val%2){
        console.log(val);
    }
}

for (let i=0; i<num.length; i++)
{
oddNumber(num[i]);
}