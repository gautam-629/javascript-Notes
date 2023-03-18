// about throw
function div(a,b){
    if(b===0)
    throw "Second parameter cannot be Zero";
    throw new Error("Second parameter cannot be Zero")
    throw new SyntaxError("Second parameter cannot be Zero")

    return a/b;
}
console.log(div(1,0));

// try and catch
function div(a,b){
    if(b===0)
    throw new SyntaxError("Second parameter cannot be Zero");
    return a/b;
}
// calling a function
try {
    div(4,0)
} catch (error) {
    console.log(error.message);
    console.log(error.name);
}