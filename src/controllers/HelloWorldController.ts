import { Request, Response } from 'express'
import { HelloWorld } from '@models/HelloWorld'

class HelloWorldController {
  public async helloWorld(req: Request, res: Response): Promise<Response> {
    const helloWorld = new HelloWorld()
    helloWorld.name = 'Hello World'
    helloWorld.description = 'Boilerplate application Node.js + Express + TS'

    return res.json(helloWorld)
  }
}

export default new HelloWorldController()
