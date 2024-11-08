

function Player(name) //Create a constructor to create a `Player` object
 {
  this.name = name; //Player should have a name
  this.lvl = 1;     //lvl set to **1** by default
  this.points = 0;  //points set to **0** by default
}

Player.prototype.gainXp = function (points) //Create a method on the prototype called `gainXp` that takes in a number from 1-10 and adds it to the players `points`.
 {
      this.points+=points;
     
    
    
    while(this.points >= 10) //If the current `points` are >= 10 then add 1 to the `lvl` and decrement the points by 10.
    {
      this.points -=10;
      this.lvl++;
    }
    
  return this.lvl;
};
Player.prototype.describe = function() //Create another prototype method called `describe` that displays the players stats (name, lvl, points)
{
  console.log(this.name + " is level " + this.lvl  + " with " + this.points +  " experience points");

}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points