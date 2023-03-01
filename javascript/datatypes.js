let numTwo = 3
let numOne = 3

console.log(numOne == numTwo)

let js = 'JavaScript'
let py = 'Python'

console.log(js==py)

let lightsOn = 'true'
let lightsOff = 'false'

console.log(lightsOff==lightsOn)

let sayilar = [0, 7, 18, 16, 55]
console.log(sayilar[3]) //16
sayilar[3] = 116
console.log(sayilar[3]) //116

let nums1 = [0,5,10,15]
let nums2 = [0,5,10,15]
console.log(nums1==nums2) //false döner

//bir de obje deneyelim
let kullanıcıBir = {
    isim:'Tolgahan',
    gobekadi:'Mert',
    soyadi:'Şahin',
    ulke:'Türkiye'
}
let kullanıcıIki = {
    isim:'Görkem',
    gobekadi:null,
    soyadi:'Yağmur',
    ulke:'Türkiye'
}
let kullanıcıUc = {
    isim:'Görkem',
    gobekadi:null,
    soyadi:'Yağmur',
    ulke:'Türkiye'
}

console.log(kullanıcıIki==kullanıcıUc) //false

const PI =Math.PI
console.log(PI)

Math.round(5.45)


let space = ' '
let name = 'Tolgahan'
let surName = 'Şahin'
let country = 'Turkey'
let city = 'Ankara'
let language = 'Turkish'
let job = 'coder'
let age = 23

let fullName ='My name Is '+ name + space + surName
let personInfoOne =fullName + '.' + 'I am ' + age + ' years old.' + 'I live in ' + city + '/' + country +'.' +'I am a ' + job + '.'
console.log(personInfoOne) //My name Is Tolgahan Şahin.I am 23 years old.I live in Ankara/Turkey.I am a coder.


console.log(js.length) //10
console.log(js[2]) //v

let firstLetter = js[0]
let secondLetter = js[1]
let lastLetter = js.length - 1 //9 
console.log(js[lastLetter]) //t

js.toUpperCase

console.log(country.substr(3,5)) //key
console.log(country.substring(1,3)) //ur

console.log(fullName) //My name Is Tolgahan Şahin
fullName.split(name)
console.log(fullName)

console.log(fullName.trim())

let uzunYazi = '30 günlük Javascript Java Maratonu'
console.log(uzunYazi.includes("günlük")) //true
console.log(uzunYazi.includes("300"))  //false
console.log(uzunYazi.includes("Script"))  //false
console.log(uzunYazi.includes("Javascript"))  //true

console.log(uzunYazi.replace("Java", "bilmemNe")) //30 günlük bilmemNescript Java Maratonu

uzunYazi.match("Java")

let deneme1 = '2023 yılında 1 milyon tl kazanmak ve en azından 15000 tl aylık kazanca ulaşmak 1 numaralı hedefim ve 10 dileğimden 1 i olmalı.'

let regEx = /\d+/ 

console.log(deneme1.match(/\d+/g)) 

console.log(deneme1.repeat(10))

console.log(typeof uzunYazi)