import { Request, Response } from 'express'
import TestService from 'src/services/TestService'

class TestController {
  public async test(req: Request, res: Response): Promise<Response> {
    const testService = new TestService()

    return res.json(testService.test())
  }
}

export default new TestController()
