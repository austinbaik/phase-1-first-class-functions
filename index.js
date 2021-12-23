
function receivesAFunction(call) {
    call();
}


const foo = function bar() {}

function returnsANamedFunction(){
    return foo;
}



//returnsAnAnonymousFunction()

const returnsAnAnonymousFunction = () => function() {}