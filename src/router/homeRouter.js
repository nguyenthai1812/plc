import express from 'express'
import { home,on,off } from '../controller/homeController.js'
export const homeRouter = express.Router()
homeRouter.get('/home',home)
homeRouter.get('/on',on)
homeRouter.get('/off',off)
