function makeSound(animal) {
  animal.sound()
}

class Dog {
  sound() {
    console.log('汪汪汪')
  }
}

class Cat {
  sound() {
    console.log('喵喵喵')
  }
}

makeSound(new Dog())
makeSound(new Cat())