 console.log('in app.js')

const people=['zahra','zainab','johncena','stonecold','therock']

console.log(people[0])
console.log(people.length)
console.log(people[people.length-1])

console.log(people)
people[0]= 'amal'
people.push('malak','ayah')

console.log(people)

const removedperson=people.pop()
console.log(removedperson)
console.log(people)

people.unshift('amna')
console.log(people)

people.shift()
console.log(people)``

const section=people.slice(1,4)
console.log(section)

const bro=people.splice(1,4)
console.loh(bro)

const fruits = ['apple','banana','havana','eggrolls']
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase())
}

for (let fruit of fruits) {
    console.log(fruit)
}

function screamfruit(fruit) {
    console.log(`I HAVE A ${fruit.toUpperCase()}`)
}
fruits.forEach(screamfruit)

fruits.forEach(fruit => {
    console.log (`i have a ${fruits.toUpperCase()}`)
})