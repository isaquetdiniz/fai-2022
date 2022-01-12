import app from 'express'

import router from './routes/heroes-routes'

const httpServer = app()

httpServer.use(router)

export default httpServer