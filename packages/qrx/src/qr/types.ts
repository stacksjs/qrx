/**
 * Enumeration of QR modes.
 */
export enum QRMode {
  MODE_NUMBER = 1, // 1 << 0 is equivalent to 1
  MODE_ALPHA_NUM = 2, // 1 << 1 is equivalent to 2
  MODE_8BIT_BYTE = 4, // 1 << 2 is equivalent to 4
  MODE_KANJI = 8, // 1 << 3 is equivalent to 8
}

/**
 * Enumeration of QR error-correction levels.
 */
export enum QRErrorCorrectLevel {
  L = 1,
  M = 0,
  Q = 3,
  H = 2,
}

/**
 * Enumeration of QR masking patterns.
 */
export enum QRMaskPattern {
  PATTERN000 = 0,
  PATTERN001 = 1,
  PATTERN010 = 2,
  PATTERN011 = 3,
  PATTERN100 = 4,
  PATTERN101 = 5,
  PATTERN110 = 6,
  PATTERN111 = 7,
}

/**
 * Helper interface defining the structure of RS Blocks.
 */
export interface RSBlock {
  totalCount: number
  dataCount: number
  errorCount: number
}

/**
 * Config for drawing/rendering the QRCode.
 */
export interface QRCodeConfig {
  text: string
  width: number
  height: number
  colorDark: string
  colorLight: string
  correctLevel: QRErrorCorrectLevel
  useSVG: boolean
}

export type QRCodeOptions = Partial<QRCodeConfig>
