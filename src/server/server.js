import express from 'express'
import http from 'http'
import IO from 'socket.io'

import ClientManager from './ClientManager'
import GameManager from './data/game/GameManager'
import SocketHandler from './SocketHandler'
import makeHandlers from './handlers'

const clientManager = new ClientManager()
const gameManager = new GameManager()

class Server {
    
    handleClient(socket) {
        
        console.log('client connected...', socket.id)
        clientManager.addClient(socket)

        const socketHandler = new SocketHandler(socket)

        const {
            handleRegister,
            handleNewGame,
            handleGameList
            // handleJoin,
            // handleLeave,
            // handleGetGames,
            // handleDisconnect
        } = makeHandlers(socket, clientManager, gameManager, socketHandler)

        socket.on('register', handleRegister)
    
        socket.on('newGame', handleNewGame)

        socket.on('gameList', handleGameList)

        // client.on('join', handleJoin)
    
        // client.on('leave', handleLeave)
    
        // client.on('games', handleGetGames)
    
        socket.on('disconnect', function () {
            console.log('client disconnect...', socket.id)
            // handleDisconnect()
        })
    
        socket.on('error', function (err) {
            console.log('received error from client:', socket.id)
            console.log(err)
        })
    }

    start(port) {
        const app = express()
        const server = http.Server(app)
        const io = IO(server)

        io.on('connection', (socket) => this.handleClient(socket))
        server.listen(port, function (err) {
            if (err) throw err
            console.log('listening on port 3000')
        })
    }

}

const server = new Server().start(3000)