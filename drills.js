const Stack = require('./stack.js')

function is_palindrome(s) {
     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // your code goes here
    const stack1 = new Stack();
    const stack2 = new Stack();

    for(let i=0; i<s.length; i++){
        stack1.push(s.slice(i, i + 1))
    }
    for(let i=s.length; i>0; i--){
        stack2.push(s.slice(i-1, i));
    }

    // return (stack1 === stack2 ? false : true);
    console.log(JSON.stringify(stack1));
    console.log(JSON.stringify(stack2));

    if(stack1 == stack2){
        return true;
    } else {
        return false;
    }


    
}

// true, true, true
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));