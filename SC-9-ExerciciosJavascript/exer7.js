function betweenIn(number, min, max, inclusive = false) {

    if (number > min && number < max) {
        return console.log(`The number ${number} is between ${min} and ${max}`)
    } if (inclusive != false){
        return console.log('Variable inclusive is true!')
    } else {
        return console.log(`The number ${number} is not between ${min} and ${max}`)
    }
}

betweenIn(10, 50, 100)
betweenIn(16, 100, 160)
betweenIn(70, 50, 100)
betweenIn(3, 3, 150)
betweenIn(3, 3, 150, true)