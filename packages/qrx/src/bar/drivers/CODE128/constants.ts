// constants for internal usage
export const SET_A: number = 0
export const SET_B: number = 1
export const SET_C: number = 2

// Special characters
export const SHIFT = 98
export const START_A = 103
export const START_B = 104
export const START_C = 105
export const MODULO = 103
export const STOP = 106
export const FNC1 = 207

// Get set by start code
export const SET_BY_CODE: { [key: number]: number } = {
  [START_A]: SET_A,
  [START_B]: SET_B,
  [START_C]: SET_C,
}

// Get next set by code
export const SWAP: { [key: number]: number } = {
  101: SET_A,
  100: SET_B,
  99: SET_C,
}

export const A_START_CHAR: string = String.fromCharCode(208) // START_A + 105
export const B_START_CHAR: string = String.fromCharCode(209) // START_B + 105
export const C_START_CHAR: string = String.fromCharCode(210) // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
export const A_CHARS = '[\x00-\x5F\xC8-\xCF]'

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
export const B_CHARS = '[\x20-\x7F\xC8-\xCF]'

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
export const C_CHARS = '(\xCF*[0-9]{2}\xCF*)'

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
export const BARS: number[] = [
  11011001100,
  11001101100,
  11001100110,
  10010011000,
  10010001100,
  10001001100,
  10011001000,
  10011000100,
  10001100100,
  11001001000,
  11001000100,
  11000100100,
  10110011100,
  10011011100,
  10011001110,
  10111001100,
  10011101100,
  10011100110,
  11001110010,
  11001011100,
  11001001110,
  11011100100,
  11001110100,
  11101101110,
  11101001100,
  11100101100,
  11100100110,
  11101100100,
  11100110100,
  11100110010,
  11011011000,
  11011000110,
  11000110110,
  10100011000,
  10001011000,
  10001000110,
  10110001000,
  10001101000,
  10001100010,
  11010001000,
  11000101000,
  11000100010,
  10110111000,
  10110001110,
  10001101110,
  10111011000,
  10111000110,
  10001110110,
  11101110110,
  11010001110,
  11000101110,
  11011101000,
  11011100010,
  11011101110,
  11101011000,
  11101000110,
  11100010110,
  11101101000,
  11101100010,
  11100011010,
  11101111010,
  11001000010,
  11110001010,
  10100110000,
  10100001100,
  10010110000,
  10010000110,
  10000101100,
  10000100110,
  10110010000,
  10110000100,
  10011010000,
  10011000010,
  10000110100,
  10000110010,
  11000010010,
  11001010000,
  11110111010,
  11000010100,
  10001111010,
  10100111100,
  10010111100,
  10010011110,
  10111100100,
  10011110100,
  10011110010,
  11110100100,
  11110010100,
  11110010010,
  11011011110,
  11011110110,
  11110110110,
  10101111000,
  10100011110,
  10001011110,
  10111101000,
  10111100010,
  11110101000,
  11110100010,
  10111011110,
  10111101110,
  11101011110,
  11110101110,
  11010000100,
  11010010000,
  11010011100,
  1100011101011,
]
