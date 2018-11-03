import { Module } from '@nestjs/common'
import { AdditionService } from './addition.service'

@Module({
  providers: [AdditionService],
  exports: [AdditionService]
})
export class AdditionModule {}
