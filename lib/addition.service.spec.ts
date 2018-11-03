import { AdditionService } from '.'

describe(`AdditionService`, () => {
  const additionService = new AdditionService()

  it('should add', () => {
    expect(additionService.add).toBeInstanceOf(Function)
  })
  describe('adding', () => {
    it(`should return the summation of every addend`, async () => {
      expect(await additionService.add(1)).toEqual(1)
      expect(await additionService.add(1, 2)).toEqual(1 + 2)
      expect(await additionService.add(1, 2, 3)).toEqual(1 + 2 + 3)
      expect(await additionService.add(1, 2, 3, 4)).toEqual(1 + 2 + 3 + 4)
      expect(await additionService.add(1, 2, 3, 4, 5)).toEqual(
        1 + 2 + 3 + 4 + 5
      )
      expect(await additionService.add(1, 2, 3, 4, 5, 6)).toEqual(
        1 + 2 + 3 + 4 + 5 + 6
      )
    })
  })
})
