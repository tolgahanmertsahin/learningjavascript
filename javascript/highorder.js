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

const interval = setInterval(sayHello,10000)

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