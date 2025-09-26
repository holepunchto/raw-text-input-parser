# raw-text-display-parser

Small state machine to parse chat input state when using raw text

```
npm install raw-text-display-parser
```

## Usage

```js
const RawTextDisplayParser = require('raw-text-display-parser')

const parser = new RawTextDisplayParser()

// when you resolve a mention tell it where
// 42 is the text start, and @mafintosh is the raw text we parsed
// id-42 is the internal result
parser.setMention(42, '@mafintosh', 'id-42')

// same for links
parser.setMention(100, 'https://dr.dk')

// if raw test is copied into the text field and you dont update with o/
// use reset on the range (here start = 100, end = 110)
parser.reset(100, 110)

// when you are done flush it
const result = parser.flush(rawChatInputAsString)

// returns { display, text }
```

## License

Apache-2.0
