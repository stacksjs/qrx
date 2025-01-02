type TextAlign = 'left' | 'center' | 'right'
type TextPosition = 'top' | 'bottom'

export interface BarcodeOptions {
  width: number
  height: number
  format: string
  displayValue: boolean
  fontOptions: string
  font: string
  text: string | undefined
  textAlign: TextAlign
  textPosition: TextPosition
  textMargin: number
  fontSize: number
  background: string
  lineColor: string
  margin: number
  marginTop: number | undefined
  marginBottom: number | undefined
  marginLeft: number | undefined
  marginRight: number | undefined
  valid: () => void
}

export const defaults: BarcodeOptions = {
  width: 2,
  height: 100,
  format: 'auto',
  displayValue: true,
  fontOptions: '',
  font: 'monospace',
  text: undefined,
  textAlign: 'center',
  textPosition: 'bottom',
  textMargin: 2,
  fontSize: 20,
  background: '#ffffff',
  lineColor: '#000000',
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  valid() {},
}

export default defaults
