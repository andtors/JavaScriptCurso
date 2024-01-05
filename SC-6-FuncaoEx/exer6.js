function inverse(number){
    
    

    if (number < 0){
        return console.log(-number)
    } if (number == true){
       return console.log(false)
    } else {
       return console.log('Expected boolean or number type, but the parameter is string')
    }


}

inverse(true)
inverse("6")
inverse(-2000)
inverse("programação")



