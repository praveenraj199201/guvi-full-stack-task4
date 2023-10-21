const isPalindrome = (function(val)
{
    var j = val.length-1 
    for(var i=0; i<val.length/2; i++){ 
        if(val[i]!=val[j]){ 
             return  "kj";
        }
        else {
            console.log( val,"is a palindrome");
        }  
        j--;        
    }      
})("level");



