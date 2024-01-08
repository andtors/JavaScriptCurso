const prod1 = [] 

function prod(a, b, c){
    a,
    b,
    c
    prod1.push(a, b, c)
}

function removeProperty(id) {
    delete prod1[id]
    console.log(prod1)
}

new prod('André', 1.82, 23)
console.log(prod1)
removeProperty(1)