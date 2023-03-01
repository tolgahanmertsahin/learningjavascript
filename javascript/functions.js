function bizimMahalle() {
    let uMM = 'Uğur Mumcu Mahallesi'
    console.log(uMM)
}

/*function ikiSayiTopla(){
    let numOne=2
    let numTwo=4
    let total = numOne + numTwo
    return total
}
console.log(ikiSayiTopla())*/

let space=' '
function tamIsimBas(){
    let ilkIsim ='Tolgahan'
    let gobekAdi ='Mert'
    let soyAdi ='Şahin'
    let fullName =ilkIsim+space+gobekAdi+space+soyAdi
    return fullName
}
console.log(tamIsimBas())

function ikiSayiTopla(numOne,NumTwo){
    return numOne+NumTwo
}
console.log(ikiSayiTopla(5,9))

function toplaBakalim() {
    let total = 0
    for(let i = 0 ; i<arguments.length; i++) {
    total += arguments[i] 
    }
    return total
}
console.log(toplaBakalim(5,8,9,6,5,7,8,45))

function sayilarinToplami() {
    let toplam = 0
    for(let i=0; i<arguments.length; i++){
        total += arguments[i]
    }
    return toplam
} 

function çarp(sayi1,sayi2) {
    console.log('Çarpımı' ,sayi1*sayi2)
}
çarp(10,5)

function arrayleriTopla(array) {
    let toplami=0
    for(let i=0; i<array.length; i++) {
        toplami+=array[i]
    }
    console.log('toplamı', toplami)
}

let dizi =[2,5,8,9,6,45]
arrayleriTopla(dizi)


function denemeFonksiyonu(array){
    let denemes =0
    for(let i=0; i<array.length; i++) {
        denemes+=array[i]
    } 
    console.log('böylesi', denemes)
}

tolga=[5,6,9,8,4,5,6,9,8,2]
denemeFonksiyonu(tolga)

function arguDeneme(){
    let totali=0
    for(let i=0; i<arguments.length;i++) {
        totali+=arguments[i]
    }
    return totali
}

console.log(arguDeneme(5,8,8,9,5,6,4))
;
(function(n) {
    console.log(n*n)
})(2)

function hello(name) {
    return `hello ${name}`
}
console.log(hello('Osman'))

const hello2 = name2 => `hello ${name2}`
console.log(hello2('Osman'))

const toplama = (num1,num2,...numbers) => {
    console.log(numbers)
}
toplama(5,9,8,6,8)

const karesi = n =>console.log(n*n)
karesi(3)