// Factory simples
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Nootbook', 2199.49))
console.log(criarProduto('iPad', 1199.49))


