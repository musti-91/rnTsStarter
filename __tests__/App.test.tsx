// tslint: ignore export function as module
export const sum = (a: number, b: number) => a + b

describe('Config testing', () => {
  it('should return total of given number', () => {
    expect(sum(2, 2)).toEqual(4)
  })
})
