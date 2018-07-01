function Coffee(){
    this.cost = 0.0;
    this.ingredients = "";
}
Coffee.prototype.getCost = function(){
    return this.cost ;
}
Coffee.prototype.getIngredients = function() {
    return this.ingredients;
}

// Simple coffee
function SimpleCoffee(){ 
    Coffee.call(this);
    this.cost = 1.0;
    this.ingredients = "Coffee"
}
SimpleCoffee.prototype = Object.create(Coffee.prototype);
SimpleCoffee.prototype.constructor = SimpleCoffee;

// Coffee Decorator
function CoffeeDecorator(coffee) {
    Coffee.call(this);
    this.coffee = coffee;
}
CoffeeDecorator.prototype = Object.create(Coffee.prototype);
CoffeeDecorator.prototype.getCost = function(){
    return this.cost + this.coffee.getCost();
}
CoffeeDecorator.prototype.getIngredients = function(){
    return  this.coffee.getIngredients()+ " & " + this.ingredients ;
}
// Add Milk
function Milk(coffee) {
    CoffeeDecorator.call(this, coffee);
    this.cost = 0.5;
    this.ingredients = "Milk ";

}
Milk.prototype = Object.create(CoffeeDecorator.prototype);
// Add Cream
function WhipCoffee(coffee) {
    CoffeeDecorator.call(this, coffee);
    this.cost = 0.25;
    this.ingredients = "Whip Creame ";

}
WhipCoffee.prototype = Object.create(CoffeeDecorator.prototype);

var someCoffee = new SimpleCoffee();
someCoffee = new Milk(someCoffee);
someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost())
console.log(someCoffee.getIngredients())

