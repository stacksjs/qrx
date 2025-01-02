import type { QarConfig } from './types'
import { loadConfig } from 'bunfig'

export const defaultConfig: QarConfig = {
  from: 'localhost:5173',
  verbose: true,
}

// eslint-disable-next-line antfu/no-top-level-await
export const config: QarConfig = await loadConfig({
  name: 'binary',
  defaultConfig,
})
