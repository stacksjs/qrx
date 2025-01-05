# MSI

MSI or *Modified Plessey* is a barcode developed by the MSI Data Corporation and is primarily used for inventory control, marking storage containers and shelves in warehouse environments. It supports digits 0-9. `qrx` provides automatic checksum calculation of *Mod 10*, *Mod 11*, *Mod 1010* and *Mod 1110*.

## Supported modes

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '1234', { format: 'MSI' }) // Result: 1234
barcode('#barcode', '1234', { format: 'MSI10' }) // Result: 12344
barcode('#barcode', '1234', { format: 'MSI11' }) // Result: 12343
barcode('#barcode', '1234', { format: 'MSI1010' }) // Result: 123448
barcode('#barcode', '1234', { format: 'MSI1110' }) // Result: 123430
```

## Example

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '123456789', {
  format: 'MSI'
})
```

![MSI Barcode](http://i.imgur.com/cm4ZQpE.png)
