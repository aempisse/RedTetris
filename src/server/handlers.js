// function makeHandleEvent(client, clientManager, gameManager) {
// 	function ensureExists(getter, rejectionMessage) {
// 		return new Promise(function (resolve, reject) {
// 		const res = getter()
// 		return res
// 			? resolve(res)
// 			: reject(rejectionMessage)
// 		})
// 	}

// 	function ensureUserSelected(clientId) {
// 		return ensureExists(
// 		() => clientManager.getUserByClientId(clientId),
// 		'select user first'
// 		)
// 	}

// 	function ensureValidChatroom(chatroomName) {
// 		return ensureExists(
// 		() => gameManager.getChatroomByName(chatroomName),
// 		`invalid chatroom name: ${chatroomName}`
// 		)
// 	}

// 	function ensureValidChatroomAndUserSelected(chatroomName) {
// 		return Promise.all([
// 		ensureValidChatroom(chatroomName),
// 		ensureUserSelected(client.id)
// 		])
// 		.then(([chatroom, user]) => Promise.resolve({ chatroom, user }))
// 	}

// 	function handleEvent(chatroomName, createEntry) {
// 		return ensureValidChatroomAndUserSelected(chatroomName)
// 		.then(function ({ chatroom, user }) {
// 			// append event to chat history
// 			const entry = { user, ...createEntry() }
// 			chatroom.addEntry(entry)

// 			// notify other clients in chatroom
// 			chatroom.broadcastMessage({ chat: chatroomName, ...entry })
// 			return chatroom
// 		})
// 	}

// 	return handleEvent
//   }

module.exports =  function (client, clientManager, gameManager) {
	// const handleEvent = makeHandleEvent(client, clientManager, gameManager)

	function handleRegister(userName, callback) {

		clientManager.registerClient(client, userName)

		console.log('client register:', userName)

		return callback(null, userName)
	}

	// function handleJoin(chatroomName, callback) {
	// 	const createEntry = () => ({ event: `joined ${chatroomName}` })

	// 	handleEvent(chatroomName, createEntry)
	// 	.then(function (chatroom) {
	// 		// add member to chatroom
	// 		chatroom.addUser(client)

	// 		// send chat history to client
	// 		callback(null, chatroom.getChatHistory())
	// 	})
	// 	.catch(callback)
	// }

	// function handleLeave(chatroomName, callback) {
	// 	const createEntry = () => ({ event: `left ${chatroomName}` })

	// 	handleEvent(chatroomName, createEntry)
	// 	.then(function (chatroom) {
	// 		// remove member from chatroom
	// 		chatroom.removeUser(client.id)

	// 		callback(null)
	// 	})
	// 	.catch(callback)
	// }

	// function handleGetGames(_, callback) {
	// 	return callback(null, gameManager.serializeGames())
	// }

	// function handleDisconnect() {
	// 	// remove user profile
	// 	clientManager.removeClient(client)
	// 	// remove member from all games
	// 	gameManager.removeClient(client)
	// }

	return {
		handleRegister
		// handleJoin,
		// handleLeave,
		// handleGetGames,
		// handleDisconnect
	}
}
