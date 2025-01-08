import type { QrxConfig } from './src/types'

const config: QrxConfig = {
  type: 'bar', // should be qr code

  options: {
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
    valid() { },
  },
}

export default config
