const firstName = 'Bayan'

function zadanye(fstName){
    console.log(`Hello, ${firstName}! `)
}

zadanye(firstName)









const numbers = [2,20,30,20,5,2,58,80,90,60,10,50,60,88]

function zadanye2(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 10){
            console.log(array[i])
        }
    }
}

zadanye2(numbers)









function zadanye3(a,b,c){
    if(c === 'minus'){
        let result = a-b
        console.log(result)
    } else if(c === 'deley'){
        let result = a/b
        console.log(result)
    } else if(c === 'sum'){
        let result = a+b
        console.log(result)
    } else if(c === 'multiply'){
        let result = a*b
        console.log(result)
    }
}

zadanye3(2,3,'minus')