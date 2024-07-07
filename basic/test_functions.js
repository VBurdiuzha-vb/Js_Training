
// how is functions declarating 
function firstFunc ( arg1, arg2) {
    console.log('Hello world', arg1 + arg2)
}

firstFunc(1 , 2) 

//visibility zone 
//example 1
const a = 5 
let b = 7

function visibilityZone(){
    const a = 10 // if comment will get 5
    console.log(a)
}
visibilityZone() // actual response 10

//example 2 
function checkScope(){
    //const a = 3
    function visibilityZone2(){
        console.log(a)
    }
    visibilityZone2()
}

checkScope()