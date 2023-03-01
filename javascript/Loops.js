for (let rndm = 5; rndm <= 10; rndm++) {
    console.log(`${rndm} * ${rndm}=${rndm*rndm}`)
}
//burada ; cümlemizi kesiyor. demek istedik ki rndm 5 olsun ve rndm 50 den küçük eşitse rndm yi artır. parantezin içine döngümüzü yazdık for döngüsü burada böyle olduğunda ne yapayım anlamında kullanıldı. sonra köşelinin içine de ne yapılacağını yazdık. yani {} for () gibi bir durum var.

for (let sayi = 3; sayi < 10; sayi++) {
    console.log(sayi)
}
const isimler = ['görkem','tolgahan','samed','fatih','deniz']
for (let hadi = 0; hadi < isimler.length; hadi++) {
    console.log(isimler[hadi])
}

let yeniDeneme = [5,10,165,145,35,15]
let toplamDeneme = 0

for (let i=0; i< yeniDeneme.length; i++) {
    toplamDeneme += yeniDeneme[i]
}
console.log('Sayıların toplamı',toplamDeneme)

let ülkeler = ['Türkiye','İngiltere','Amerika Birleşik Devletleri']
let büyükÜlkeler = []

for (let i=0; i<ülkeler.length; i++) {
    büyükÜlkeler.push(ülkeler[i].toUpperCase('TR'))//burada parantez koymayınca hata geldi dikkat.
}
console.log(ülkeler)
console.log(büyükÜlkeler)

let i = 0
while (i < isimler.length) {
	console.log('İsim', isimler[i])
    i++
}
i=0
do {
    console.log(isimler[i])
    i++
} while(i<isimler.length)

for(let name of isimler){
    console.log('Ad', name)
}

for(const tolga of yeniDeneme){
    toplamDeneme+=tolga
}

console.log(toplamDeneme)

const ülkelerr = ['Amerika','Papua Yeni Gine','İsveç','Yeni Zelanda']
const yeniKüme = []
for(const ülke of ülkelerr){
    yeniKüme.push(ülke.toUpperCase())
}
console.log("Büyük harfli ülkeler",yeniKüme)

for (let i = 0; i<6; i++) {
    if(i==3){
        break
    }
    console.log(i)
}

for(let name of ülkelerr){
    if(name=='Amerika'){
        console.log(`${name} bulundu.`)
        continue
    }
    console.log('Adı',name)
}