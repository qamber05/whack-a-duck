const person = {
    name: 'qamber',
    age: 20,
    posessions: ['phone','coffee cup','will smith cd'],
    playlist: ['MJ', 'tupac']
}
console.log(person.name)

person.age = 32
console.log(person)

person.location = 'Bahrain'
console.log(person)

delete person.posessions
console.log(person)

// object Method

const car ={
    model:"trailblazer",
    speed: 30,
    accelerate(num){
        car.speed += num
    },
    decelerate(num){
        car.speed -= num
    },
    engine: {
        pistons: 4,
        horsepower: 60,
    }
}
console.log(car)
car.accelerate(5)
console.log(car)
car.decelerate(5)
console.log(car)
console.log(car.engine.horsepower)
