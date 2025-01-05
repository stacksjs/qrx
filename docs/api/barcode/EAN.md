# EAN

EAN comes in a variety of forms, most commonly used is EAN-13 (GTIN-13) that is used on world wide to marking the identity of products.

`qrx` supports the formats EAN-13, EAN-8 and UPC as well as the barcode addons EAN-5 and EAN-2.

## Supported modes

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '5901234123457', { format: 'EAN13' })
barcode('#barcode', '123456789999', { format: 'UPC' })
barcode('#barcode', '96385074', { format: 'EAN8' })
barcode('#barcode', '54495', { format: 'EAN5' })
barcode('#barcode', '53', { format: 'EAN2' })
```

## Addon EAN-5 / EAN-2

EAN-5 and EAN-2 is addon barcodes an is always used combined with EAN-13 or EAN-8.
The advanced barcode syntax can be used to add these addons to the barcodes.

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode')
  .EAN13('1234567890128')
  .blank(20) // An blank creates a space between the barcodes
  .EAN5('12345', { height: 85, textPosition: 'top', fontSize: 16 })
  .render()
```

![EAN-13 + EAN-5](http://i.imgur.com/6GKSc9e.png)

## `flat` options for EAN-13, EAN-8 and UPC

EAN-13, EAN-8 and UPC barcodes is most often used with "guard bars". If you don't want these and instead a flat rendering you can specify the `flat` option and skip the guard bars.

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '1234567890128', {
  format: 'ean13',
  flat: true
})
```

![flat EAN-13](http://i.imgur.com/UGu1sbo.png)

## `lastChar` options for EAN-13

EAN-13 is sometimes printed with with a character after the barcode, most common is the `>` character. This is supported in barcode with the `lastChar` option.

```ts
import { barcode } from '@stacksjs/qrx'

barcode('#barcode', '1234567890128', {
  format: 'ean13',
  lastChar: '>'
})
```

![lastChar example](http://i.imgur.com/XgQEbmI.png)

## OCR-B font

When creating an EAN or UPC barcode it is standard to use the [OCR-B](https://en.wikipedia.org/wiki/OCR-B) font. Most variants of this font is not free. There are free versions but none that (we have found) that have the correct license to be able to include in the barcode repository.

When using a custom font with barcode you can specify the font with [@font-face](https://developer.mozilla.org/en/docs/Web/CSS/@font-face) and then do the barcode call. Note that the font has to be loaded before the generation can be made correctly.

```ts
barcode('#canvasBarcode', '123456789012', {
  format: 'EAN13',
  font: 'OCRB',
  fontSize: 18,
  textMargin: 0
})
```

![Barcode with OCR-B font](http://i.imgur.com/g0cWEQc.png)

## Check digits

EAN-13, UPC and EAN-8 all have the last digit being a check digit to verify the content that is encoded. This digit is considered a part of the number and barcode will verify it before generating the barcode.

If the last digit of these barcodes are not specified it will automatically be calculated and added.

```ts
barcode('#barcode', '96385074', { format: 'EAN8' })
// These two are generating identical barcodes
barcode('#barcode', '9638507', { format: 'EAN8' })
```
