# CODE39

CODE39 is an old barcode type that can encode numbers, uppercase letters and a number of special characters (`-`, `.`, `$`, `/`, `+`, `%`, and `space`). It has been a common barcode type in the past but CODE128 is recommended if not for legacy reasons.

## Example

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', 'CODE39 Barcode', {
  format: 'CODE39'
})
```

![CODE39 Barcode](http://i.imgur.com/gqvVBrp.png)

## Mod43 checksum

Code 39 is sometimes used with an optional modulo 43 check digit. Using it requires this feature to be enabled in the barcode reader. It is enabled by setting the `mod43` option to `true`.

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', 'ABCDEFG', {
  format: 'CODE39',
  mod43: true
})
```

![CODE39 Barcode](http://i.imgur.com/thX3q8B.png)
