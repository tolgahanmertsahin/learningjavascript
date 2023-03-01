let sonSayi = 4
if (sonSayi==4) {1
    console.log('sayımız 4')
} else if (sonSayi > 4) {
    console.log('sayımız büyük')
} else {
    console.log('sayı küçük')
}

/*let soruCevap = prompt('50 kere 10 kaçtır?', 'robot olmadığınızı kanıtlayın.')
if (soruCevap ==10 '500') {
    console.log('doğru cevap verildi.')
} else {
    alert('yanlış cevapladınız')
} */
//yanlış yaptık çünkü iki eşittir koymamız gerekiyordu...

let isimler = Array()
console.log(isimler)

const isimler2 = ['tolgahan', 'görkem', 'deniz', 'fatih']
console.log(isimler2)

let js='JavaScript'
const JavaScriptChars = js.split('')

console.log(JavaScriptChars)
JavaScriptChars.pop('')
console.log(JavaScriptChars)

const sirketStringi = "'facebook','google','microsoft','apple'"
const sirketler = sirketStringi.split(',')
console.log(sirketler)

const fruits = ['banana','orange','apple','melon','grape','mango']
let firstFruit = fruits[0]
console.log(firstFruit)
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit)

fruits[2]='newFruit'
console.log(fruits[2])

const abc = Array(5).fill('tolgahan')
console.log(abc)


let arr1=[1,2,3]
let arr2=[4,5,6]
const denemecct= arr1.concat(arr2,8,10,20)
console.log(denemecct)

let index=fruits.indexOf('banana')
if (index != -1) {
    console.log('This fruit is in the fruits list!')
} else {
    console.log("This fruit isn't in the fruit list :(.")
}

let numbersTraining =[0,6,8,9,4,5,6,45,0,5,2,1,2,0,3,2,2,2,4,5,6,5,7,8,2]
console.log(numbersTraining.lastIndexOf(0))

console.log(numbersTraining.slice(2,4))

numbersTraining.push('yeniItem')
console.log('tolgahan'.split('').reverse().join(''))

arrayOfArrays=[1,2,3,[5,7,9],8]
console.log(arrayOfArrays[3][1])