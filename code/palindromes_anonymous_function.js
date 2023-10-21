const str = ["praveen","level","done","malayalam"]

const isPalindrome = function(val)
{
    var j = val.length-1 
    for(var i=0; i<val.length/2; i++){ 
        if(val[i]!=val[j]){ 
             return  " ";
        }
        else {
            return val;
        }  
        j--;
        
    } 
     
}

for (let i=0; i<str.length; i++)
{
    isPalindrome(str[i]);
    console.log(isPalindrome(str[i]));
}