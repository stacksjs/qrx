# CODE128

CODE128 is one of the more versatile barcodes. It has support for all 128 ASCII characters but does also encode numbers efficiently. It has three modes (A/B/C) but can switch between them at any time. CODE128 is the default barcode that barcode will choose if nothing else is specified.

## Supported Modes

***Auto (recommended)***

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', 'Example1234') // CODE128 (auto) is the default mode
barcode('#barcode', 'Example1234', { format: 'CODE128' }) // But you can still specify it
```

***Forced modes***

If the barcode scanner only supports one type of CODE128 you can force that mode.

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', 'EXAMPLE\n1234', { format: 'CODE128A' })
barcode('#barcode', 'Example1234', { format: 'CODE128B' })
barcode('#barcode', '12345678', { format: 'CODE128C' })
```

## `ean128` option for CODE128

Enable encoding CODE128 as GS1-128/EAN-128.

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '12345678', {
  format: 'CODE128C',
  ean128: true
})
```

## Non printable characters

CODE128 supports all 128 ASCII characters. You can input them in a few ways.

Here are some examples of how to encode *newlines*, *tabs*, and *carriage returns*.

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '\n\t\r')
barcode('#barcode', '\x0A\x09\x0D')
barcode('#barcode', String.fromCharCode(10, 9, 13))
```

For information about all ASCII character, see [ASCII Table](https://www.asciitable.com/).
