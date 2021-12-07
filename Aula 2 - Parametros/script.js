function sum(x,y,z){
    return x + y +z
}

const numbers = [1,2,3]

console.log(sum(...numbers))


function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho()
confereTamanho(1,1,22,22,3)