import express from 'express'
import { loginRouter } from './loginRouter.js'
import { homeRouter } from './homeRouter.js'
import {authRouter} from './authRouter.js'

const rootRouter = express.Router()
rootRouter.use(loginRouter)
rootRouter.use(authRouter)
rootRouter.use(homeRouter)
export default rootRouter