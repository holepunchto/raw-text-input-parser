const RawTextDisplayParser = require('..')

describe('Parse PearLink', () => {
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
