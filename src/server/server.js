import express from 'express'
import http from 'http'
import IO from 'socket.io'

const ClientManager = require('./ClientManager')
const GameManager = require('./data/game/GameManager')
const makeHandlers = require ('./handlers')

const clientManager = new ClientManager()
const gameManager = new GameManager()

class Server {

    handeClient(socket) {
        const {
            handleRegister,
            handleJoin,
            handleLeave,
            handleGetGames,
            handleDisconnect
        } = makeHandlers(client, clientManager, gameManager)
    
        console.log('client connected...', client.id)
        clientManager.addClient(client)
    
        client.on('register', handleRegister)
    
        client.on('join', handleJoin)
    
        client.on('leave', handleLeave)
    
        client.on('games', handleGetGames)
    
        client.on('disconnect', function () {
            console.log('client disconnect...', client.id)
            handleDisconnect()
        })
    
        client.on('error', function (err) {
            console.log('received error from client:', client.id)
            console.log(err)
        })
    }

    start() {
        const app = express()
        const server = http.Server(app)
        const io = IO(server)

        io.on('connection', (socket) => this.handleClient(socket))
        server.listen(3000, function (err) {
            if (err) throw err
            console.log('listening on port 3000')
        })
    }

}

const server = new Server().start()