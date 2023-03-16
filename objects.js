let name = "tolgahan"
let surname = "şahin"

function scopeLearning() {
    console.log(name, surname)
    if (true) {
        let name ="Mert"
        let surname = "Özer"
        console.log(name,surname)
    }
    console.log(name,surname)
}
scopeLearning()
console.log(name,surname)

for (var i =1; i<=5; i++) {
    console.log('i',i)
}
console.log('son i', i)

const person = {}
console.log(person)

const samed ={
    name: 'Samed',
    surname: 'Özer',
    age: 22,
    'erkek mi': true,
    skills: ['manipulation',
            'psychology',
            'student',
            'games'
        ],
    test:{
        deneme:'hedef obje içinde obje yazmak'
    },
    tamIsımGetir : function() {
        return `${this.name} ${this.surname}`
    }
}

console.log (samed.surname,samed.name)
console.log(samed.skills[2])

console.log(samed['erkek mi'])


console.log(samed.tamIsımGetir())
samed.skills.push('gereksiz örnek')
console.log(samed.skills);

samed.title='developer';


samed.getPersonInfo= function() {
    let skillsWithoutLastOne = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills.at(-1)
    let skills22 = `${skillsWithoutLastOne} and ${lastSkill}`
    let fullNamee = this.tamIsımGetir()
    let statement = `${fullNamee} is a ${this.title}.\nHe teaches ${skillsWithoutLastOne} and ${lastSkill}.\nSo all of his skills are ${skills22}.\nHis age is ${this.age}.`
    return statement
}
console.log(samed.getPersonInfo())

console.log(samed.skills)

let newUser = Object.assign({},samed)
newUser.name='Tolgahan'
console.log(newUser)

console.log(Object.keys(samed))