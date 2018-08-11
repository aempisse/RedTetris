import express from 'express'
import http from 'http'
import IO from 'socket.io'

import ClientManager from './ClientManager'
import GameManager from './data/game/GameManager'
import makeHandlers from './handlers'

const clientManager = new ClientManager()
const gameManager = new GameManager()

class Server {

    handleClient(client) {

        console.log('client connected...', client.id)
        clientManager.addClient(client)

        const {
            handleRegister,
            handleNewGame,
            handleGameList
            // handleJoin,
            // handleLeave,
            // handleGetGames,
            // handleDisconnect
        } = makeHandlers(client, clientManager, gameManager)

        client.on('register', handleRegister)
    
        client.on('newGame', handleNewGame)

        client.on('gameList', handleGameList)

        // client.on('join', handleJoin)
    
        // client.on('leave', handleLeave)
    
        // client.on('games', handleGetGames)
    
        client.on('disconnect', function () {
            console.log('client disconnect...', client.id)
            // handleDisconnect()
        })
    
        client.on('error', function (err) {
            console.log('received error from client:', client.id)
            console.log(err)
        })
    }

    start(port) {
        const app = express()
        const server = http.Server(app)
        const io = IO(server)

        io.on('connection', (client) => this.handleClient(client))
        server.listen(port, function (err) {
            if (err) throw err
            console.log('listening on port 3000')
        })
    }

}

const server = new Server().start(3000)