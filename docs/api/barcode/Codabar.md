# Codabar

Codabar is an old barcode type that can encode numbers and a number of special characters (`–`, `$`, `:`, `/`, `+`, `.`).

You can set start and stop characters to `A`, `B`, `C` or `D` but if no start and stop character is defined `A` will be used.

## Example

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '1234567890', {
  format: 'codabar'
})
```

![CodabarBarcode](http://i.imgur.com/nzAVIl3.png)

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', 'C1234567890D', {
  format: 'codabar'
})
```

![CodabarBarcode](http://i.imgur.com/TEdMAqp.png)
