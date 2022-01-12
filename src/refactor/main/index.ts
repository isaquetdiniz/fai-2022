import httpServer from "../infra/express/server"

httpServer.listen(3001, () => {
    console.log('Server rodando na 3001')
})