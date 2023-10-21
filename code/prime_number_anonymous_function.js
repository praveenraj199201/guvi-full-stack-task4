// return all the prime numbers in array

let num = [1,2,3,4,5];

const primeNumber = function(n){
    let flag = true; 
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
         
        
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
   
}

for (let i=0; i<num.length; i++)
{
primeNumber(num[i]);
}



