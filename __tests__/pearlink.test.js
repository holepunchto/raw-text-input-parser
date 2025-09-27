const RawTextDisplayParser = require('..')

describe('Parse PearLink', () => {
  test('onpearlink callback is triggered for pear:// links', () => {
    const mockPearLink = jest.fn()
    const parser = new RawTextDisplayParser({ onpearlink: mockPearLink })
    parser.appendText('pear://example')
    expect(mockPearLink).toHaveBeenCalledWith('pear://example')
  })

  test('setPearLink creates pear-link display entry', () => {
    const parser = new RawTextDisplayParser()
    parser.appendText('pear://example')
    const success = parser.setPearLink('pear://example')
    expect(success).toBe(true)
    expect(parser.display).toContainEqual({
      type: 'pear-link',
      start: 0,
      end: 14,
      content: 'pear://example',
      link: 'pear://example'
    })
  })
})
