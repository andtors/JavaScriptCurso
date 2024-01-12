require('./global')

console.log(MinhaApp.saudacao()) 

MinhaApp.nome = 'Eita!'  // não irá alterar pois está com freeze, mas se não tivesse iria alterar
console.log(MinhaApp.nome)