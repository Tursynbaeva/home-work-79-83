
const zadanye1 = {
    name: 'bayan',
    age: 26,
    isAdmin: true
}

console.log(zadanye1.name)









const zadanye2 = {
    Bayan: {
        age: 26,
        isAdmin: true,
        sayHello(firstName) {
            console.log(`Hello ${firstName}! `)
        }
    }
}

zadanye2.Bayan.sayHello('Tom')








// const position3 = [
//     {
//         name:'max',
//         age:20,
//         isAdmin:true
//     },
//     {
//         name:'ann',
//         age:25,
//         isAdmin:true
//     },
//     {
//         name:'tom',
//         age:15,
//         isAdmin:true
//     },
//     {
//         name:'ann',
//         age:10,
//         isAdmin:false
//     }
// ]

// let schyot = 0

// for (let i = 0; i < position3.length; i++) {
//     if(!position3[i].isAdmin){
//         schyot++
//     }
// }

// console.log('простые пользователи:' + schyot);


const position4 = [
    {
        name:'max',
        age:20,
        isAdmin:true
    },
    {
        name:'ann',
        age:25,
        isAdmin:true
    },
    {
        name:'tom',
        age:15,
        isAdmin:true
    },
    {
        name:'ann',
        age:10,
        isAdmin:false
    }
]

let point = 0

for (let i = 0; i < position4.length; i++) {
    if(!position4[i].isAdmin)
    point++
}

console.log('gjk:' + point);