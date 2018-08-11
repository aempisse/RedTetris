export default class ClientManager {
    // mapping of all connected clients
    constructor() {
        this.clients = new Map()
    }

    addClient(client) {
        this.clients.set(client.id, { client })
    }

    registerClient(client, userName) {
        this.clients.set(client.id, { client, userName })
    }

    removeClient(client) {
        this.clients.delete(client.id)
    }

    getClientByClientId(clientId) {
        return (this.clients.get(clientId) || {}).userName
    }

    getClientByUserName(userName) {
        return (this.clients.find(client => client.userName === userName))
    }
}
