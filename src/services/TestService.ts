import { Test } from '@models/Test'

export default class TestService {
  public test(): Test {
    return { name: 'Hello', description: 'World!' } as Test
  }
}
