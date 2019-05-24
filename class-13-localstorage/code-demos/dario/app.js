function Cat(name, swipes, aliases) {
  this.name = name;
  this.swipes = swipes;
  this.aliases = aliases;
}
var cat = JSON.stringify(new Cat("Ally", 9, ["Betsy", "Claire", "Donna"]));
localStorage.cat = cat;

console.log(JSON.parse(localStorage.cat));
