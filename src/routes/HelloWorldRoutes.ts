import { Router } from 'express'
import { HelloWorldController } from '@controllers/HelloWorldController'

const routes = Router()

routes.get('/', HelloWorldController.test())

export default routes