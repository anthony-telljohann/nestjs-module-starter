import { Injectable } from '@nestjs/common'

@Injectable()
export class AdditionService {
  public async add(...numbers: number[]): Promise<number> {
    return numbers.reduce((x, y) => x + y, 0)
  }
}
