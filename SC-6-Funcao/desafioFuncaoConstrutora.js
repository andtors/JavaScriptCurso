function CriarPessoa(nome){
    this.nome = nome
    this.falar = function()
    {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = new CriarPessoa ('João')
p1.falar()