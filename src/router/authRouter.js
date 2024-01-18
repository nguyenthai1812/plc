import express from 'express'
import { checkLogin } from '../controller/autheController.js'
export const authRouter = express.Router()
authRouter.post('/checkauth',checkLogin)
