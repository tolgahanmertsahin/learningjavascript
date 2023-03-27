const names = new Set(['tunahan','görkem','deniz','emre']);
[...names].map(name=>console.log(name))
//console.log(names)
/*const countries = new Set ([
    'Turkiye',
    'England',
    'USA',
    'Russia',
    'Turkiye'
])
for (let country of countries) {
    console.log(country, 'bir ülkedir.')
}*/
const names2 = new Set();

names2.add('tunahan');

[...names2].map(name=>console.log(name))

const names3=['tolgahan','tunahan','mert','şahin']
const namesSet=new Set()
for(let name of names3){
    namesSet.add(name)
    /*console.log(namesSet)*/ //js showed the set 4 times repeadetly :D
}
console.log(namesSet)

namesSet.delete('mert')
console.log(namesSet)

console.log(namesSet.has('tolga')) //false
//namesSet.clear()
console.log(namesSet)

//IF WE WANT TO MAKE AN ARRAY UNIQUE, JUST NEW SET IT. ITS ALL VARIABLES WILL BE UNIQUE AFTER THAT TRICK ;)

const namesTry=['ahmet','mehmet','arzu','hakan','ahmet','mehmet']
//now we have some same elements inside this array.
console.log(new Set(namesTry))
//Set(4) {'ahmet', 'mehmet', 'arzu', 'hakan'}
//so lets make it array again
console.log([...new Set(namesTry)])
//but deleted variables won't come back again
//its good cause we can make an array unique with this way


const countries = [
    'Turkiye',
    'England',
    'USA',
    'Russia',
    'Turkiye'
]

const countrySet =new Set(countries)
console.log(countrySet.size)

const counts=[]

for (const c of countrySet){
    const filteredCountry=countries.filter((cnt)=>cnt===c)
    console.log(filteredCountry)    
    counts.push({country: c, count:filteredCountry.length})
}
console.log(counts)

/*let a=[1,2,3,4,5]
let b=[1,3,5,6]
let c=[...a,...b]

let A=new Set (a)
let B=new Set (b)
let C=new Set (c)

console.log(C)


let d=[1,2,3,4,5]
let e=[1,3,5,6]

let D=new Set (d)
let E=new Set (e)

let f=a.filter((num)=>B.has(num))
let F=new Set(f)

console.log(F)*/


//set difference
/*const a = [1,2,3,4,5,6]
const b = [3,4,5,6]

let B = new Set(b)
console.log(
    a.filter(num=>!B.has(num))
)*/

const map= new Map()

map.set('1', 'str')
map.set(1, 'num1')
map.set(true, 'bool1')
map.set(false, 'bool2')

console.log(map) 

const tayfun={
    name:'Tayfun'
}
const ahmet={
    name:'Ahmet'
}

const map2=new Map()
map.set(tayfun,10)
map.set(ahmet,25)

console.log(
    map.get(tayfun) //10
)

console.log(map.keys())