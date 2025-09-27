const RawTextDisplayParser = require('..')

describe('Parse Mention', () => {
  test('onemoji callback is triggered for emoji syntax', () => {
    const mockEmoji = jest.fn()
    const parser = new RawTextDisplayParser({ onemoji: mockEmoji })
    parser.appendText(':smile:')
    expect(mockEmoji).toHaveBeenCalledWith(':smile:')
  })

  test('setEmoji replaces word with emoji', () => {
    const parser = new RawTextDisplayParser()
    parser.appendText(':smile:')
    const success = parser.setEmoji(':smile:', ':smile:', '😊')
    expect(success).toBe(true)
    expect(parser.text).toBe('😊')
    expect(parser.display).toContainEqual({
      type: 'emoji',
      start: 0,
      end: 2,
      content: ':smile:'
    })
  })
})
