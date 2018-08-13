export default class SocketHandler {
    constructor (socket) {
        this.socket = socket
        this.id = socket.id
    }

    registerResponse(userName) {
        this.socket.emit('registerResponse', userName)
    }

    newGameResponse(newGame) {
        this.socket.emit('newGameResponse', newGame)
    }

    gameListResponse(gameList) {
        this.socket.emit('gameListResponse', gameList)
    }
}