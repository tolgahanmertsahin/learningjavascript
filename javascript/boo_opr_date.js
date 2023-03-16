let ilkIsim
console.log(ilkIsim) //tanımsız çünkü henüz değer atamadım
let boş = null
console.log(boş) //null alıyoruz.

//operatörler
let a=10
let b=50
console.log(a+=b)
console.log(a+b)
//60 oldu

console.log (5 == "5")  //true
console.log (5 === "5") //false
console.log (5 != "5")  //false
console.log (5 !== "5") //true

console.log('mango'.length == 'avocado'.length)



let count = 5
console.log(++count) //6
console.log(count) //6

let otherCount =5
console.log(otherCount++) //5
console.log(otherCount) //6
//genelde post increment kullanırız

console.log(otherCount--)

let koşulBuOlsun = true
koşulBuOlsun
    ? console.log ('doğruysa bunu bas')
    : console.log ('yanlışsa bunu')

let result=5>3 
    ? ("matematik skills")
    : ('matematiğine tüküreyim')

console.log(result)

/*let denemeSayisi=prompt("bir sayı girin", 1)
let sonuç = denemeSayisi
console.log(sonuç)

let onayEkran = confirm('Emin misiniz?')
onayEkran ? console.log('Harika') : console.log('yok')*/ 

const date = new Date()

let year = date.getFullYear(),
    month= date.getMonth(),
    day = date.getDate(),
    dayOfTheWeek= date.getDay(),
    hour= date.getHours(),
    minute=date.getMinutes(),
    second=date.getSeconds()

let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
]
//17 Şubat 2023 Saat 15:22 gibi olmalı format

let humanReadableDateFormatInTurkish = `${day} ${months[month]} ${year}, ${days[dayOfTheWeek]}, ${hour}:${minute}:${second}`
console.log(humanReadableDateFormatInTurkish)

let cagatay={
    name:'Çağatay'
}