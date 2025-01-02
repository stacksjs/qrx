interface QRCodeOptions {}

export interface QrxConfig {
  type: 'barcode' | 'qrcode'
  options: BarcodeOptions | QRCodeOptions
}

export interface BarcodeOptions {
  /**
   * Width of the barcode
   */
  width: number
  height: number
  format: string
  displayValue: boolean
  fontOptions: string
  font: string
  text: string
  textAlign: string
  textPosition: string
  textMargin: number
  fontSize: number
  background: string
  lineColor: string
  margin: number
  marginTop: number
  marginBottom: number
  marginLeft: number
  marginRight: number
  valid: (valid: boolean) => void
}

interface NodeOptions extends BarcodeOptions {
  xmlDocument?: XMLDocument
}

interface Code128Options extends BarcodeOptions {
  ean128?: boolean
}

interface Ean8Options extends BarcodeOptions {
  flat?: boolean
}

interface Ean13Options extends BarcodeOptions {
  flat?: boolean
  lastChar?: string
}

export type BarcodeConfig = BarcodeOptions | Code128Options | Ean13Options | NodeOptions

export interface Barcode {
  options: (options: BarcodeOptions) => Barcode
  blank: (size: number) => Barcode
  init: (options?: BarcodeOptions) => void
  render: () => void
  CODE39: (value: string, options?: BarcodeOptions) => Barcode
  CODE128: (value: string, options?: Code128Options) => Barcode
  CODE128A: (value: string, options?: Code128Options) => Barcode
  CODE128B: (value: string, options?: Code128Options) => Barcode
  CODE128C: (value: string, options?: Code128Options) => Barcode
  EAN13: (value: string, options?: Ean13Options) => Barcode
  EAN8: (value: string, options?: Ean8Options) => Barcode
  EAN5: (value: string, options?: BarcodeOptions) => Barcode
  EAN2: (value: string, options?: BarcodeOptions) => Barcode
  UPC: (value: string, options?: BarcodeOptions) => Barcode
  ITF14: (value: string, options?: BarcodeOptions) => Barcode
  ITF: (value: string, options?: BarcodeOptions) => Barcode
  MSI: (value: string, options?: BarcodeOptions) => Barcode
  MSI10: (value: string, options?: BarcodeOptions) => Barcode
  MSI11: (value: string, options?: BarcodeOptions) => Barcode
  MSI1010: (value: string, options?: BarcodeOptions) => Barcode
  MSI1110: (value: string, options?: BarcodeOptions) => Barcode
  pharmacode: (value: string, options?: BarcodeOptions) => Barcode
  codabar: (value: string, options?: BarcodeOptions) => Barcode
}
