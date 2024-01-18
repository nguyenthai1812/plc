import express from 'express'
import rootRouter from './router/rootRouter.js'
const app = express()
app.use(express.json())
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','./src/views')
app.use(rootRouter)
app.listen(8080)