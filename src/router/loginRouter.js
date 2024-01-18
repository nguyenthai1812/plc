import express from 'express'

import { login } from '../controller/loginController.js'
export const loginRouter = express.Router()
loginRouter.get('/',login)
