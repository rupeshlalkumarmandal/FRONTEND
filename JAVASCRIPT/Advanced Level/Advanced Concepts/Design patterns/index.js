class Dog{
    speak(){
        return "Woof!";
    }
}

class Cat{
    speak(){
        return "Meow!";
    }
}

class AnimalFactory{
    staic createAnimal(type){
        if (type === "dog"){
            return new Dog();
        } else if(type === "cat"){
            return new Cat();
        }
    }
}

const dog = AnimalFactory.createAnimal("dog");
console.log(dog.speak());

const cat = AnimalFactory.createAnimal("cat");

console.log(cat.speak());