module.exports = class RawTextDisplayParser {
  constructor () {
    this.display = []
  }

  _clearPrevious (upd) {
    for (let i = 0; i < this.display.length; i++) {
      const d = this.display[i]
      if (overlaps(d, upd)) {
        this.display.splice(i, 1)
        i--
      }
    }
  }

  setMention (start, input, id) {
    const end = start + input.length
    const upd = {
      type: 'mention',
      start,
      end,
      input,
      id
    }

    this._clearPrevious(upd)
    this.display.push(upd)
  }

  setLink (start, link) {
    const end = start + link.length
    const upd = {
      type: 'link',
      start,
      end,
      input: link,
      link
    }

    this._clearPrevious(upd)
    this.display.push(upd)
  }

  flush (text) {
    for (let i = 0; i < this.display.length; i++) {
      const d = this.display[i]
      if (text.slice(d.start, d.end) !== d.input) {
        this.display.splice(i, 1) // just sanity
        i--
      }
    }

    return {
      display: this.display,
      text
    }
  }
}

function overlaps (a, b) {
  if (a.start <= b.start && b.start < a.end) return true
  if (b.start <= a.start && a.start < b.end) return true
  return false
}
