// import { describe, expect, it } from 'bun:test'
// import { QRCode, QRErrorCorrectLevel } from '../packages/qrx/src'

// describe('qrx', () => {
//   it('should create a QR code instance', () => {
//     const qr = new QRCode(1, QRErrorCorrectLevel.L)
//     expect(qr).toBeDefined()
//     expect(qr.typeNumber).toBe(1)
//     expect(qr.errorCorrectLevel).toBe(QRErrorCorrectLevel.L)
//   })

//   it('should add data to QR code', () => {
//     const qr = new QRCode(1, QRErrorCorrectLevel.L)
//     qr.addData('Hello World')
//     expect(qr.dataList.length).toBe(1)
//     expect(qr.dataList[0].data).toBe('Hello World')
//   })

//   it('should make QR code with correct module count', () => {
//     const qr = new QRCode(1, QRErrorCorrectLevel.L)
//     qr.addData('Test')
//     qr.make()
//     expect(qr.moduleCount).toBe(21) // Type 1 QR code is 21x21
//     expect(qr.modules.length).toBe(21)
//   })

//   it('should throw error for invalid coordinates', () => {
//     const qr = new QRCode(1, QRErrorCorrectLevel.L)
//     qr.addData('Test')
//     qr.make()
//     expect(() => qr.isDark(-1, 0)).toThrow()
//     expect(() => qr.isDark(0, -1)).toThrow()
//     expect(() => qr.isDark(qr.moduleCount, 0)).toThrow()
//     expect(() => qr.isDark(0, qr.moduleCount)).toThrow()
//   })
// })
