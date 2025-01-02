import type { QrxConfig } from './types'
import { loadConfig } from 'bunfig'

export const defaults: QrxConfig = {
  type: 'qrcode',
  options: {
    width: 100,
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

// eslint-disable-next-line antfu/no-top-level-await
export const config: QrxConfig = await loadConfig({
  name: 'qrx',
  defaultConfig: defaults,
})
