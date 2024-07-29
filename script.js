//complete this code
class Animal {
	constructor(species)
	{
		this.species=species
	}
	get Species()
	{
		return this.species
	}
	makeSound()
	{
		console.log("The "+ this.species +" makes a sound")
	}
}

class Cat extends Animal {
	purr()
	{
		console.log("purr")
	}
}

class Dog extends Animal {
	bark()
	{
		cosole.log("woof")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
