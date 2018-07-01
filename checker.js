function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log(this.name);
}
Person.prototype.clone = function(){
    return new this.constructor(this.name);
}

function AsiaPeople(name) {
    Person.call(this, name);
}
AsiaPeople.prototype = Object.create(Person.prototype);
AsiaPeople.prototype.constructor = AsiaPeople;

AsiaPeople.prototype.eat = function(){

}
