import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AdditionModule, AdditionService } from '.'
import { ModuleMetadata } from '@nestjs/common/interfaces'

describe(`AdditionModule`, () => {
  const module = {
    imports: [],
    providers: []
  }

  describe('given a module imports AdditionModule', () => {
    beforeAll(() => {
      module.imports.push(AdditionModule)
    })

    describe('and module provides a provider that injects AdditionService', () => {
      beforeAll(() => {
        module.providers.push([
          {
            provide: 'MockProvider',
            useClass: class MockProvider {
              constructor(private readonly additionService: AdditionService) {}
            }
          }
        ])
      })
      describe('then root module', () => {
        it('should compile', async () => {
          expect(
            await Test.createTestingModule({
              imports: [AdditionModule],
              providers: [
                {
                  provide: 'MockProvider',
                  useClass: class MockProvider {
                    constructor(
                      private readonly additionService: AdditionService
                    ) {}
                  }
                }
              ]
            }).compile()
          ).not.toThrow()
        })
      })
    })
  })
})
