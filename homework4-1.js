//1. Create a class that represents anything you like
class Leisure {
  constructor(site) {
    this.site = site;
  }

  leisureSite() {
    return this.site;
  }
}

//2. Create a class that extends the first class
class Sports extends Leisure {
  constructor(site, type) {
    super(site);
    this.type = type;
  }
  SportsCategory() {
    return this.type;
  }
}

const _sports1 = new Sports("outdoor ground", "team sports");

console.log(_sports1); //<= expected result "Sports {site: "outdoor ground", type: "team sports")"
console.log(_sports1.leisureSite()); // <= expected result "outdoor ground"

//3. Create a class that extends the second class
// class BallSports extends Sports {
//   constructor(site, type, noOfPlayers) {
//     super(site, type);
//     this.noOfPlayers = noOfPlayers;
//   }

//   totalOnsitePlayers() {
//     return this.noOfPlayers * 2;
//   }
// }

// const football = new BallSports("football field", "team sports", 11);
// console.log(football); //<= expected result "Ballsports {site: "football field", type: "team sports", noOfPlayers: 11}"
//console.log(football.totalOnsitePlayers()); //<= expected result 22

//4. Make sure each class has at least one method and one piece of data unique to it
//=> Already done

//5. Create an instance of the final class
//=> already done in Q3

//6. Modify the classes above to use get/set
class BallSports extends Sports {
  constructor(site, type, noOfPlayers) {
    super(site, type);
    this.noOfPlayers = noOfPlayers;
  }

  get totalOnsitePlayers() {
    return this.noOfPlayers * 2;
  }

  set totalOnsitePlayers(noOfSubs) {
    this.noOfPlayers = this.noOfPlayers + noOfSubs;
  }
}

const football = new BallSports("football field", "team sports", 11);
football.totalOnsitePlayers = 5;
console.log(football.totalOnsitePlayers); //<= expected result 32
