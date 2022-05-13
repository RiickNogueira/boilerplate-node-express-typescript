import { Router } from 'express'
import HelloWorldController from '@controllers/HelloWorldController'

const routes = Router()

routes.get('/', HelloWorldController.helloWorld)

export default routes
