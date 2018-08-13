import Player from './data/player/Player'

module.exports = (client, clientManager, gameManager, socketHandler) => {

	const handleRegister = (userName) => {
		clientManager.registerClient(client, userName)
		console.log('client register:', userName)
		socketHandler.registerResponse(userName)
	}

	const handleGameList = () => {
		const gameList = gameManager.getGameList()
		socketHandler.gameListResponse(gameList)
	}

	const handleNewGame = (name) => {
		const newGame = gameManager.addGame()
		newGame.addPlayer(name, client.id)

		console.log('game created:', newGame.id)
		console.log('added player', name, 'to game', newGame.id)

		socketHandler.newGameResponse()
	}

	return {
		handleRegister,
		handleNewGame,
		handleGameList
		// handleJoin,
		// handleLeave,
		// handleDisconnect
	}
}
