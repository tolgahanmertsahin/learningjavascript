const fonksiyon = number=>number**2

function cube(cb, number) {
    return cb(number) * number
}
console.log(cube(fonksiyon,10))

const a= s1 => {
    const b=s2=> {
        const c=s3=>{
            return s1+s2+s3
        }
        return c
    }
    return b
}

console.log(a(10)(15)(20))

function sayHello() {
    console.log('Hello!')
}
setTimeout(sayHello, 5000)

const interval = setInterval(sayHello,50000)

const timeout=setTimeout(()=> {
    clearInterval(interval)
    console.log('interval quitted.')
},5000)

setTimeout(()=>{
    clearTimeout(timeout)
    console.log('timeout quitted.')
},3000)

let numbers = [2,5,6,8,6,9,42]

let numbers2 = numbers.map(number=>number*2)
console.log(numbers2)

let users = [
    {
        id:1,
        name:'Tolgahan',
        gender:1
    },
    {
        id:2,
        name:'aörkem',
        gender:1
    },
    {
        id:3,
        name:'camed',
        gender:1
    }
]

users= users.map(user=>{
    if(user.id==2){
        user.name='samed'
    }
    return user
})
    
console.log(users)

console.log(
    numbers.filter(number=>number>3&&number<9)
)

const women=users.filter(user=>user.gender==2)
const men=users.filter(user=>user.gender==1)

console.log(men)

console.log(
    numbers.reduce((oldValue, currentValue)=>{
        return oldValue + currentValue
},10)
)

console.log(
    numbers.reduce((oldValue, currentValue)=> oldValue + currentValue, 0))


console.log(users.some(user=>user.gender==2))

console.log(numbers.find(number=>number>3))
console.log(users.find(user=>user.id<3))
//ilk user in sebebi değişkeni bu parantezin içinde belirlemek ikinci de değişkenle birlikte nerde arayacağımızı söylüyoruz. users desek de işe yaradı.
//purpose of first 'user' is defining user parameter into this high order function line. second 'user' is to tell JavaScript where to find this parameter. in this case we want JavaScript to look up to 'id's in 'users' array's objects.

console.log(numbers.findIndex(number=>number>3))

numbers.sort()
console.log(users.sort((a, b)=>b.name.localeCompare(a.name))) 