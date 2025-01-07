export interface QRCodeOptions {}
interface QRCodeConfig {}

export interface QrxConfig {
  type: 'bar' | 'qr'
  options: BarcodeConfig | QRCodeConfig
}

export interface BarcodeSettings {
  format: string
  width: string | number
  height: string | number
  displayValue: string | boolean
  text: string | number
  fontOptions: string
  font: string
  textAlign: string
  textPosition: string
  textMargin: string | number
  fontSize: string | number
  background: string
  lineColor: string
  margin: string | number
  marginTop: string | number
  marginBottom: string | number
  marginLeft: string | number
  marginRight: string | number
  flat: boolean
  ean128: string | boolean
  elementTag: string
  valid: (valid: boolean) => void
}

export type BarcodeOptions = Partial<BarcodeSettings>

interface NodeConfig extends BarcodeSettings {
  xmlDocument: XMLDocument
}

export interface NodeOptions extends BarcodeOptions {
  xmlDocument?: XMLDocument
}

interface Code128Config extends BarcodeSettings {
  ean128: boolean
}

interface Code128Options extends BarcodeOptions {
  ean128?: boolean
}

export interface Ean8Config extends BarcodeSettings {
  flat: boolean
}

interface Ean8Options extends BarcodeOptions {
  flat?: boolean
}

interface Ean13Config extends BarcodeOptions {
  flat: boolean
  lastChar: string
}

interface Ean13Options extends BarcodeOptions {
  flat?: boolean
  lastChar?: string
}

export type BarcodeConfig = BarcodeSettings | Code128Config | Ean13Config | NodeConfig

export interface Barcode {
  options: (options: BarcodeConfig) => Barcode
  blank: (size: number) => Barcode
  init: (options?: BarcodeConfig) => void
  render: () => void
  CODE39: (value: string, options?: BarcodeConfig) => Barcode
  CODE128: (value: string, options?: Code128Options) => Barcode
  CODE128A: (value: string, options?: Code128Options) => Barcode
  CODE128B: (value: string, options?: Code128Options) => Barcode
  CODE128C: (value: string, options?: Code128Options) => Barcode
  EAN13: (value: string, options?: Ean13Options) => Barcode
  EAN8: (value: string, options?: Ean8Options) => Barcode
  EAN5: (value: string, options?: BarcodeConfig) => Barcode
  EAN2: (value: string, options?: BarcodeConfig) => Barcode
  UPC: (value: string, options?: BarcodeConfig) => Barcode
  ITF14: (value: string, options?: BarcodeConfig) => Barcode
  ITF: (value: string, options?: BarcodeConfig) => Barcode
  MSI: (value: string, options?: BarcodeConfig) => Barcode
  MSI10: (value: string, options?: BarcodeConfig) => Barcode
  MSI11: (value: string, options?: BarcodeConfig) => Barcode
  MSI1010: (value: string, options?: BarcodeConfig) => Barcode
  MSI1110: (value: string, options?: BarcodeConfig) => Barcode
  Pharmacode: (value: string, options?: BarcodeConfig) => Barcode
  Codabar: (value: string, options?: BarcodeConfig) => Barcode
}
