const team = {
  _players: [
    {
    firstName: 'Donda',
    lastName: 'Vid',
    age: 33,
    },
    {
    firstName: 'FabianChello',
    lastName: 'Honorato',
    age: 30,
    },
    {
    firstName: 'Durango',
    lastName: 'Kid',
    age: 35,
    },
  ],
   _games: [ 
    {
      opponent: 'IvanChello',
      teamPoints: 35,
      opponentPoints: 22
    },
    {
      opponent: 'PlinioChello',
      teamPoints: 42,
      opponentPoints: 27
    }, 
    {
      opponent: 'FloresChello',
      teamPoints: 30,
      opponentPoints: 27
    }, 
  ],
get players() {
  return this._players;
},
get games() {
  return this._games;
},
addPlayer(firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let games = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(games);
    }   
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Dillinger', 33, 45);
team.addGame('Schumager', 42, 76);
team.addGame('Flobs', 10, 170);
console.log(team.games);