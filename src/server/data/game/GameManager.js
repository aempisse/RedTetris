const Game = require('./Game')

export default class GameManager {
	
	constructor() {
		// this.games = new Map()
		this.games = [
			{id: '0123', players: [
				{playerName: 'jean-michel', id: '42'},
				{playerName: 'michelle-jean', id: '27'}
			]},
			{id: '6789', players: [
				{playerName: 'max', id: '84'},
				{playerName: 'axel', id: '65'}
			]}
		]
	}

	addGame() {
		gameList = this.games
		do
			newGameId = (Math.floor(Math.random() * 9999) + 1).toString().padStart(4, '0')
		while (!this.getGame(newGameId))
		newGame = new Game(newGameId)
		this.games = gameList.concat(game)
		return newGame
	}

	getGame(gameId) {
		return this.games.get(gameId)
	}

	getGameList() {
		return this.games
	}
}
